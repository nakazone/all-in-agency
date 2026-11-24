"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { MenuOverlay } from "./MenuOverlay";
import { useLanguage } from "@/lib/i18n/context";

/**
 * Barra simples em carvão: logo, cinco links, idioma e uma ação. As seções da home levam
 * "/" no endereço para funcionar também nas outras páginas; a ação vai para o formulário
 * da própria página quando ela tem um (ctaHref="#contact").
 */
export function Header({ ctaHref = "/#contact" }: { ctaHref?: string }) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.ugc, href: "/ugc" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.about, href: "/#about" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-ink text-paper">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-5 md:px-8">
          <Link href="/" className="relative z-10 inline-flex min-h-11 items-center" aria-label={t.nav.home}>
            <Logo variant="light" priority className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={t.nav.primary}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.href === pathname ? "page" : undefined}
                className="inline-flex min-h-11 items-center rounded-full px-4 text-[15px] text-paper/85 transition-colors duration-200 hover:bg-white/10 hover:text-paper aria-[current=page]:bg-white/10 aria-[current=page]:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-2">
            <LanguageToggle />
            <a
              href={ctaHref}
              className="hidden min-h-11 items-center rounded-full bg-red px-5 text-[15px] font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-red-dark active:scale-[0.97] sm:inline-flex"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              aria-label={open ? t.nav.close : t.nav.open}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-semibold text-paper transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? t.nav.close : t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} ctaHref={ctaHref} />
    </>
  );
}
