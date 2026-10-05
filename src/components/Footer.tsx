"use client";

import { Logo } from "./Logo";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-ink pt-20 pb-8 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-4%] flex justify-center overflow-hidden opacity-[0.06]"
      >
        <Logo variant="light" className="h-auto w-[min(90vw,920px)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <a href="#top" aria-label="All In home">
              <Logo variant="light" className="h-9 w-[176px]" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Facebook", href: "https://facebook.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line-on-dark text-[11px] text-paper/60 transition-colors hover:border-red hover:text-red"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase">
                {t.footer.navigation}
              </p>
              <ul className="space-y-2.5">
                {t.footer.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase">
                {t.footer.services}
              </p>
              <ul className="space-y-2.5">
                {t.footer.serviceLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="#services"
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase">
                {t.footer.company}
              </p>
              <ul className="space-y-2.5">
                {t.footer.companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-paper/45 uppercase">
                {t.footer.letsTalk}
              </p>
              <ul className="space-y-2.5 text-sm text-paper/70">
                <li>
                  <a
                    href="mailto:contato@agenciaallin.com.br"
                    className="transition-colors hover:text-paper"
                  >
                    contato@agenciaallin.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5511989338312"
                    className="transition-colors hover:text-paper"
                  >
                    +55 11 98933-8312
                  </a>
                </li>
                <li className="pt-2">São Paulo · Brasil</li>
                <li>Miami · EUA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-on-dark pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-5">
            <a href="#contact" className="transition-colors hover:text-paper">
              {t.footer.privacy}
            </a>
            <a href="#contact" className="transition-colors hover:text-paper">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
