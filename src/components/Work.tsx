"use client";

import { useLanguage } from "@/lib/i18n/context";
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
          <p className="font-display text-[clamp(28px,3.4vw,52px)] leading-[0.95] font-extrabold tracking-[-0.03em]">{ui.siteTitle}</p>
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
      <p className="font-display text-[clamp(30px,3.8vw,58px)] leading-[0.95] font-extrabold tracking-[-0.03em]">{ui.lpTitle}</p>
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

const blocks = [
  { Fragment: SiteFragment, height: "lg:h-[480px]" },
  { Fragment: LandingFragment, height: "lg:h-[440px]" },
  { Fragment: PortalFragment, height: "lg:h-[520px]" },
];

/**
 * Como fica na prática: um bloco por tipo de entrega. O fragmento grande sangra pela
 * borda esquerda; à direita, o título, a descrição e o aviso de demonstração.
 */
export function Work() {
  const { t } = useLanguage();
  const w = t.work;

  return (
    <section id="work" aria-labelledby="work-title" className="overflow-hidden bg-white py-28 text-ink md:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <h2 id="work-title" data-reveal className="font-display text-[clamp(40px,5vw,76px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
          {w.title}
        </h2>

        <div className="mt-16 flex flex-col gap-28 md:mt-24 md:gap-36">
          {w.items.map((item, i) => {
            const b = blocks[i];
            return (
              <article key={item.id} className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
                <div data-reveal className={`min-h-[420px] lg:col-span-7 lg:-ml-8 ${b.height}`}>
                  <b.Fragment ui={w.ui} />
                </div>
                <div className="lg:col-span-4 lg:col-start-9">
                  <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
                    <h3 className="font-display text-[40px] leading-[1.02] font-extrabold tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-4 text-lg leading-[1.55]">{item.body}</p>
                    <p className="mt-4 text-[15px] text-gray">{w.demoNote}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
