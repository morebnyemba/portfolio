import { stack } from "@/lib/data";
import TerminalWindow from "./TerminalWindow";
import TypingTerminal, { type TerminalLine } from "./TypingTerminal";

function slugify(title: string) {
  return title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
}

const lines: TerminalLine[] = stack.flatMap((group, i) => [
  { type: "cmd" as const, text: `ls ./${slugify(group.title)}/`, gapBefore: i > 0 },
  { type: "out" as const, text: group.items.join("   "), indent: true },
]);

export default function Stack() {
  return (
    <section id="stack" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Stack</h2>
        <div className="mt-6">
          <TerminalWindow title="moreblessing@dev: ~/stack">
            <TypingTerminal lines={lines} />
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
