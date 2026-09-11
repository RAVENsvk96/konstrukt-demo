"use client";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";

const visuals = [
  { title: "Rodinný dom", image: "/images/construction/project-house.jpg" },
  { title: "Moderný interiér", image: "/images/construction/project-apartment.jpg" },
  { title: "Komerčná budova", image: "/images/construction/project-office.jpg" },
  { title: "Rekonštrukcia domu", image: "/images/construction/project-renovation.jpg" },
];
export default function ConstructionGallery() {
  return <section id="realizacie" className="bg-background py-20 sm:py-24"><Container><SectionHeading badge="Ukážkové vizualizácie" title="Ako môže vyzerať prezentácia projektov" description="Ilustračné obrázky slúžia iba na ukážku dizajnu galérie. Nejde o realizácie skutočnej firmy Konstrukt." centered /><div className="mt-14 grid gap-6 md:grid-cols-2">{visuals.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-sm"><div className="relative aspect-[16/10] overflow-hidden rounded-xl"><Image src={item.image} alt={`Ilustračná vizualizácia: ${item.title}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><div className="p-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ilustračný príklad</p><h3 className="mt-2 text-xl font-bold text-foreground">{item.title}</h3></div></motion.article>)}</div></Container></section>;
}
