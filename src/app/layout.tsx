import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "All In | Websites, landing pages and web apps",
  description:
    "All In builds websites, landing pages and web applications that connect your digital presence, operations and customer intake, in English and Portuguese.",
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
      suppressHydrationWarning
      className={`${bricolage.variable} ${geist.variable} h-full antialiased`}
    >
      <head>
        {/* Marca o documento como "com JavaScript": só então as entradas animadas escondem o conteúdo antes de aparecer. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-full font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
