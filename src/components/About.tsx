import StackedSection from "./StackedSection";
import TerminalWindow from "./TerminalWindow";
import TypingTerminal, { type TerminalLine } from "./TypingTerminal";

const lines: TerminalLine[] = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Moreblessing Nyemba — Full-Stack Engineer, AI Integrations" },
  { type: "cmd", text: "cat mission.txt", gapBefore: true },
  {
    type: "out",
    text: "I build production systems end to end — backend architecture, API design, database performance, and the frontends that sit on top of them. My work spans multi-tenant SaaS, WhatsApp-based automation at scale, and client platforms across FinTech, travel, and logistics, with deep, hands-on expertise wiring AI and LLM tooling into real products, not just prototypes.",
    dim: true,
  },
  { type: "cmd", text: "cat credentials.txt", gapBefore: true },
  {
    type: "out",
    text: "Founder, Slyker Tech Web Services — operating multiple production sites for clients across FinTech, travel, and logistics.",
    dim: true,
  },
  { type: "cmd", text: "cat availability.txt", gapBefore: true },
  {
    type: "out",
    text: "Not looking for a role. Open for production-grade AI integrations, conversational automation platforms, and full-stack builds done right.",
    dim: true,
  },
];

export default function About() {
  return (
    <StackedSection id="about" z={10} top="top-20" spacerClassName="h-[65vh]">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">About</h2>
      <div className="mt-6">
        <TerminalWindow title="moreblessing@dev: ~/about">
          <TypingTerminal lines={lines} />
        </TerminalWindow>
      </div>
    </StackedSection>
  );
}
