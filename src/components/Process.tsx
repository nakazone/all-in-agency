"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { useLanguage } from "@/lib/i18n/context";

// Do petróleo mais escuro ao mais claro: a ordem das etapas é dita pela cor.
// Os dois primeiros e o último tom são derivados do petróleo (#24606B) e do petróleo suave (#D3E5E8).
const tints = [
  { bg: "bg-[#163a41]", ink: "text-white" },
  { bg: "bg-petroleo", ink: "text-white" },
  { bg: "bg-[#2f6f7b]", ink: "text-white" },
  { bg: "bg-[#a9cdd4]", ink: "text-ink" },
  { bg: "bg-petroleo-soft", ink: "text-ink" },
];

/**
 * Acordeão de etapas. No computador, uma linha de painéis em que a etapa aberta ocupa
 * mais da metade; no celular, barras empilhadas. Cada etapa diz o que o cliente acompanha.
 */
export function Process() {
  const { t } = useLanguage();
  const p = t.process;
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section id="process" aria-labelledby="process-title" className="bg-paper py-28 text-ink md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="process-title" data-reveal className="font-display text-[clamp(40px,5vw,76px)] leading-[0.95] font-extrabold tracking-[-0.04em] md:col-span-5">
            {p.title}
          </h2>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="max-w-[46ch] text-lg leading-[1.55] md:col-span-5 md:col-start-7">
            {p.lead}
          </p>
        </div>

        <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="mt-16 flex flex-col overflow-hidden rounded-[24px] md:h-[540px] md:flex-row">
          {p.steps.map((step, i) => {
            const isOpen = open === i;
            const tint = tints[i];
            const panelId = `${baseId}-panel-${i}`;
            return (
              <div
                key={step.name}
                className={`relative flex flex-col ${tint.bg} ${tint.ink} transition-[flex-grow,flex-basis] duration-[450ms] ease-[cubic-bezier(0.23,1,0.32,1)] md:min-w-[84px] ${
                  isOpen ? "md:grow-[7] md:basis-0" : "md:grow md:basis-0"
                }`}
              >
                <h3 className="contents">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(i)}
                    className={`flex min-h-16 w-full items-center justify-between gap-3 px-6 text-left font-display text-2xl font-extrabold tracking-[-0.01em] md:h-full md:items-end md:justify-start md:pb-8 ${
                      isOpen ? "md:hidden" : "md:[writing-mode:vertical-rl] md:rotate-180"
                    }`}
                  >
                    {step.name}
                    <span aria-hidden="true" className="text-2xl md:hidden">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-label={step.name}
                  hidden={!isOpen}
                  className="grid flex-1 gap-6 px-6 pb-8 md:grid-cols-[1fr_0.8fr] md:p-10"
                >
                  <div className="flex flex-col justify-between gap-6">
                    <p className="hidden font-display text-[40px] leading-[1] font-extrabold tracking-[-0.03em] md:block">{step.name}</p>
                    <div className="max-w-[40ch]">
                      <p className="text-lg leading-[1.55]">{step.body}</p>
                      <p className="mt-4 text-lg leading-[1.55]">
                        <span className="font-semibold">{p.youSee}</span> {step.see}
                      </p>
                    </div>
                  </div>
                  <div className="relative mx-auto aspect-square w-[60%] md:w-full md:self-center">
                    <Image src={`/otto/otto-${step.pose}.png`} alt="" fill sizes="(min-width: 768px) 25vw, 55vw" className="object-contain" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
