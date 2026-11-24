"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  ctaHref: string;
};

/**
 * Menu do celular: cinco destinos em tipo grande, a ação principal e o contato direto.
 * O contato não entra na lista porque a ação principal já leva até ele.
 */
export function MenuOverlay({ open, onClose, ctaHref }: MenuOverlayProps) {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const links = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.ugc, href: "/ugc" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.about, href: "/#about" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-ink text-paper lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.12 : 0.25, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex min-h-full flex-col px-5 pt-6 pb-8 md:px-8">
            <nav aria-label={t.nav.primary}>
              <ul>
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduced ? 0 : 0.04 * i, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block py-2 font-display text-[clamp(2.5rem,11vw,4.5rem)] leading-tight font-bold tracking-[-0.03em] transition-colors hover:text-red-on-dark"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex items-end justify-between gap-4 pt-10">
              <div className="flex flex-col gap-4">
                <a
                  href={ctaHref}
                  onClick={onClose}
                  className="inline-flex min-h-12 w-fit items-center rounded-full bg-red px-6 text-base font-semibold text-white"
                >
                  {t.nav.cta}
                </a>
                <a href={`mailto:${t.contact.email}`} className="inline-flex min-h-11 items-center text-base text-paper/85 underline-offset-4 hover:underline">
                  {t.contact.email}
                </a>
              </div>
              <Image src="/otto/sm/otto-03-aceno.png" alt="" width={320} height={320} className="h-auto w-28" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
