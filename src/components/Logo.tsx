import Image from "next/image";

type LogoProps = {
  /**
   * light: para fundo escuro (logo negativo, vermelho #F0353D da versão existente).
   * dark: para fundo claro (logo principal, carvão e vermelho).
   * mono-light: branco monocromático, para marcas d'água sobre fundo escuro.
   */
  variant?: "light" | "dark" | "mono-light";
  className?: string;
  priority?: boolean;
};

// Vetores originais do ambigrama (referência da marca). Não recolorir nem redesenhar.
const SOURCES = {
  light: "/brand/logo-negativo.svg",
  dark: "/brand/logo-principal.svg",
  "mono-light": "/brand/logo-branco.svg",
} as const;

export function Logo({
  variant = "light",
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={SOURCES[variant]}
      alt="All In"
      width={354}
      height={198}
      priority={priority}
      unoptimized
      className={`object-contain ${className}`}
    />
  );
}
