import StructuredData from "@/components/seo/StructuredData";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <StructuredData />

      <main className="min-h-screen bg-zinc-950 text-white">
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <FAQ />
        <CTA />
        <Stats />
        <Contact />
        <Footer />
      </main>
    </>
  );
}