import type { ReactNode } from "react";

export default function StackedSection({
  id,
  z,
  maxWidthClassName = "max-w-3xl",
  children,
}: {
  id: string;
  z: number;
  maxWidthClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} data-stack-section className="relative" style={{ zIndex: z }}>
      <div className="stack-card border-t border-border bg-background px-6 pb-16 pt-14 shadow-[0_-24px_48px_-24px_rgba(0,0,0,0.75)]">
        <div className={`mx-auto ${maxWidthClassName}`}>{children}</div>
      </div>
      <div aria-hidden className="stack-spacer" />
    </section>
  );
}
