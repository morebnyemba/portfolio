import Link from "next/link";
import { contact } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="glow relative px-6 pb-20 pt-20 sm:pt-28">
      <div className="mx-auto max-w-3xl text-center">
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
            href={`mailto:${contact.email}`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            Email me
          </Link>
        </div>
      </div>
    </section>
  );
}
