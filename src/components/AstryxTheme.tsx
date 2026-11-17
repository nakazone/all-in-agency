"use client";

import { Theme } from "@astryxdesign/core/theme";
import { themes, defaultThemeSlug } from "@/astryx-themes";

/**
 * Aplica o tema Astryx só ao trecho que usa componentes Astryx.
 *
 * Não envolva o site inteiro: dentro do tema, o reset do Astryx redefine cor e
 * fonte de h1–h6, inputs e botões, e isso sobrescreve o visual atual das seções.
 * `mode` segue o fundo da seção: "dark" sobre --ink, "light" sobre --paper.
 */
export function AstryxTheme({
  mode = "dark",
  children,
}: {
  mode?: "light" | "dark";
  children: React.ReactNode;
}) {
  return (
    <Theme theme={themes[defaultThemeSlug]} mode={mode}>
      {children}
    </Theme>
  );
}
