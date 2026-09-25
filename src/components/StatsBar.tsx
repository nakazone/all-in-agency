"use client";

import { useLanguage } from "@/lib/i18n/context";

export function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink py-14 md:py-16" aria-label="Statistics">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 md:grid-cols-3 lg:grid-cols-5 md:px-8 lg:px-10">
        {t.statsBar.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-semibold tracking-tight text-paper">
              {stat.value}
            </p>
            <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-paper/50 uppercase md:text-[11px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
