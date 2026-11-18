"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

/** Fechamento: a marca volta em toda a largura, com o que a All In faz e o contato. */
export function Footer() {
  const { t } = useLanguage();
  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-ink pt-24 pb-10 text-paper">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <p className="max-w-[30ch] text-2xl leading-[1.35] lg:col-span-6">{t.footer.line}</p>
          <nav aria-label={t.nav.primary} className="lg:col-span-2 lg:col-start-7">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-11 items-center text-lg text-paper/85 transition-colors hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col lg:col-span-4 lg:col-start-9">
            <a href={`mailto:${t.contact.email}`} className="inline-flex min-h-11 items-center text-lg break-words text-paper/85 hover:text-paper">
              {t.contact.email}
            </a>
            <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center text-lg text-paper/85 hover:text-paper">
              {t.contact.phone}
            </a>
          </div>
        </div>

        <a href="#top" aria-label={t.nav.home} className="mt-20 block">
          <Image src="/brand/logo-negativo.svg" alt="" width={354} height={198} unoptimized className="h-auto w-[min(100%,980px)]" />
        </a>

        <p className="mt-8 text-[15px] text-paper/70">
          © {new Date().getFullYear()} All In. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
