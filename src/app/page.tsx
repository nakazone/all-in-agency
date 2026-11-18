import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hand } from "@/components/Hand";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hand />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
