import StructuredData from "@/components/seo/StructuredData";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";

import { Hero, Services, WhyUs, Reviews, Contact } from "@/components/variants";

export default function Home() {
  return (
    <>
      <StructuredData />

      <main className="min-h-screen bg-[#F7F5F2] text-[#111111]">
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  );
}