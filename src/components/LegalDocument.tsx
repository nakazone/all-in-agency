"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { LEGAL_UPDATED, legalContent, legalLabels, legalPaths, type LegalKey } from "@/lib/content/legal";

const linkClass = "inline-flex min-h-11 items-center underline underline-offset-4 hover:text-red-dark";

/**
 * Página de texto legal no idioma escolhido: título, data da versão, índice (fixo ao lado no
 * computador) e as seções. No fim, atalhos para os outros dois documentos.
 */
export function LegalDocument({ doc }: { doc: LegalKey }) {
  const { t, locale } = useLanguage();
  const content = legalContent[locale];
  const d = content[doc];
  const labels = legalLabels[locale];
  const withEmail = (s: string) => s.replaceAll("{email}", t.contact.email);
  const updated = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${LEGAL_UPDATED}T00:00:00Z`));
  const others = (Object.keys(legalPaths) as LegalKey[]).filter((k) => k !== doc);

  return (
    <article id="top" aria-labelledby="legal-title" className="bg-paper text-ink">
      <header className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-14 md:px-8 md:pt-24 md:pb-20">
          <h1 id="legal-title" className="font-display text-[clamp(40px,5.5vw,84px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
            {d.title}
          </h1>
          <p className="mt-5 text-[15px] text-paper/70">
            {labels.updated} <time dateTime={LEGAL_UPDATED}>{updated}</time>
          </p>
          <p className="mt-6 max-w-[62ch] text-lg leading-[1.55] text-paper/85">{d.intro}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12">
        <nav aria-label={labels.onThisPage} className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-[15px] font-semibold text-gray">{labels.onThisPage}</h2>
            <ol className="mt-2 flex flex-col">
              {d.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-flex min-h-11 items-center text-[15px] leading-tight hover:underline hover:underline-offset-4">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="flex max-w-[68ch] flex-col gap-12 lg:col-span-8 lg:col-start-5">
          {d.sections.map((s) => {
            const List = s.ordered ? "ol" : "ul";
            return (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24">
                <h2 id={`${s.id}-h`} className="font-display text-[clamp(26px,2.6vw,36px)] leading-[1.1] font-extrabold tracking-[-0.02em]">
                  {s.heading}
                </h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-[1.6]">{withEmail(p)}</p>
                ))}
                {s.items && (
                  <List className={`mt-4 flex flex-col gap-3 pl-6 text-lg leading-[1.6] ${s.ordered ? "list-decimal" : "list-disc"} marker:text-gray`}>
                    {s.items.map((item) => (
                      <li key={item} className="pl-1">{withEmail(item)}</li>
                    ))}
                  </List>
                )}
                {s.after?.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-[1.6]">{withEmail(p)}</p>
                ))}
                {s.mail && (
                  <a
                    href={`mailto:${t.contact.email}?subject=${encodeURIComponent(s.mail.subject)}`}
                    className="mt-6 inline-flex min-h-12 items-center rounded-full bg-red px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-red-dark"
                  >
                    {s.mail.label}
                  </a>
                )}
                {s.links && (
                  <ul className="mt-2 flex flex-col text-lg">
                    {s.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className={linkClass}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}

          <nav aria-label={labels.others} className="border-t border-line pt-8">
            <h2 className="text-[15px] font-semibold text-gray">{labels.others}</h2>
            <ul className="mt-2 flex flex-col text-lg">
              {others.map((k) => (
                <li key={k}>
                  <Link href={legalPaths[k]} className={linkClass}>{content[k].title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </article>
  );
}
