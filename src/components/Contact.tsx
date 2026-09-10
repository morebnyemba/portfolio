import Link from "next/link";
import { contact } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-lg text-muted">
          Tell me what you&apos;re building. I&apos;ll tell you if it&apos;s a good idea.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
          <Link
            href={`mailto:${contact.email}`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            {contact.email}
          </Link>
          <Link
            href={contact.agency}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            slykertech.net
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
