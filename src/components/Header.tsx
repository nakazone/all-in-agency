"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { MenuOverlay } from "./MenuOverlay";
import { useLanguage } from "@/lib/i18n/context";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.careers, href: "#contact" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-line-on-dark/40 bg-ink/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-8 lg:px-10">
          <a href="#top" className="relative z-10" aria-label="allin home">
            <Logo variant="light" className="h-7 w-[96px]" />
          </a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="font-sans text-[13px] text-paper/80 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              aria-label={open ? t.menu.close : t.menu.open}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-on-dark text-paper transition-colors hover:border-paper/50"
            >
              <span className="sr-only">{open ? t.menu.close : t.menu.open}</span>
              <span className="flex w-4 flex-col gap-1.5">
                <span
                  className={`h-px w-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
