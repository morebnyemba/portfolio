export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">About</h2>
        <p className="mt-4 text-xl leading-relaxed text-foreground/90 sm:text-2xl">
          I build production systems end to end — backend architecture, API design, database
          performance, and the frontends that sit on top of them. My work spans multi-tenant
          SaaS, WhatsApp-based automation at scale, and client platforms across FinTech, travel,
          and logistics, with deep, hands-on expertise wiring AI and LLM tooling into real
          products, not just prototypes.
        </p>
        <p className="mt-6 text-lg text-muted">
          If you need a production-grade AI integration, a conversational automation platform,
          or a full-stack build done right, that&apos;s the work I take on.
        </p>
      </div>
    </section>
  );
}
