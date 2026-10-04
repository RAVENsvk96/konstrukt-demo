import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Hero, Services, WhyUs, Gallery, Reviews, Contact } from "@/components/variants";

export default function Home() {
  return <main className="min-h-screen bg-background text-foreground [&>section]:scroll-mt-28"><Navbar /><Hero /><Gallery /><Services /><WhyUs /><Reviews /><Contact /><Footer /></main>;
}
