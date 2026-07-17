"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";
import { services } from "@/content/variants/construction";
import { ArrowRight } from "lucide-react";

export default function ConstructionServices() {
  return (
    <section id="sluzby" className="bg-surface/50 py-20 sm:py-24">
      <Container>
        <FadeIn y={24} duration={0.6}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              badge="Naše služby"
              title="Kompletné stavebné riešenia pod jednou strechou."
              description="Od výstavby rodinného domu až po rekonštrukciu, fasádu či úpravu exteriéru. Každý projekt koordinujeme s dôrazom na kvalitu, poriadok a dodržanie dohody."
            />

            <Button
              href="#kontakt"
              variant="secondary"
              className="w-fit gap-2"
            >
              Nezáväzná konzultácia

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Button>
          </div>
        </FadeIn>

        <Stagger
          staggerChildren={0.08}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <StaggerItem
                key={service.title}
                duration={0.5}
                y={28}
                className="h-full"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-xl hover:shadow-primary/10 sm:p-7">
                  <div
                    className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:translate-x-7 group-hover:-translate-y-7"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-sm font-bold tracking-[0.18em] text-muted/35 transition-colors duration-300 group-hover:text-primary/55">
                      {number}
                    </span>
                  </div>

                  <div className="relative mt-7 flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                      {service.description}
                    </p>

                    <div className="mt-7 border-t border-border pt-5">
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                        aria-label={`Získať cenovú ponuku pre službu ${service.title}`}
                      >
                        Získať cenovú ponuku

                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn y={20} duration={0.6} delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-background px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Nenašli ste presne to, čo potrebujete?
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                Každý projekt je individuálny. Opíšte nám svoju predstavu a
                pripravíme riešenie prispôsobené rozsahu aj rozpočtu.
              </p>
            </div>

            <Button
              href="#kontakt"
              className="w-full shrink-0 gap-2 sm:w-auto"
            >
              Vyžiadať ponuku

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}