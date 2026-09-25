"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/i18n/context";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-ink"
          initial={reduced ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.15 : 0.35, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pt-24 pb-10 md:px-10">
            <nav aria-label="Mobile">
              <ul className="space-y-2 md:space-y-3">
                {t.menu.links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={
                      reduced
                        ? { opacity: 0 }
                        : { opacity: 0, x: -24 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduced ? 0 : 0.05 * i,
                      duration: 0.45,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-baseline gap-4 py-2 font-display text-[clamp(2rem,8vw,5.5rem)] font-semibold tracking-tight text-paper transition-colors hover:text-red md:gap-6"
                    >
                      <span className="font-mono text-sm text-red md:text-base">
                        {link.num}
                      </span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-3">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-6 border-t border-line-on-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={`mailto:${t.menu.email}`}
                className="font-sans text-sm text-paper/70 transition-colors hover:text-paper"
              >
                {t.menu.email}
              </a>
              <div className="flex items-center gap-5">
                <LanguageToggle />
                <div className="flex items-center gap-3">
                  {[
                    { label: "Instagram", href: "https://instagram.com" },
                    { label: "LinkedIn", href: "https://linkedin.com" },
                    { label: "Facebook", href: "https://facebook.com" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-line-on-dark text-xs text-paper/70 transition-colors hover:border-red hover:text-red"
                    >
                      {s.label[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
