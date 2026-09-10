import TerminalWindow from "./TerminalWindow";

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">About</h2>
        <div className="mt-6">
          <TerminalWindow title="moreblessing@dev: ~/about">
            <p>
              <span className="text-accent">$</span> whoami
            </p>
            <p className="mt-1 text-foreground/90">
              Moreblessing Nyemba — Full-Stack Engineer, AI Integrations
            </p>

            <p className="mt-5">
              <span className="text-accent">$</span> cat mission.txt
            </p>
            <p className="mt-1 text-muted">
              I build production systems end to end — backend architecture, API design,
              database performance, and the frontends that sit on top of them. My work spans
              multi-tenant SaaS, WhatsApp-based automation at scale, and client platforms
              across FinTech, travel, and logistics, with deep, hands-on expertise wiring AI
              and LLM tooling into real products, not just prototypes.
            </p>

            <p className="mt-5">
              <span className="text-accent">$</span> cat availability.txt
            </p>
            <p className="mt-1 text-muted">
              Not looking for a role. Open for production-grade AI integrations,
              conversational automation platforms, and full-stack builds done right.
            </p>

            <p className="mt-5 flex items-center gap-2">
              <span className="text-accent">$</span>
              <span className="inline-block h-4 w-2 animate-pulse bg-foreground/80" />
            </p>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
