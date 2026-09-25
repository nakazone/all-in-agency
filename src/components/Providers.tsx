"use client";

import { LanguageProvider } from "@/lib/i18n/context";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <CustomCursor />
      {children}
    </LanguageProvider>
  );
}
