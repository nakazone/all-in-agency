import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
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
      className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
