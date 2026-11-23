"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

/** As cartas escolhidas em "Monte sua mão"; o formulário de contato as leva junto. */
type HandValue = { hand: string[]; toggle: (id: string) => void; has: (id: string) => boolean };

const HandContext = createContext<HandValue | null>(null);

export function HandProvider({ children }: { children: ReactNode }) {
  const [hand, setHand] = useState<string[]>([]);
  const toggle = useCallback((id: string) => {
    setHand((h) => (h.includes(id) ? h.filter((x) => x !== id) : [...h, id]));
  }, []);
  const value = useMemo(() => ({ hand, toggle, has: (id: string) => hand.includes(id) }), [hand, toggle]);
  return <HandContext.Provider value={value}>{children}</HandContext.Provider>;
}

export function useHand() {
  const ctx = useContext(HandContext);
  if (!ctx) throw new Error("useHand must be used within HandProvider");
  return ctx;
}
