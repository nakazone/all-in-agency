"use client";

import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type UI = Dictionary["work"]["ui"];

/* Fragmentos de interface montados em HTML com textos reais (data-ui: bordas e menus próprios do produto). */

function SiteFragment({ ui }: { ui: UI }) {
  return (
    <div data-ui className="flex h-full flex-col overflow-hidden rounded-[24px] bg-paper text-ink">
      <div className="flex items-center justify-between bg-ink px-6 py-4 text-paper">
        <span className="font-display text-xl font-extrabold">Casa Piso</span>
        <span className="hidden gap-6 text-sm sm:flex">
          {ui.siteNav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
      </div>
      <div className="grid flex-1 gap-6 p-8 sm:grid-cols-[1.2fr_1fr] sm:p-10">
        <div className="flex flex-col justify-end gap-5">
          <p className="font-display text-[clamp(26px,2.4vw,36px)] leading-[1] font-extrabold tracking-[-0.03em]">{ui.siteTitle}</p>
          <p className="text-base text-gray">{ui.siteBody}</p>
          <span className="inline-flex w-fit rounded-full bg-red px-5 py-3 text-sm font-semibold text-white">{ui.siteCta}</span>
        </div>
        <ul className="flex flex-col justify-start gap-2 self-end rounded-[16px] bg-petroleo-soft p-5 text-base font-semibold">
          {ui.siteServices.map((s) => (
            <li key={s} className="rounded-xl bg-white px-4 py-3">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LandingFragment({ ui }: { ui: UI }) {
  return (
    <div data-ui className="flex h-full flex-col justify-between overflow-hidden rounded-[24px] bg-red p-8 text-white sm:p-10">
      <p className="font-display text-[clamp(26px,2.4vw,36px)] leading-[1] font-extrabold tracking-[-0.03em]">{ui.lpTitle}</p>
      <div className="mt-8 grid gap-3 rounded-[16px] bg-white p-5 text-ink sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <label className="flex flex-col gap-1 text-sm font-medium">
          {ui.lpName}
          <span className="h-11 rounded-lg border border-line-control" />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          {ui.lpPhone}
          <span className="h-11 rounded-lg border border-line-control" />
        </label>
        <span className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white">{ui.lpCta}</span>
      </div>
    </div>
  );
}

function PortalFragment({ ui }: { ui: UI }) {
  const rows = [
    { label: ui.appNow, value: ui.appNowValue, tone: "bg-paper" },
    { label: ui.appYou, value: ui.appYouValue, tone: "bg-red-soft" },
    { label: ui.appNext, value: ui.appNextValue, tone: "bg-petroleo-soft" },
  ];
  return (
    <div data-ui className="flex h-full overflow-hidden rounded-[24px] bg-white text-ink">
      <div className="hidden w-[30%] flex-col gap-3 bg-ink p-6 text-sm text-paper/85 sm:flex">
        <span className="mb-4 font-display text-lg font-extrabold text-paper">All In</span>
        {ui.appNav.map((x, i) => (
          <span key={x} className={`rounded-lg px-3 py-2 ${i === 0 ? "bg-white/10 text-paper" : ""}`}>
            {x}
          </span>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-display text-2xl font-extrabold tracking-[-0.02em]">{ui.appTitle}</p>
          <span className="rounded-full bg-petroleo px-3 py-1 text-sm font-semibold text-white">{ui.appStatus}</span>
        </div>
        <div>
          <div className="flex gap-1.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`h-2 flex-1 rounded-full ${i < 3 ? "bg-petroleo" : "bg-paper"}`} />
            ))}
          </div>
          <p className="mt-2 text-sm text-gray">{ui.appProgress}</p>
        </div>
        {rows.map((r) => (
          <div key={r.label} className={`rounded-[16px] p-4 ${r.tone}`}>
            <p className="text-sm text-gray">{r.label}</p>
            <p className="text-lg font-semibold">{r.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const fragments = [SiteFragment, LandingFragment, PortalFragment];

/**
 * Como fica na prática: vitrine interativa. À esquerda, os três tipos de entrega; à direita,
 * a tela do tipo ativo, que troca ao passar o mouse, focar ou tocar, e inclina levemente
 * com o ponteiro. No celular, cada tipo aparece com a sua tela logo abaixo.
 */
export function Work() {
  const { t } = useLanguage();
  const w = t.work;
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const sx = useSpring(tiltX, { stiffness: 160, damping: 18 });
  const sy = useSpring(tiltY, { stiffness: 160, damping: 18 });
  const transform = useMotionTemplate`perspective(1600px) rotateX(${sx}deg) rotateY(${sy}deg)`;
  const Active = fragments[active];

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    tiltY.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    tiltX.set(-((e.clientY - r.top) / r.height - 0.5) * 6);
  };
  const onLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section id="work" aria-labelledby="work-title" className="bg-white py-28 text-ink md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <h2 id="work-title" data-reveal className="font-display text-[clamp(40px,5vw,76px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
            {w.title}
          </h2>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-6 max-w-[40ch] text-lg leading-[1.55]">
            {w.lead}
          </p>

          <ul className="mt-10 flex flex-col gap-3">
            {w.items.map((item, i) => {
              const on = active === i;
              const Fragment = fragments[i];
              return (
                <li key={item.id} data-reveal style={{ "--i": i + 2 } as React.CSSProperties}>
                  <button
                    type="button"
                    aria-pressed={on}
                    aria-controls="work-preview"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group w-full rounded-[24px] p-6 text-left transition-colors duration-300 ${on ? "bg-paper" : "hover:bg-paper/60"}`}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className={`font-display text-[40px] leading-[1] font-extrabold tracking-[-0.03em] transition-colors duration-300 ${on ? "text-ink" : "text-ink lg:text-gray"}`}>
                        {item.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl transition-[background-color,color,transform] duration-300 ${
                          on ? "translate-x-0 bg-red text-white" : "-translate-x-1 bg-paper text-ink group-hover:translate-x-0"
                        }`}
                      >
                        →
                      </span>
                    </span>
                    <span className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr] lg:grid-rows-[0fr]"} max-lg:grid-rows-[1fr]`}>
                      <span className="overflow-hidden">
                        <span className="block pt-4 text-lg leading-[1.55] text-ink">{item.body}</span>
                        <span className="block pt-2 text-[15px] text-gray">{w.demoNote}</span>
                      </span>
                    </span>
                  </button>
                  {/* Celular: a tela de cada tipo logo abaixo do nome. */}
                  <div className="mt-3 h-[440px] lg:hidden">
                    <Fragment ui={w.ui} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Computador: uma prévia grande que troca com o tipo ativo. */}
        <div className="hidden lg:col-span-7 lg:block">
          <div className="sticky top-28" onMouseMove={onMove} onMouseLeave={onLeave}>
            <motion.div
              id="work-preview"
              aria-live="polite"
              className="relative h-[600px] rounded-[24px] bg-paper p-6"
              style={reduced ? undefined : { transform }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  className="h-full"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Active ui={w.ui} />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
