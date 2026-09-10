import Link from "next/link";
import { contact, services } from "@/lib/data";

export default function Services() {
  return (
    <section id="support" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Technical Support
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Need a hand outside of a full project — debugging, a deployment, a server on fire?
          Hourly technical assistance is available, remote or on-site.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.name} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{service.name}</h3>
                <p className="whitespace-nowrap">
                  <span className="text-2xl font-semibold text-accent">{service.price}</span>
                  <span className="text-sm text-muted">{service.unit}</span>
                </p>
              </div>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </div>
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
      </div>
    </section>
  );
}
