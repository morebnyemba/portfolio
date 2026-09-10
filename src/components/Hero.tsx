import Link from "next/link";
import { contact, products } from "@/lib/data";
import HeroNetwork from "./HeroNetwork";
import TerminalWindow from "./TerminalWindow";
import TypingTerminal, { type TerminalLine } from "./TypingTerminal";

const statusLines: TerminalLine[] = [
  { type: "cmd", text: "status --live" },
  { type: "out", text: `✓ ${products.length} production systems shipping right now` },
  { type: "out", text: "✓ AI integrations: OpenAI · Anthropic Claude · agentic workflows" },
  { type: "out", text: "✓ Availability: open for new projects, not a role" },
];

export default function Hero() {
  return (
    <section id="top" className="glow relative overflow-hidden px-6 pb-20 pt-20 sm:pt-28">
      <HeroNetwork />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open for new projects — not looking for a role
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Full-stack engineering,{" "}
          <span className="gradient-text whitespace-nowrap">AI-native</span> by default.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted">
          I design and ship production systems end to end — backends, frontends, and the
          LLM integrations that turn a product into something genuinely intelligent.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Let&apos;s talk on WhatsApp
          </Link>
          <Link
            href={contact.call}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            Call {contact.phoneDisplay}
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            Email me
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-lg text-left">
          <TerminalWindow title="moreblessing@dev: ~">
            <TypingTerminal lines={statusLines} />
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
