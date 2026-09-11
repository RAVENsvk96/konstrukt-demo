"use client";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { LayoutTemplate, ShieldCheck, Smartphone } from "lucide-react";
const goals = [
  { icon: ShieldCheck, title: "Dôveryhodný vzhľad", text: "Profesionálna vizuálna prezentácia podporuje dobrý prvý dojem." },
  { icon: LayoutTemplate, title: "Jasná štruktúra", text: "Služby a proces sú usporiadané tak, aby sa návštevník rýchlo zorientoval." },
  { icon: Smartphone, title: "Mobilná použiteľnosť", text: "Obsah zostáva prehľadný a pohodlne ovládateľný na každom zariadení." },
];
export default function ConstructionReviews() { return <section id="recenzie" className="bg-surface/40 py-20 sm:py-24"><Container><SectionHeading badge="Ciele návrhu" title="Web navrhnutý pre dôveru a prehľadnosť" description="Táto sekcia predstavuje ciele demo projektu. Neobsahuje recenzie skutočných klientov." centered /><div className="mt-14 grid gap-6 md:grid-cols-3">{goals.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="rounded-2xl border border-border bg-surface p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div><h3 className="mt-6 text-xl font-bold text-foreground">{item.title}</h3><p className="mt-4 leading-7 text-muted">{item.text}</p></motion.article>; })}</div></Container></section>; }
