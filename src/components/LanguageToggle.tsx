"use client";

import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/dictionaries";

/** PT e EN como dois botões; a escolha fica guardada para a próxima visita. */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const options: { id: Locale; label: string }[] = [
    { id: "pt", label: "PT" },
    { id: "en", label: "EN" },
  ];

  return (
    <div className={`inline-flex items-center rounded-full bg-white/10 p-1 ${className}`} role="group" aria-label={t.nav.language}>
      {options.map((opt) => {
        const active = locale === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            lang={opt.id === "pt" ? "pt-BR" : "en"}
            onClick={() => setLocale(opt.id)}
            aria-pressed={active}
            className={`min-h-9 min-w-11 rounded-full px-3 text-[15px] font-semibold transition-colors duration-200 ${
              active ? "bg-paper text-ink" : "text-paper/80 hover:text-paper"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
