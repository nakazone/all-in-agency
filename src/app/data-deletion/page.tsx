import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { LegalDocument } from "@/components/LegalDocument";
import { Footer } from "@/components/Footer";
import { legalContent } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: legalContent.en.deletion.metaTitle,
  description: legalContent.en.deletion.description,
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <>
      <Header />
      <main>
        <LegalDocument doc="deletion" />
      </main>
      <Footer />
    </>
  );
}
