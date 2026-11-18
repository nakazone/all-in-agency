"use client";

import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/i18n/context";

const linkClass =
  "group relative inline-flex min-h-11 w-fit items-center text-lg text-paper/80 transition-colors duration-200 hover:text-paper";
// Sublinhado que cresce da esquerda ao passar o mouse ou focar.
const underline =
  "after:absolute after:bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-red-on-dark after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100";

/**
 * Fechamento: uma chamada final com o Otto acenando, colunas de navegação, serviços e
 * contato, e a barra com os direitos e o "voltar ao topo". A marca d'água do ambigrama
 * vem do layout anterior.
 */
export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const nav = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Marca d'água do ambigrama, decorativa. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-[6%] flex justify-center opacity-[0.06]">
        <Image src="/brand/logo-branco.svg" alt="" width={354} height={198} unoptimized className="h-auto w-[min(92vw,1100px)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Chamada final */}
        <div className="flex flex-col gap-8 pt-24 pb-16 md:flex-row md:items-end md:justify-between md:pt-32">
          <div>
            <p data-reveal className="font-display text-[clamp(40px,5vw,76px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
              {f.cta}
            </p>
            <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-8">
              {/* O formulário fica logo acima; aqui, o canal direto por e-mail. */}
              <MagneticButton
                href={`mailto:${t.contact.email}`}
                className="inline-flex min-h-14 items-center gap-3 rounded-full bg-red px-8 text-lg font-semibold text-white transition-colors duration-200 hover:bg-red-dark"
              >
                {t.contact.email}
                <span aria-hidden="true">→</span>
              </MagneticButton>
            </div>
          </div>
          <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="relative aspect-square w-40 self-end md:w-56">
            <Image src="/otto/otto-03-aceno.png" alt="" fill sizes="224px" className="otto-float object-contain" />
          </div>
        </div>

        {/* Colunas */}
        <div className="grid gap-12 rounded-[24px] bg-white/5 p-8 sm:grid-cols-2 md:p-10 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <a href="#top" aria-label={t.nav.home} className="inline-flex min-h-11 w-fit items-center">
              <Logo variant="light" className="h-12 w-auto" />
            </a>
            <p className="max-w-[30ch] text-lg leading-[1.5] text-paper/80">{f.line}</p>
            <LanguageToggle className="w-fit" />
          </div>

          <nav aria-label={f.navTitle} className="lg:col-span-2 lg:col-start-6">
            <h2 className="text-[15px] font-semibold text-paper/60">{f.navTitle}</h2>
            <ul className="mt-3 flex flex-col">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={`${linkClass} ${underline}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="text-[15px] font-semibold text-paper/60">{f.servicesTitle}</h2>
            <ul className="mt-3 flex flex-col">
              {t.hand.cards.map((c) => (
                <li key={c.id}>
                  <a href="#services" className={`${linkClass} ${underline}`}>
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="text-[15px] font-semibold text-paper/60">{f.contactTitle}</h2>
            <ul className="mt-3 flex flex-col">
              <li>
                <a href={`mailto:${t.contact.email}`} className={`${linkClass} ${underline} break-all`}>
                  {t.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className={`${linkClass} ${underline}`}>
                  {t.contact.phone}
                </a>
              </li>
              <li className="pt-2 text-[15px] text-paper/70">{t.contact.places}</li>
            </ul>
          </div>
        </div>

        {/* Barra final */}
        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] text-paper/70">
            © {new Date().getFullYear()} All In. {f.rights}
          </p>
          <a
            href="#top"
            className="group inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-white/10 px-5 text-[15px] font-semibold transition-colors duration-200 hover:bg-white/20"
          >
            {f.top}
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
