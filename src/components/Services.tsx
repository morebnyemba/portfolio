import Link from "next/link";
import { contact, services } from "@/lib/data";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import StackedSection from "./StackedSection";

export default function Services() {
  return (
    <StackedSection
      id="support"
      z={40}
      top="top-20"
      maxWidthClassName="max-w-5xl"
      pullUpClassName="sm:-mt-[700px]"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        Technical Support
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        Need a hand outside of a full project — debugging, a deployment, a server on fire?
        Hourly technical assistance is available, remote or on-site.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.name} delay={i * 80}>
            <Spotlight className="rounded-2xl" color="var(--accent-2)">
              <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent-2/40 group-hover:shadow-xl group-hover:shadow-black/40">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="whitespace-nowrap">
                    <span className="text-2xl font-semibold text-accent">{service.price}</span>
                    <span className="text-sm text-muted">{service.unit}</span>
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          WhatsApp
        </Link>
        <Link
          href={contact.call}
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
        >
          Call {contact.phoneDisplay}
        </Link>
      </div>
    </StackedSection>
  );
}
