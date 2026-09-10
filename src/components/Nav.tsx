"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contact } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    function update() {
      setScrolled(window.scrollY > 40);

      const offset = 120;
      let current = "";
      for (const link of links) {
        const el = document.getElementById(link.href.slice(1));
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= window.scrollY + offset) current = link.href.slice(1);
      }
      setActiveId(current);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border/80 bg-background/90 shadow-lg shadow-black/20 backdrop-blur"
          : "border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold tracking-tight">
          Moreblessing Nyemba
        </Link>

        <div className="hidden items-center gap-8 text-sm sm:flex">
          {links.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={contact.call}
            className="hidden text-sm text-muted transition-colors hover:text-foreground sm:inline"
          >
            {contact.phoneDisplay}
          </Link>
          <Link
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover sm:inline-block"
          >
            Start a project
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-surface sm:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={activeId === link.href.slice(1) ? "text-foreground" : "text-muted"}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
            >
              WhatsApp
            </Link>
            <Link
              href={contact.call}
              onClick={() => setMobileOpen(false)}
              className="rounded-full border border-border px-4 py-2 text-sm"
            >
              {contact.phoneDisplay}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
