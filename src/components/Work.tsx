"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/context";

const themeStyles = {
  dark: "bg-ink-2 text-paper",
  red: "bg-red text-white",
  light: "bg-[#E8EFE6] text-ink",
  blue: "bg-[#D7E4F0] text-ink",
} as const;

function CaseVisual({ theme }: { theme: keyof typeof themeStyles }) {
  if (theme === "dark") {
    return (
      <div className="relative flex h-full flex-col justify-end p-2">
        <div className="absolute inset-6 rounded-lg border border-white/10 bg-ink/60" />
        <div className="absolute top-10 right-10 left-10 h-16 rounded bg-white/5" />
        <div className="absolute right-10 bottom-16 left-10 space-y-2">
          <div className="h-1.5 w-2/3 rounded bg-red/80" />
          <div className="h-1.5 w-1/2 rounded bg-white/15" />
        </div>
      </div>
    );
  }
  if (theme === "red") {
    return (
      <div className="relative flex h-full items-center justify-center">
        <div className="h-24 w-24 rounded-full border border-white/30" />
        <div className="absolute h-12 w-12 rounded-full bg-white/20" />
      </div>
    );
  }
  if (theme === "light") {
    return (
      <div className="relative flex h-full items-end justify-center pb-6">
        <div className="h-28 w-20 rounded-t-full bg-[#3D7A4A]/70" />
        <div className="absolute bottom-4 h-3 w-28 rounded-full bg-[#2F5C38]/40" />
      </div>
    );
  }
  return (
    <div className="relative flex h-full items-end overflow-hidden">
      <div className="absolute inset-x-8 top-10 h-40 origin-bottom -skew-x-6 bg-[#6B8FB5]/50" />
      <div className="absolute inset-x-16 top-16 h-36 origin-bottom skew-x-3 bg-[#4A6F94]/60" />
    </div>
  );
}

export function Work() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-case-card]");
    const amount = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="work" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-red">
              {t.work.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight">
              {t.work.title}
            </h2>
            <a
              href="#contact"
              className="mt-5 inline-flex text-sm text-gray transition-colors hover:text-red"
            >
              {t.work.viewAll}
            </a>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label={t.work.prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-red hover:text-red"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label={t.work.next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-red hover:text-red"
            >
              →
            </button>
          </div>
        </div>

        {/* placeholder — substituir por cases reais */}
        <div
          ref={trackRef}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 md:-mx-0 md:px-0"
        >
          {t.work.cases.map((item) => (
            <article
              key={item.name}
              data-case-card
              className={`flex w-[82vw] shrink-0 snap-center flex-col overflow-hidden rounded-2xl sm:w-[340px] md:w-[360px] ${themeStyles[item.theme]}`}
            >
              <div className="relative h-56 md:h-64">
                <CaseVisual theme={item.theme} />
              </div>
              <div className="mt-auto flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="font-display text-xl font-semibold">
                    {item.name}
                  </p>
                  <p className="mt-1 font-mono text-[10px] tracking-wider uppercase opacity-70">
                    {item.tag}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="text-sm whitespace-nowrap opacity-80 transition-opacity hover:opacity-100"
                >
                  {t.work.viewProject}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
