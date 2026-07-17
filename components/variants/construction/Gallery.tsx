"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Ruler,
} from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "Moderný rodinný dom",
    location: "Senec",
    category: "Kompletná výstavba",
    description:
      "Realizácia rodinného domu od základovej dosky až po dokončenie fasády a exteriérových úprav.",
    image: "/images/construction/project-house.jpg",
    duration: "7 mesiacov",
    area: "186 m²",
    services: ["Hrubá stavba", "Strecha", "Fasáda"],
    featured: true,
  },
  {
    title: "Rekonštrukcia bytu",
    location: "Bratislava",
    category: "Kompletná rekonštrukcia",
    description:
      "Premena pôvodného bytu na moderné a funkčné bývanie vrátane nových rozvodov.",
    image: "/images/construction/project-apartment.jpg",
    duration: "10 týždňov",
    area: "82 m²",
    services: ["Búracie práce", "Rozvody", "Interiér"],
    featured: false,
  },
  {
    title: "Obnova administratívnej budovy",
    location: "Trnava",
    category: "Komerčná realizácia",
    description:
      "Obnova fasády, spoločných priestorov a technického zázemia administratívneho objektu.",
    image: "/images/construction/project-office.jpg",
    duration: "4 mesiace",
    area: "740 m²",
    services: ["Fasáda", "Interiér", "Technické práce"],
    featured: false,
  },
  {
    title: "Rekonštrukcia rodinného domu",
    location: "Pezinok",
    category: "Rekonštrukcia",
    description:
      "Komplexná modernizácia staršieho domu so zachovaním jeho pôvodného charakteru.",
    image: "/images/construction/project-renovation.jpg",
    duration: "5 mesiacov",
    area: "154 m²",
    services: ["Zateplenie", "Strecha", "Interiér"],
    featured: false,
  },
];

export default function ConstructionGallery() {
  return (
    <section
      id="realizacie"
      className="relative overflow-hidden bg-background py-20 sm:py-24"
    >
      <div
        className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <FadeIn y={24} duration={0.6}>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              badge="Naše realizácie"
              title="Výsledky, za ktorými si stojíme."
              description="Pozrite si výber projektov, pri ktorých sme zabezpečili kompletnú realizáciu, rekonštrukciu alebo jednotlivé stavebné práce."
            />

            <Button
              href="#kontakt"
              variant="secondary"
              className="w-fit gap-2"
            >
              Prediskutovať projekt

              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </FadeIn>

        <Stagger
          staggerChildren={0.1}
          className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <StaggerItem
              key={project.title}
              y={28}
              duration={0.55}
              className={project.featured ? "lg:row-span-2" : ""}
            >
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-black/10 ${
                  project.featured
                    ? "min-h-[34rem] sm:min-h-[38rem]"
                    : "min-h-[26rem]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title}, ${project.location}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"
                  aria-hidden="true"
                />

                <div className="absolute left-5 top-5 z-10 inline-flex max-w-[calc(100%-5rem)] items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-sm sm:left-6 sm:top-6">
                  <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />

                  <span>{project.category}</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-sm font-medium text-white/75">
                    <MapPin
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />

                    <span>{project.location}</span>
                  </div>

                  <h3
                    className={`mt-3 font-bold tracking-tight text-white ${
                      project.featured
                        ? "text-3xl sm:text-4xl"
                        : "text-2xl sm:text-3xl"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-5">
                    <div className="flex items-center gap-2 text-sm text-white/85">
                      <CalendarDays
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />

                      <span>{project.duration}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/85">
                      <Ruler
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />

                      <span>{project.area}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0 text-primary"
                          aria-hidden="true"
                        />

                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute right-5 top-5 hidden h-11 w-11 translate-y-2 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex sm:right-6 sm:top-6"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn y={20} duration={0.55} className="mt-8">
          <div className="grid gap-6 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Váš projekt môže byť ďalší
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                Každá realizácia začína dôkladným pochopením vašich potrieb,
                technickou obhliadkou a transparentnou cenovou ponukou.
              </p>
            </div>

            <Button
              href="#kontakt"
              className="w-full gap-2 sm:w-fit"
            >
              Vyžiadať ponuku

              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}