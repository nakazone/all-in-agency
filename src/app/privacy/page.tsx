import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { LegalDocument } from "@/components/LegalDocument";
import { Footer } from "@/components/Footer";
import { legalContent } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: legalContent.en.privacy.metaTitle,
  description: legalContent.en.privacy.description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalDocument doc="privacy" />
      </main>
      <Footer />
    </>
  );
}
