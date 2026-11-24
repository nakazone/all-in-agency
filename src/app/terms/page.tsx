import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { LegalDocument } from "@/components/LegalDocument";
import { Footer } from "@/components/Footer";
import { legalContent } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: legalContent.en.terms.metaTitle,
  description: legalContent.en.terms.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <LegalDocument doc="terms" />
      </main>
      <Footer />
    </>
  );
}
