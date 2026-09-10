"use client";

import { useEffect, useRef, useState } from "react";

export type TerminalLine =
  | { type: "cmd"; text: string; gapBefore?: boolean }
  | { type: "out"; text: string; dim?: boolean; indent?: boolean };

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
    reducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
        const delay = 22 + Math.random() * 30;
        const t = setTimeout(() => setCharIndex((c) => c + 1), delay);
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
  const current = !finished ? lines[lineIndex] : undefined;

  return (
    <div className={className}>
      {lines.slice(0, lineIndex).map((line, i) => (
        <StaticLine key={i} line={line} />
      ))}
      {current?.type === "cmd" && (
        <p className={current.gapBefore ? "mt-5" : undefined}>
          <span>$ </span>
          <span>{current.text.slice(0, charIndex)}</span>
          <span className="cursor-blink">▌</span>
        </p>
      )}
      {finished && (
        <p className="mt-5">
          <span>$ </span>
          <span className="cursor-blink">▌</span>
        </p>
      )}
    </div>
  );
}

function StaticLine({ line }: { line: TerminalLine }) {
  if (line.type === "cmd") {
    return (
      <p className={line.gapBefore ? "mt-5" : undefined}>
        <span>$ </span>
        <span>{line.text}</span>
      </p>
    );
  }
  return (
    <p className={`mt-1 ${line.indent ? "pl-4" : ""} ${line.dim ? "hb-dim" : ""}`}>{line.text}</p>
  );
}
