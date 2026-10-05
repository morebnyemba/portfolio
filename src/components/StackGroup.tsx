"use client";

import { useEffect, useRef, type ReactNode } from "react";

const STICKY_TOP = 80;
const BOTTOM_GAP = 16;
const OVERLAP = 24;
const HOLD_VH = 0.3;

export default function StackGroup({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const group = ref.current;
    if (!group) return;
    const sections = Array.from(group.querySelectorAll<HTMLElement>("[data-stack-section]"));
    const cards = sections.map((s) => s.querySelector<HTMLElement>(".stack-card")!);
    const spacers = sections.map((s) => s.querySelector<HTMLElement>(".stack-spacer")!);
    const wide = window.matchMedia("(min-width: 640px)");

    function layout() {
      const enabled = wide.matches;
      group!.dataset.stacked = String(enabled);
      const vh = window.innerHeight;
      // Cards taller than the viewport pin by their bottom edge (negative top) so no content is trapped.
      const tops = cards.map((c) => Math.min(STICKY_TOP, vh - c.offsetHeight - BOTTOM_GAP));
      // pulls[i]: how far card i+1 is pulled up so it locks OVERLAP px before card i unpins.
      const pulls = cards.map((c, i) =>
        i < cards.length - 1 ? c.offsetHeight + tops[i] - tops[i + 1] + OVERLAP : 0
      );

      sections.forEach((s, i) => {
        const last = i === sections.length - 1;
        cards[i].style.setProperty("--stick-top", enabled ? `${tops[i]}px` : "");
        // Dwell must exceed the pull, or the next card covers this one before it ever pins.
        spacers[i].style.height = enabled && !last ? `${pulls[i] + vh * HOLD_VH}px` : "";
        s.style.marginTop = enabled && i > 0 ? `-${pulls[i - 1]}px` : "";
      });
    }

    layout();
    const ro = new ResizeObserver(layout);
    cards.forEach((c) => ro.observe(c));
    window.addEventListener("resize", layout);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", layout);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
