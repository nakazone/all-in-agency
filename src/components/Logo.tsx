type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const fill = variant === "light" ? "#F6F2EC" : "#141311";

  return (
    <svg
      viewBox="0 0 100 36"
      className={className}
      role="img"
      aria-label="allin"
    >
      <title>allin</title>
      <text
        x="0"
        y="28"
        fill={fill}
        style={{
          fontFamily: "var(--font-bricolage), sans-serif",
          fontWeight: 700,
          fontSize: 32,
          letterSpacing: "-0.055em",
        }}
      >
        allin
      </text>
      {/* Cover the default i tittle, then paint the brand red dot */}
      <rect x="46.6" y="3" width="8" height="8" fill={variant === "light" ? "#141311" : "#F6F2EC"} />
      <circle cx="50.6" cy="7" r="3.35" fill="#C4202B" />
    </svg>
  );
}
