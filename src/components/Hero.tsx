"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { useLanguage } from "@/lib/i18n/context";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

function RotatingWord({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [reduced, words.length]);

  return (
    <span className="relative inline-block min-h-[1.1em] text-red">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block"
          initial={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, y: 18, filter: "blur(8px)" }
          }
          animate={
            reduced
              ? { opacity: 1 }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          exit={
            reduced
              ? { opacity: 0 }
              : { opacity: 0, y: -10, filter: "blur(6px)" }
          }
          transition={{
            opacity: { duration: 0.15, ease: "easeIn" },
            y: { duration: 0.32, ease: [0.23, 1, 0.32, 1] },
            filter: { duration: 0.32, ease: [0.23, 1, 0.32, 1] },
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function HeroCards() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="relative mx-auto h-[300px] w-full max-w-[520px] sm:h-[380px] md:h-[440px] lg:mx-0 lg:h-[480px] lg:max-w-none"
      style={{ perspective: reduced ? undefined : 1400 }}
    >
      {/* Card 1 — browser (left) */}
      <motion.div
        className="absolute top-[10%] left-[-2%] z-[1] h-[72%] w-[52%] overflow-hidden rounded-2xl border border-black/5 bg-paper shadow-[0_30px_60px_rgba(0,0,0,.35)]"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          reduced
            ? {}
            : {
                rotateY: -22,
                rotateX: 8,
                translateZ: hovered === 0 ? 48 : 0,
                scale: hovered === 0 ? 1.04 : 1,
              }
        }
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#E5A0A0]" />
          <span className="h-2 w-2 rounded-full bg-[#E5D0A0]" />
          <span className="h-2 w-2 rounded-full bg-[#A0D0A0]" />
        </div>
        <div className="space-y-3 p-4">
          <div className="flex h-24 items-center justify-center rounded-lg bg-paper-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray"
              aria-hidden
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
              <path
                d="M3 16l5-4 4 3 3-2 6 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="h-2 w-3/4 rounded bg-ink/10" />
          <div className="h-2 w-1/2 rounded bg-ink/10" />
          <div className="mt-4 inline-flex rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[10px] tracking-wider text-ink uppercase">
            {t.hero.cardBrowser.tag}
          </div>
        </div>
      </motion.div>

      {/* Card 2 — red center */}
      <motion.div
        className="absolute top-[2%] left-[22%] z-[3] flex h-[82%] w-[54%] flex-col justify-between overflow-hidden rounded-2xl bg-red p-5 text-white shadow-[0_40px_80px_rgba(196,32,43,.45)] md:p-6"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          reduced
            ? {}
            : {
                rotateY: 0,
                rotateX: 4,
                translateZ: hovered === 1 ? 64 : 28,
                scale: hovered === 1 ? 1.05 : 1,
              }
        }
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <div>
          <p className="font-mono text-xs tracking-widest text-white/70">
            {t.hero.cardCenter.number}
          </p>
          <h3 className="mt-4 font-display text-[clamp(1.35rem,2.2vw,1.85rem)] leading-tight font-semibold">
            {t.hero.cardCenter.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {t.hero.cardCenter.body}
          </p>
        </div>
        <a
          href="#contact"
          className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
        >
          {t.hero.cardCenter.cta}
        </a>
      </motion.div>

      {/* Card 3 — dashboard (right) */}
      <motion.div
        className="absolute top-[14%] right-[-2%] z-[2] flex h-[72%] w-[52%] overflow-hidden rounded-2xl border border-white/10 bg-ink-2 shadow-[0_30px_60px_rgba(0,0,0,.4)]"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          reduced
            ? {}
            : {
                rotateY: 20,
                rotateX: 8,
                translateZ: hovered === 2 ? 48 : 0,
                scale: hovered === 2 ? 1.04 : 1,
              }
        }
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        <aside className="flex w-9 flex-col items-center gap-3 border-r border-white/10 py-4 md:w-11">
          {["O", "A", "U", "P", "R", "S"].map((icon) => (
            <span
              key={icon}
              className="flex h-5 w-5 items-center justify-center rounded text-[9px] text-white/40"
            >
              {icon}
            </span>
          ))}
        </aside>
        <div className="flex-1 space-y-2.5 overflow-hidden p-3 md:p-4">
          <p className="font-mono text-[10px] tracking-wider text-white/50 uppercase">
            {t.hero.cardDash.title}
          </p>
          <p className="font-display text-xl font-semibold text-white md:text-2xl">
            {t.hero.cardDash.revenue}
          </p>
          <p className="text-[10px] text-white/45">
            {t.hero.cardDash.revenueLabel}
          </p>
          <svg viewBox="0 0 160 48" className="h-9 w-full" aria-hidden>
            <path
              d="M0 36 C20 34, 30 20, 50 22 S80 40, 100 18 S130 8, 160 14"
              fill="none"
              stroke="#C4202B"
              strokeWidth="2.5"
            />
          </svg>
          <div className="border-t border-white/10 pt-2">
            <p className="font-display text-sm text-white">
              {t.hero.cardDash.users}
            </p>
            <p className="text-[9px] text-white/45">
              {t.hero.cardDash.usersLabel}
            </p>
          </div>
          <div>
            <p className="mb-1.5 text-[9px] tracking-wider text-white/40 uppercase">
              {t.hero.cardDash.activity}
            </p>
            <div className="space-y-1.5">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-1.5 w-full rounded bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const transform = useMotionTemplate`perspective(1400px) rotateX(${springX}deg) rotateY(${springY}deg)`;

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 8);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pt-[96px] pb-16 text-paper md:pb-24 lg:min-h-screen lg:pb-10"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10">
        <div className="relative z-10 max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line-on-dark px-3 py-1.5">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] tracking-wide text-paper/75">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,9vw,7.25rem)] leading-[0.95] font-bold tracking-[-0.04em]">
            <span className="block">{t.hero.line1}</span>
            <RotatingWord words={t.hero.rotating} />
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70 md:text-base">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#contact"
              className="inline-flex items-center rounded-full bg-red px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-red-dark"
            >
              {t.hero.ctaPrimary}
            </MagneticButton>
            <MagneticButton
              href="#work"
              className="inline-flex items-center rounded-full border border-line-on-dark px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper/50"
            >
              {t.hero.ctaSecondary}
            </MagneticButton>
          </div>

          <div className="mt-10 flex flex-wrap items-stretch gap-0 border-t border-line-on-dark pt-6">
            {t.hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex min-w-[120px] flex-col pr-6 ${
                  i > 0 ? "border-l border-line-on-dark pl-6" : ""
                }`}
              >
                <span className="font-display text-2xl font-semibold md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-[10px] tracking-wider text-paper/50 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative w-full"
          style={reduced ? undefined : { transform }}
        >
          <HeroCards />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-mono text-[10px] tracking-[0.2em] text-paper/40 uppercase">
          {t.hero.scroll}
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-line-on-dark">
          <span className="scroll-drip absolute top-0 left-0 h-4 w-px bg-red" />
        </div>
      </div>
    </section>
  );
}
