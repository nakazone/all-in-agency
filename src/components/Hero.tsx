"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";

/**
 * Abertura em carvão: o que a All In faz em duas linhas, o Otto de boas-vindas
 * recortado e inclinado no espaço livre da primeira linha (nunca sobre o título),
 * e embaixo a frase de apoio com a ação principal.
 */
export function Hero() {
  const { t } = useLanguage();
  const [waving, setWaving] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] grid-rows-[1fr_auto] px-5 pt-[9svh] pb-8 md:px-8 md:pb-10">
        <div className="relative">
          <h1 className="font-display text-[clamp(44px,8.4vw,150px)] leading-[0.88] font-extrabold tracking-[-0.05em] md:max-w-[68%]">
            <span className="mask-line">
              <span style={{ "--i": 0 } as React.CSSProperties}>{t.hero.line1}</span>
            </span>
            <span className="mask-line">
              <span style={{ "--i": 1 } as React.CSSProperties}>{t.hero.line2}</span>
            </span>
          </h1>

          {/* Otto: decorativo. No computador fica à direita da primeira linha; no celular, abaixo do título. */}
          <div
            className="pointer-events-none mt-6 flex justify-end md:pointer-events-auto md:absolute md:top-[-6%] md:right-0 md:mt-0 md:w-[34%]"
            onMouseEnter={() => setWaving(true)}
            onMouseLeave={() => setWaving(false)}
          >
            <div className="otto-float relative aspect-square w-[58%] md:w-full">
              <Image
                src="/otto/otto-02-boas-vindas.png"
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 30vw, 58vw"
                className={`object-contain transition-opacity duration-300 ${waving ? "opacity-0" : "opacity-100"}`}
              />
              <Image
                src="/otto/otto-03-aceno.png"
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 58vw"
                className={`object-contain transition-opacity duration-300 ${waving ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>
        </div>

        <div className="after-lines mt-10 flex flex-col gap-8 md:mt-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[44ch]">
            <p className="text-[19px] leading-[1.5] text-paper md:text-2xl md:leading-[1.4]">{t.hero.lead}</p>
            <p className="mt-4 text-[15px] text-paper/75">{t.hero.where}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center rounded-full bg-red px-8 text-lg font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-red-dark active:scale-[0.97]"
            >
              {t.hero.cta}
            </a>
            <a
              href="#process"
              className="inline-flex min-h-14 items-center rounded-full px-6 text-lg font-semibold text-paper underline-offset-4 transition-colors hover:bg-white/10"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
