"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { ugcContent } from "@/lib/content/ugc";

const sectionTitle = "font-display text-[clamp(36px,4.5vw,64px)] leading-[0.95] font-extrabold tracking-[-0.04em]";
const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * Página da All In UGC: oferta, o que a marca recebe, etapas, piloto, convite às criadoras
 * e perguntas frequentes. A ação principal é pedir a proposta pelo formulário no fim da página.
 */
export function UgcPage() {
  const { t, locale } = useLanguage();
  const c = ugcContent[locale];
  const castingMail = `mailto:${t.contact.email}?subject=${encodeURIComponent(c.creators.mailSubject)}`;

  return (
    <>
      <section id="top" aria-labelledby="ugc-title" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pt-16 pb-24 md:grid-cols-12 md:items-center md:px-8 md:pt-24 md:pb-32">
          <div className="md:col-span-7">
            <p data-reveal className="text-[15px] font-semibold text-red-on-dark">{c.kicker}</p>
            <h1 id="ugc-title" data-reveal style={delay(1)} className="mt-4 font-display text-[clamp(40px,5.5vw,84px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
              {c.title}
            </h1>
            <p data-reveal style={delay(2)} className="mt-6 max-w-[52ch] text-lg leading-[1.55] text-paper/85">{c.lead}</p>
            <div data-reveal style={delay(3)} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex min-h-12 items-center rounded-full bg-red px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-red-dark">
                {c.cta}
              </a>
              <a href="#how" className="inline-flex min-h-12 items-center rounded-full px-5 text-base font-semibold text-paper underline-offset-4 hover:underline">
                {c.secondary}
              </a>
            </div>
          </div>
          <div data-reveal style={delay(2)} className="relative mx-auto aspect-square w-[60%] md:col-span-4 md:col-start-9 md:w-full">
            <Image src="/otto/otto-15-focado-criando.png" alt="" fill priority sizes="(min-width: 768px) 30vw, 60vw" className="otto-float object-contain" />
          </div>
        </div>
      </section>

      <section aria-labelledby="ugc-get" className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8">
          <h2 id="ugc-get" data-reveal className={sectionTitle}>{c.get.title}</h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.get.items.map((item, i) => (
              <li key={item.name} data-reveal style={delay(i + 1)} className="flex flex-col gap-3 rounded-[24px] bg-paper-2 p-7">
                <h3 className="font-display text-2xl leading-[1.1] font-extrabold tracking-[-0.02em]">{item.name}</h3>
                <p className="text-lg leading-[1.55]">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="how" aria-labelledby="ugc-how" className="bg-petroleo py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <h2 id="ugc-how" data-reveal className={`${sectionTitle} md:col-span-6`}>{c.how.title}</h2>
            <p data-reveal style={delay(1)} className="max-w-[46ch] text-lg leading-[1.55] md:col-span-5 md:col-start-8">{c.how.lead}</p>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {c.how.steps.map((step, i) => (
              <li key={step.name} data-reveal style={delay(i + 1)} className="flex flex-col gap-3 rounded-[24px] bg-white/10 p-7">
                <span aria-hidden="true" className="font-display text-5xl leading-none font-extrabold">{i + 1}</span>
                <h3 className="font-display text-2xl leading-[1.1] font-extrabold tracking-[-0.02em]">{step.name}</h3>
                <p className="text-lg leading-[1.55] text-white/90">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="ugc-pilot" className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <h2 id="ugc-pilot" data-reveal className={sectionTitle}>{c.pilot.title}</h2>
            <p data-reveal style={delay(1)} className="mt-6 max-w-[42ch] text-lg leading-[1.55]">{c.pilot.body}</p>
            <a data-reveal style={delay(2)} href="#contact" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-red px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-red-dark">
              {c.cta}
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
            <div data-reveal style={delay(2)} className="rounded-[24px] bg-petroleo-soft p-7">
              <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em]">{c.pilot.includedTitle}</h3>
              <ul className="mt-4 flex flex-col gap-3 text-lg leading-[1.45]">
                {c.pilot.included.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span aria-hidden="true" className="font-semibold">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={delay(3)} className="rounded-[24px] border border-line p-7">
              <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em]">{c.pilot.excludedTitle}</h3>
              <ul className="mt-4 flex flex-col gap-3 text-lg leading-[1.45] text-gray">
                {c.pilot.excluded.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span aria-hidden="true">–</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="ugc-creators" className="bg-ink py-24 text-paper md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-12 md:items-start md:px-8">
          <div className="md:col-span-6">
            <h2 id="ugc-creators" data-reveal className={sectionTitle}>{c.creators.title}</h2>
            <p data-reveal style={delay(1)} className="mt-6 max-w-[46ch] text-lg leading-[1.55] text-paper/85">{c.creators.body}</p>
            <a data-reveal style={delay(2)} href={castingMail} className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white/10 px-6 text-base font-semibold transition-colors duration-200 hover:bg-white/20">
              {c.creators.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div data-reveal style={delay(2)} className="rounded-[24px] bg-white/5 p-7 md:col-span-5 md:col-start-8">
            <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em]">{c.creators.dataTitle}</h3>
            <p className="mt-3 text-lg leading-[1.55] text-paper/85">{c.creators.data}</p>
            <ul className="mt-4 flex flex-col">
              <li>
                <Link href="/privacy" className="inline-flex min-h-11 items-center text-lg underline underline-offset-4 hover:text-red-on-dark">{c.creators.privacy}</Link>
              </li>
              <li>
                <Link href="/data-deletion" className="inline-flex min-h-11 items-center text-lg underline underline-offset-4 hover:text-red-on-dark">{c.creators.deletion}</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="ugc-faq" className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:grid-cols-12 md:px-8">
          <h2 id="ugc-faq" data-reveal className={`${sectionTitle} md:col-span-4`}>{c.faq.title}</h2>
          <div data-reveal style={delay(1)} className="divide-y divide-line border-y border-line md:col-span-7 md:col-start-6">
            {c.faq.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="text-2xl transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-[60ch] pb-6 text-lg leading-[1.55]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
