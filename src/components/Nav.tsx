import Link from "next/link";
import { contact } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold tracking-tight">
          Moreblessing Nyemba
        </Link>
        <div className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover"
        >
          Start a project
        </Link>
      </nav>
    </header>
  );
}
