"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";

export function Testimonials() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const items = t.testimonials.items;
  const current = items[index];

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section
      id="about"
      className="bg-paper py-20 text-ink md:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-[900px] px-5 text-center md:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-red">
          {t.testimonials.eyebrow}
        </p>
        <h2
          id="testimonials-title"
          className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-tight"
        >
          {t.testimonials.title}
        </h2>

        <div className="relative mt-12 flex items-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={prev}
            aria-label={t.testimonials.prev}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors hover:border-red hover:text-red"
          >
            ←
          </button>

          <div className="min-h-[180px] flex-1">
            <p className="mb-4 font-display text-5xl leading-none text-red md:text-6xl">
              “
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              >
                <blockquote className="font-display text-[clamp(1.25rem,3vw,2rem)] leading-snug font-medium tracking-tight">
                  {current.quote}
                </blockquote>
                <cite className="mt-6 block text-sm text-gray not-italic">
                  — {current.author}
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label={t.testimonials.next}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors hover:border-red hover:text-red"
          >
            →
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-red" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
