import { stack } from "@/lib/data";
import StackedSection from "./StackedSection";
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
    <StackedSection
      id="stack"
      z={20}
      top="top-20"
      pullUpClassName="sm:-mt-[720px]"
      spacerClassName="hidden sm:block sm:h-[35vh]"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Stack</h2>
      <div className="mt-6">
        <TerminalWindow title="moreblessing@dev: ~/stack">
          <TypingTerminal lines={lines} />
        </TerminalWindow>
      </div>
    </StackedSection>
  );
}
