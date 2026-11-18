"use client";

import { LanguageProvider } from "@/lib/i18n/context";
import { HandProvider } from "@/lib/hand";
import { RevealObserver } from "@/components/RevealObserver";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <HandProvider>
        <RevealObserver />
        {children}
      </HandProvider>
    </LanguageProvider>
  );
}
