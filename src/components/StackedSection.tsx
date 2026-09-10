import type { ReactNode } from "react";

export default function StackedSection({
  id,
  eyebrow,
  z,
  top,
  spacerClassName,
  pullUpClassName,
  children,
}: {
  id: string;
  eyebrow: string;
  z: number;
  top: string;
  spacerClassName?: string;
  pullUpClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative ${pullUpClassName ?? ""}`}
      style={{ zIndex: z }}
    >
      <div
        className={`sticky ${top} border-t border-border bg-background px-6 pb-16 pt-14 shadow-[0_-24px_48px_-24px_rgba(0,0,0,0.75)]`}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</h2>
          <div className="mt-6">{children}</div>
        </div>
      </div>
      {spacerClassName && <div aria-hidden className={spacerClassName} />}
    </section>
  );
}
