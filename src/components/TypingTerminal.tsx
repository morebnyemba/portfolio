"use client";

import { useEffect, useRef, useState } from "react";

export type TerminalLine =
  | { type: "cmd"; text: string; gapBefore?: boolean }
  | { type: "out"; text: string; dim?: boolean; indent?: boolean };

// All lines are server-rendered (untyped ones only visually hidden) so crawlers get the text and card height stays fixed.
export default function TypingTerminal({
  lines,
  className,
}: {
  lines: TerminalLine[];
  className?: string;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reducedMotion.current) {
      setLineIndex(lines.length);
      return;
    }
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex];

    if (current.type === "cmd") {
      if (charIndex < current.text.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 22 + Math.random() * 30);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 240);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setLineIndex((i) => i + 1), 110);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, lines]);

  const finished = lineIndex >= lines.length;

  return (
    <div className={className}>
      <div className="sr-only">
        {lines.map((line, i) => (
          <p key={i}>{line.type === "cmd" ? `$ ${line.text}` : line.text}</p>
        ))}
      </div>

      <div aria-hidden="true">
        {lines.map((line, i) => {
          const state = i < lineIndex ? "done" : i === lineIndex ? "active" : "pending";
          return (
            <Line
              key={i}
              line={line}
              state={state}
              typed={state === "active" ? charIndex : undefined}
            />
          );
        })}
        <p className={`typing-line mt-5 ${finished ? "" : "invisible"}`}>
          <span>$ </span>
          <span className="cursor-blink">▌</span>
        </p>
      </div>
    </div>
  );
}

function Line({
  line,
  state,
  typed,
}: {
  line: TerminalLine;
  state: "done" | "active" | "pending";
  typed?: number;
}) {
  const hidden = state === "pending" || (state === "active" && line.type === "out");

  if (line.type === "cmd") {
    const shown = state === "active" ? line.text.slice(0, typed) : line.text;
    const rest = state === "active" ? line.text.slice(typed) : "";
    return (
      <p className={`typing-line ${line.gapBefore ? "mt-5" : ""} ${hidden ? "invisible" : ""}`}>
        <span>$ </span>
        <span>{shown}</span>
        {state === "active" && <span className="cursor-blink">▌</span>}
        {rest && <span className="invisible">{rest}</span>}
      </p>
    );
  }

  return (
    <p
      className={`typing-line mt-1 ${line.indent ? "pl-4" : ""} ${line.dim ? "hb-dim" : ""} ${
        hidden ? "invisible" : ""
      }`}
    >
      {line.text}
    </p>
  );
}
