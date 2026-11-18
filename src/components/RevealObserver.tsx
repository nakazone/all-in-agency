"use client";

import { useEffect } from "react";

/**
 * Liga as entradas das seções: cada elemento com data-reveal ganha "is-in" ao entrar
 * na tela, uma vez. O estado escondido vive só no CSS (com JavaScript e sem movimento
 * reduzido), então sem script o conteúdo já está visível.
 */
export function RevealObserver() {
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    const scan = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          io.observe(el);
        }
      });
    };
    scan();
    // Conteúdo que aparece depois (troca de idioma, etapa aberta) também entra.
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
