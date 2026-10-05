import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

const SOURCES = {
  light: "/logo-light.png",
  dark: "/logo-dark.png",
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
      width={805}
      height={411}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
