import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
// globals.css primeiro: declara a ordem das camadas de CSS antes do tema Astryx.
import "./globals.css";
import { Providers } from "@/components/Providers";

// Fontes da referência da marca (variáveis, licença OFL em ./fonts).
const bricolage = localFont({
  src: "./fonts/bricolage-grotesque.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/geist.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "All In — Digital Agency | Websites, Landing Pages & Web Apps",
  description:
    "Bilingual digital agency (Brazil + USA) building high-performance websites, landing pages, and web applications for ambitious brands.",
  icons: {
    icon: "/logo-dark.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "All In — Digital Agency",
    description:
      "We build websites, landing pages, and web apps for brands in Brazil and the USA.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    siteName: "All In",
    images: [{ url: "/logo-dark.png", width: 805, height: 411, alt: "All In" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All In — Digital Agency",
    description:
      "High-performance websites, landing pages, and web applications.",
    images: ["/logo-dark.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${geist.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
