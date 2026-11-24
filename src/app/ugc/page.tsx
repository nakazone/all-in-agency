import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { UgcPage } from "@/components/ugc/UgcPage";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ugcContent } from "@/lib/content/ugc";

export const metadata: Metadata = {
  title: ugcContent.en.metaTitle,
  description: ugcContent.en.lead,
  alternates: { canonical: "/ugc" },
};

export default function Ugc() {
  return (
    <>
      {/* A página tem o próprio formulário: a ação do topo leva até ele. */}
      <Header ctaHref="#contact" />
      <main>
        <UgcPage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
