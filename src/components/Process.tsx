"use client";

import { useLanguage } from "@/lib/i18n/context";

function StepIcon({ icon }: { icon: string }) {
  const common = "h-5 w-5";
  switch (icon) {
    case "eye":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.6" />
          <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.6" />
          <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.6" />
          <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "pen":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M4 20l4.5-1.2L19 8.3a2 2 0 0 0 0-2.8L18.5 5a2 2 0 0 0-2.8 0L5.2 15.5 4 20Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M9 7L4 12l5 5M15 7l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M5 15l3-3 3 2 4-5 4 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 5l2 1 3-3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-10">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-xs tracking-[0.18em] text-red">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight">
            {t.process.title}
          </h2>
        </div>

        <ol className="relative grid gap-10 md:grid-cols-5 md:gap-4">
          <div
            aria-hidden
            className="pointer-events-none absolute top-6 right-0 left-0 hidden h-px bg-line md:block"
          />
          {t.process.steps.map((step) => (
            <li key={step.title} className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red text-white">
                <StepIcon icon={step.icon} />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
