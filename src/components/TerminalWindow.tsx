import type { ReactNode } from "react";

export default function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface font-mono text-sm shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 truncate text-xs text-muted">{title}</span>
      </div>
      <div className="overflow-x-auto p-6 leading-relaxed">{children}</div>
    </div>
  );
}
