"use client";

import Image from "next/image";
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

const ease = [0.23, 1, 0.32, 1] as const;

/** Palavra que gira no título (do layout anterior): troca a cada 2,4 s, sem girar com movimento reduzido. */
function RotatingWord({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => window.clearInterval(id);
  }, [reduced, words.length]);

  return (
    <span className="relative inline-block min-h-[1.05em] whitespace-nowrap text-red-on-dark">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="inline-block"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ opacity: { duration: 0.15 }, y: { duration: 0.34, ease }, filter: { duration: 0.34, ease } }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Três cards em perspectiva (do layout anterior), agora com conteúdo da All In e o Otto. */
function HeroCards() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);
  const h = t.hero;
  const spring = { type: "spring" as const, stiffness: 200, damping: 20 };

  return (
    <div
      className="relative mx-auto h-[340px] w-full max-w-[520px] sm:h-[400px] md:h-[440px] lg:mx-0 lg:h-[500px] lg:max-w-none"
      style={{ perspective: reduced ? undefined : 1400 }}
    >
      {/* Site */}
      <motion.div
        data-ui
        className="absolute top-[16%] left-[-2%] z-[1] flex h-[68%] w-[50%] flex-col overflow-hidden rounded-[24px] bg-paper text-ink shadow-[0_30px_60px_rgba(0,0,0,.35)]" /* taste-skill-ignore: card 3D flutuando (estilo da abertura anterior) */
        style={{ transformStyle: "preserve-3d" }}
        animate={reduced ? {} : { rotateY: -22, rotateX: 8, translateZ: hovered === 0 ? 48 : 0, scale: hovered === 0 ? 1.04 : 1 }}
        transition={spring}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="flex items-center justify-between bg-ink px-4 py-3 text-paper">
          <span className="font-display text-[15px] font-extrabold">{h.cardBrowser.title}</span>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-red" />
            <span className="h-2 w-2 rounded-full bg-paper/60" />
            <span className="h-2 w-2 rounded-full bg-paper/60" />
          </span>
        </div>
        {/* Só o que cabe na faixa visível: o card vermelho cobre a metade direita deste. */}
        <div className="flex flex-1 flex-col justify-end gap-3 p-4 pr-[52%]">
          <span className="block h-16 rounded-xl bg-petroleo-soft" aria-hidden="true" />
          <span className="inline-flex w-fit rounded-full bg-red px-3 py-1.5 text-[13px] font-semibold text-white">{t.work.ui.siteCta}</span>
          <span className="inline-flex w-fit rounded-full bg-paper-2 px-3 py-1 text-[13px] font-semibold">{h.cardBrowser.tag}</span>
        </div>
      </motion.div>

      {/* Card vermelho com o Otto */}
      <motion.div
        data-ui
        className="absolute top-[8%] left-[25%] z-[3] flex h-[80%] w-[46%] flex-col justify-between rounded-[24px] bg-red p-5 text-white shadow-[0_40px_80px_rgba(186,32,39,.45)] md:p-7" /* taste-skill-ignore: card 3D flutuando (estilo da abertura anterior) */
        style={{ transformStyle: "preserve-3d" }}
        animate={reduced ? {} : { rotateY: 0, rotateX: 4, translateZ: hovered === 1 ? 64 : 28, scale: hovered === 1 ? 1.05 : 1 }}
        transition={spring}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="pr-[22%]">
          <p className="font-display text-[clamp(22px,2.3vw,34px)] leading-[1.02] font-extrabold tracking-[-0.02em]">{h.cardCenter.title}</p>
          <p className="mt-3 text-[15px] leading-[1.45] text-white/90">{h.cardCenter.body}</p>
        </div>
        <a
          href="#contact"
          className="inline-flex min-h-11 w-fit items-center rounded-full bg-white px-5 text-[15px] font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          {h.cardCenter.cta}
        </a>
        {/* Otto apoiado no topo do card: decorativo, não cobre texto nem botão. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-[22%] -right-[12%] w-[48%]"
          animate={reduced ? {} : { y: hovered === 1 ? -10 : 0, rotate: hovered === 1 ? -6 : 0 }}
          transition={spring}
        >
          <div className="otto-float relative aspect-square w-full">
            <Image src="/otto/otto-02-boas-vindas.png" alt="" fill priority sizes="(min-width: 1024px) 14vw, 30vw" className="object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,.35)]" /* taste-skill-ignore: sombra do Otto flutuando, estilo 3D da abertura */ />
          </div>
        </motion.div>
      </motion.div>

      {/* Portal do cliente: o conteúdo fica na metade direita, que o card vermelho não cobre. */}
      <motion.div
        data-ui
        className="absolute top-[20%] right-[-2%] z-[2] flex h-[66%] w-[48%] flex-col gap-3 overflow-hidden rounded-[24px] bg-ink-2 py-5 pr-5 pl-24 text-paper sm:pl-28 lg:pl-32 shadow-[0_30px_60px_rgba(0,0,0,.4)]" /* taste-skill-ignore: card 3D flutuando (estilo da abertura anterior) */
        style={{ transformStyle: "preserve-3d" }}
        animate={reduced ? {} : { rotateY: 20, rotateX: 8, translateZ: hovered === 2 ? 48 : 0, scale: hovered === 2 ? 1.04 : 1 }}
        transition={spring}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* No celular o card é estreito: só a barra de progresso aparece. */}
        <p className="hidden text-[13px] text-paper/75 sm:block">{h.cardPortal.title}</p>
        <p className="hidden font-display text-[clamp(16px,1.5vw,22px)] leading-tight font-extrabold sm:block">{t.work.ui.appTitle}</p>
        <div className="flex gap-1" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`h-1.5 flex-1 rounded-full ${i < 3 ? "bg-petroleo-soft" : "bg-white/15"}`} />
          ))}
        </div>
        <p className="hidden text-[13px] text-paper/75 sm:block">{h.cardPortal.progress}</p>
        <div className="mt-auto hidden rounded-[16px] bg-red-soft p-3 text-ink sm:block">
          <p className="text-[13px] text-gray">{h.cardPortal.next}</p>
          <p className="text-[15px] leading-tight font-semibold">{h.cardPortal.nextValue}</p>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Abertura: "Nós criamos" com a palavra que gira, a frase da referência, a ação
 * principal (botão magnético) e os cards em perspectiva que acompanham o mouse.
 */
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
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 10);
    rotateX.set(-((e.clientY - rect.top) / rect.height - 0.5) * 8);
  };
  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-paper"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pt-[8svh] pb-20 md:px-8 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        <div className="relative z-10">
          <h1 className="font-display text-[clamp(40px,7.4vw,124px)] leading-[0.92] font-extrabold tracking-[-0.045em]">
            <span className="sr-only">{t.hero.srTitle}</span>
            <span aria-hidden="true" className="mask-line">
              <span style={{ "--i": 0 } as React.CSSProperties}>{t.hero.line1}</span>
            </span>
            <span aria-hidden="true" className="block">
              <RotatingWord words={t.hero.rotating} />
            </span>
          </h1>

          <div className="after-lines">
            <p className="mt-8 max-w-[40ch] text-[19px] leading-[1.5] md:text-[22px] md:leading-[1.45]">{t.hero.lead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#contact"
                className="inline-flex min-h-14 items-center rounded-full bg-red px-8 text-lg font-semibold text-white transition-colors duration-200 hover:bg-red-dark"
              >
                {t.hero.cta}
              </MagneticButton>
              <MagneticButton
                href="#process"
                className="inline-flex min-h-14 items-center rounded-full bg-white/10 px-7 text-lg font-semibold text-paper transition-colors duration-200 hover:bg-white/20"
              >
                {t.hero.secondary}
              </MagneticButton>
            </div>
            <p className="mt-6 text-[15px] text-paper/75">{t.hero.where}</p>
          </div>
        </div>

        <motion.div className="relative w-full" style={reduced ? undefined : { transform }}>
          <HeroCards />
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex" aria-hidden="true">
        <span className="text-[13px] text-paper/60">{t.hero.scroll}</span>
        <div className="relative h-12 w-0.5 overflow-hidden rounded-full bg-white/15">
          <span className="scroll-drip absolute top-0 left-0 h-4 w-0.5 rounded-full bg-red-on-dark" />
        </div>
      </div>
    </section>
  );
}
