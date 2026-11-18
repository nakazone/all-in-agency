"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";

/**
 * Sobre: painel carvão com o conceito do ambigrama. "Girar o logo" gira a marca 180 graus
 * (ela continua legível) e troca o Otto pela versão preta, que é outro desenho e não a
 * imagem vermelha girada (regra da referência da marca).
 */
export function About() {
  const { t } = useLanguage();
  const a = t.about;
  const [turned, setTurned] = useState(false);

  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper px-2.5 pb-28 md:px-5 md:pb-40">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] bg-ink text-paper">
        <div className="grid gap-12 px-6 pt-14 md:grid-cols-12 md:gap-6 md:px-14 md:pt-16">
          <div className="md:col-span-6">
            <h2 id="about-title" data-reveal className="font-display text-[clamp(40px,5vw,76px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
              <span className="block">{a.line1}</span>
              <span className="block">{a.line2}</span>
            </h2>

            {/* Forma em arco, cortada pela base do painel. */}
            <div
              data-reveal
              style={{ "--i": 1 } as React.CSSProperties}
              className="relative mt-12 hidden aspect-[4/5] w-[80%] overflow-hidden rounded-t-full bg-petroleo md:block"
            >
              <Image
                src="/otto/otto-01-assinatura-frontal.png"
                alt=""
                fill
                sizes="30vw"
                className={`object-contain object-bottom p-6 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${turned ? "scale-90 opacity-0" : "opacity-100"}`}
              />
              <Image
                src="/otto/otto-21-preto-assinatura.png"
                alt=""
                fill
                sizes="30vw"
                className={`object-contain object-bottom p-6 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${turned ? "opacity-100" : "scale-90 opacity-0"}`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-12 pb-14 md:col-span-5 md:col-start-8 md:pb-16">
            <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="flex items-center justify-center rounded-[24px] bg-white/5 p-10">
              <Image
                src="/brand/logo-negativo.svg"
                alt="All In"
                width={354}
                height={198}
                unoptimized
                className={`h-auto w-[78%] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${turned ? "rotate-180" : ""}`}
              />
            </div>
            {a.blocks.map((b, i) => (
              <div key={b.title} data-reveal style={{ "--i": i + 2 } as React.CSSProperties}>
                <h3 className="font-display text-[24px] leading-[1.1] font-extrabold">{b.title}</h3>
                <p className="mt-3 text-lg leading-[1.55] text-paper/90">{b.body}</p>
              </div>
            ))}
            <div>
              <button
                type="button"
                aria-pressed={turned}
                onClick={() => setTurned((v) => !v)}
                className="inline-flex min-h-12 items-center rounded-full bg-red px-6 text-base font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-red-dark active:scale-[0.97]"
              >
                {turned ? a.turned : a.turn}
              </button>
              <p className="mt-3 min-h-6 text-[15px] text-paper/75" aria-live="polite">
                {turned ? a.turnedNote : ""}
              </p>
            </div>
            {/* Celular: o Otto vem por último, cortado pela base do painel. */}
            <div className="relative -mb-14 aspect-[4/5] w-[86%] self-center overflow-hidden rounded-t-full bg-petroleo md:hidden">
              <Image
                src={turned ? "/otto/otto-21-preto-assinatura.png" : "/otto/otto-01-assinatura-frontal.png"}
                alt=""
                fill
                sizes="86vw"
                className="object-contain object-bottom p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
