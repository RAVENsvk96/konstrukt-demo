"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";

const projects = [
  { title: "Rodinný dom", category: "Novostavba", image: "/images/construction/project-house.jpg", description: "Čisté línie, otvorený priestor a prepojenie so záhradou. Ukážkový koncept rodinného bývania s dôrazom na praktické usporiadanie a súčasnú architektúru.", focus: "Architektúra a rodinné bývanie" },
  { title: "Moderný interiér", category: "Interiér", image: "/images/construction/project-apartment.jpg", description: "Premyslené rozloženie, prirodzené svetlo a materiály, ktoré spolu fungujú. Ilustračný pohľad na moderný interiér vytvorený pre každodenný komfort.", focus: "Dispozícia a materiály" },
  { title: "Komerčná budova", category: "Komerčné priestory", image: "/images/construction/project-office.jpg", description: "Reprezentatívny priestor s jasnou funkciou. Ukážková vizualizácia modernej budovy, ktorá prepája pracovné prostredie s výrazným architektonickým riešením.", focus: "Pracovné a komerčné prostredie" },
  { title: "Rekonštrukcia domu", category: "Rekonštrukcia", image: "/images/construction/project-renovation.jpg", description: "Nový pohľad na existujúci priestor. Ilustračný koncept obnovy domu s dôrazom na jeho charakter, funkčnosť a pohodlné bývanie.", focus: "Obnova a funkčnosť priestoru" },
];

export default function ConstructionGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const reduceMotion = useReducedMotion();
  const project = selected === null ? null : projects[selected];

  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current;
    modal?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { modal?.close(); document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function move(direction: number) {
    setSelected(current => current === null ? null : (current + direction + projects.length) % projects.length);
  }

  return (
    <section id="realizacie" className="bg-background py-20 sm:py-24">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Ukážkové projekty</p>
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Priestor pre<br /><span className="text-primary">dobrú prácu.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end">Od prvého návrhu po posledný detail. Preskúmajte ilustračné koncepty výstavby, interiérov a rekonštrukcií. Obrázky nepredstavujú skutočné realizácie firmy.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          {projects.map((item, index) => (
            <motion.article key={item.title} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className={index === 0 ? "lg:row-span-2" : index === 3 ? "lg:col-span-2" : ""}>
              <button type="button" onClick={() => setSelected(index)} aria-label={`Otvoriť projekt: ${item.title}`} className={`group relative block w-full overflow-hidden rounded-2xl bg-surface text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${index === 0 ? "h-[390px] sm:h-[480px] lg:h-full lg:min-h-[570px]" : index === 3 ? "h-[260px] sm:h-[300px]" : "h-[270px]"}`}>
                <Image src={item.image} alt={`Ilustračná vizualizácia: ${item.title}`} fill sizes={index === 3 ? "(max-width: 1280px) 100vw, 1152px" : "(max-width: 1024px) 100vw, 65vw"} className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                  <div><p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-orange-200">{item.category} / koncept</p><h3 className={`font-semibold tracking-tight text-white ${index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{item.title}</h3><p className="mt-3 text-sm text-white/75">Preskúmať projekt</p></div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors group-hover:bg-primary group-hover:border-primary"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </Container>

      <dialog ref={dialog} onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setSelected(null); } }} aria-labelledby="project-title" aria-describedby="project-description" className="m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-5xl overflow-y-auto rounded-2xl border-0 bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/75">
        {project && <>
          <div className="relative aspect-[16/10] max-h-[55dvh] bg-surface sm:aspect-[16/9]">
            <Image src={project.image} alt={`Ilustračná vizualizácia: ${project.title}`} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
            <button type="button" onClick={() => setSelected(null)} aria-label="Zavrieť detail projektu" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground shadow-lg focus-visible:outline-2 focus-visible:outline-primary"><X className="h-5 w-5" /></button>
          </div>
          <div className="p-6 sm:p-9"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{project.category} / ilustračný koncept</p><h3 id="project-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h3><p id="project-description" className="mt-4 max-w-2xl text-sm leading-7 text-muted">{project.description}</p><div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-5"><p className="text-sm text-muted">{project.focus}</p><div className="flex items-center gap-3"><button type="button" onClick={() => move(-1)} aria-label="Predchádzajúci projekt" className="rounded-full border border-border p-3 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"><ArrowLeft className="h-4 w-4" /></button><span className="text-xs text-muted" aria-live="polite">{(selected ?? 0) + 1} / {projects.length}</span><button type="button" onClick={() => move(1)} aria-label="Nasledujúci projekt" className="rounded-full border border-border p-3 hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"><ArrowRight className="h-4 w-4" /></button></div></div></div>
        </>}
      </dialog>
    </section>
  );
}
