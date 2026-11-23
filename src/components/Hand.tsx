"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { useHand } from "@/lib/hand";

// Cada carta é um campo de cor da paleta, com texto em contraste AA ou melhor.
const tones = [
  { card: "bg-red text-white", button: "bg-white text-ink", picked: "bg-ink text-white" },
  { card: "bg-petroleo text-white", button: "bg-white text-ink", picked: "bg-ink text-white" },
  { card: "bg-ink text-paper", button: "bg-paper text-ink", picked: "bg-red text-white" },
  { card: "bg-white text-ink", button: "bg-ink text-white", picked: "bg-red text-white" },
];
// Leque: rotação e altura de cada carta quando está na mesa.
const fan = ["lg:-rotate-[4deg] lg:translate-y-6", "lg:-rotate-[1.5deg]", "lg:rotate-[1.5deg]", "lg:rotate-[4deg] lg:translate-y-6"];

/**
 * "Monte sua mão": os serviços são cartas. Escolher uma carta a levanta e a põe na mão;
 * a mão segue com a mensagem do formulário de contato. Sem script, as cartas e o
 * texto continuam lá, e o contato funciona do mesmo jeito.
 */
export function Hand() {
  const { t } = useLanguage();
  const { hand, toggle, has } = useHand();
  const h = t.hand;
  const names = h.cards.filter((c) => hand.includes(c.id)).map((c) => c.name);

  return (
    <section id="services" aria-labelledby="hand-title" className="bg-paper py-28 text-ink md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="hand-title" data-reveal className="font-display text-[clamp(40px,5vw,76px)] leading-[0.95] font-extrabold tracking-[-0.04em] md:col-span-6">
            {h.title}
          </h2>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="max-w-[44ch] text-lg leading-[1.55] md:col-span-5 md:col-start-8">
            {h.lead}
          </p>
        </div>

        {/* Celular: cartas empilhadas. Computador: leque de quatro cartas. */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-5 lg:pb-10">
          {h.cards.map((card, i) => {
            const picked = has(card.id);
            const tone = tones[i];
            return (
              <li
                key={card.id}
                data-reveal
                style={{ "--i": i + 2 } as React.CSSProperties}
                className="relative"
              >
                <article
                  className={`flex h-full min-h-[460px] flex-col rounded-[24px] p-7 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${tone.card} ${fan[i]} ${
                    picked ? "lg:-translate-y-8 lg:rotate-0" : "hover:lg:-translate-y-3"
                  }`}
                >
                  <h3 className="font-display text-[40px] leading-[0.98] font-extrabold tracking-[-0.02em]">{card.name}</h3>
                  <div className="relative my-4 aspect-square w-[64%] self-center">
                    <Image
                      src={`/otto/otto-${card.pose}.png`}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 16vw, 50vw"
                      className={`object-contain transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${picked ? "scale-110 -rotate-6" : ""}`}
                    />
                  </div>
                  <p className="text-base leading-[1.5]">{card.body}</p>
                  <button
                    type="button"
                    aria-pressed={picked}
                    onClick={() => toggle(card.id)}
                    className={`mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-[background-color,color,transform] duration-200 active:scale-[0.97] ${
                      picked ? tone.picked : tone.button
                    }`}
                  >
                    {picked && (
                      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8.5l3.2 3L13 4.5" />
                      </svg>
                    )}
                    {picked ? h.added : h.add}
                    <span className="sr-only">: {card.name}</span>
                  </button>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-col gap-4 rounded-[24px] bg-white p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <p className="text-lg" aria-live="polite">
            <span className="font-semibold">{h.summaryLabel}: </span>
            {names.length ? names.join(" + ") : <span className="text-gray">{h.summaryEmpty}</span>}
          </p>
          <a
            href="#contact"
            className={`inline-flex min-h-12 w-fit items-center rounded-full px-6 text-base font-semibold transition-[background-color,transform] duration-200 active:scale-[0.97] ${
              names.length ? "bg-red text-white hover:bg-red-dark" : "bg-paper text-ink hover:bg-petroleo-soft"
            }`}
          >
            {h.talk}
          </a>
        </div>
      </div>
    </section>
  );
}
