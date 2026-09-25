"use client";

import { MagneticButton } from "./MagneticButton";
import { useLanguage } from "@/lib/i18n/context";

export function CTABand() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-red py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/10"
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight">
            {t.cta.title}
          </h2>
          <p className="mt-3 text-white/80">{t.cta.subtitle}</p>
        </div>
        <MagneticButton
          href="#contact"
          className="inline-flex shrink-0 items-center rounded-full bg-white px-7 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
        >
          {t.cta.button}
        </MagneticButton>
      </div>
    </section>
  );
}
