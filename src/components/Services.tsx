"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";

export function Services() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-8 lg:px-10">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-red">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight">
            {t.services.title}
          </h2>
        </div>

        <ul className="border-t border-line">
          {t.services.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.num} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-start gap-4 py-5 text-left md:items-center md:gap-6 md:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-sm text-red md:text-base">
                    {item.num}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-[clamp(1.35rem,2.5vw,2rem)] font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                          isOpen
                            ? "rotate-[135deg] border-red bg-red text-white"
                            : "border-line text-ink"
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          key="desc"
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.23, 1, 0.32, 1],
                          }}
                          className="mt-3 max-w-xl text-sm leading-relaxed text-gray md:text-[15px]"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
