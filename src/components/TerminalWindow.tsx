import type { ReactNode } from "react";

export default function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border shadow-2xl shadow-black/60">
      <div className="relative z-10 flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 truncate font-mono text-xs text-white/40">{title}</span>
      </div>
      <div className="terminal-homebrew relative overflow-x-auto p-6 font-mono text-sm leading-relaxed">
        <div className="terminal-scanlines" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
