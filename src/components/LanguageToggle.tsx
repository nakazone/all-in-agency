"use client";

import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/dictionaries";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  const options: Locale[] = ["pt", "en"];

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line-on-dark bg-ink/40 p-1 text-[11px] font-medium tracking-wider uppercase ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => {
        const active = locale === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLocale(opt)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 transition-colors duration-300 ${
              active
                ? "bg-red text-white"
                : "text-paper/70 hover:text-paper"
            }`}
          >
            {opt.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
