"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

/**
 * Cursor da All In: um ponto vermelho na ponta exata do ponteiro e um anel que segue com
 * mola e cresce sobre links e botões. Só com mouse (ponteiro fino) e sem pedido de
 * movimento reduzido; nos demais casos fica a seta do sistema. Em campos de texto o
 * anel some e volta o cursor de digitação.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState<"idle" | "link" | "text">("idle");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches || reduced) return;
    let on = false;

    // Liga no primeiro movimento do mouse: só então o cursor do sistema some.
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (!on) {
        on = true;
        setActive(true);
        document.documentElement.classList.add("has-custom-cursor");
      }
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: PointerEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest("input, textarea, select, [contenteditable='true']")) setMode("text");
      else if (el?.closest("a, button, [role='button'], label, summary")) setMode("link");
      else setMode("idle");
    };
    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced, x, y]);

  if (!active || reduced) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] -mt-5 -ml-5 h-10 w-10 rounded-full border-2 border-red mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: mode === "link" ? 1.6 : 1, opacity: mode === "text" ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] -mt-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-red"
        style={{ x, y }}
        animate={{ opacity: mode === "text" ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
