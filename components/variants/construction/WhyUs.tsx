"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Check,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Overená kvalita",
    description:
      "Používame kvalitné materiály a overené pracovné postupy. Každú fázu realizácie priebežne kontrolujeme.",
  },
  {
    icon: CalendarCheck2,
    title: "Dodržané termíny",
    description:
      "Projekt plánujeme realisticky a klienta včas informujeme o priebehu prác aj ďalších krokoch.",
  },
  {
    icon: ClipboardCheck,
    title: "Jasný rozpočet",
    description:
      "Pred začiatkom dostanete zrozumiteľnú cenovú ponuku bez nejasných položiek a nepríjemných prekvapení.",
  },
  {
    icon: UsersRound,
    title: "Jeden spoľahlivý tím",
    description:
      "Komunikáciu, remeselníkov aj jednotlivé dodávky koordinujeme za vás pod jednou strechou.",
  },
];

const guarantees = [
  "Obhliadka a úvodná konzultácia",
  "Transparentná cenová ponuka",
  "Pravidelná komunikácia počas realizácie",
  "Kontrola kvality v každej fáze",
];

export default function ConstructionWhyUs() {
  return (
    <section
      id="preco-my"
      className="relative overflow-hidden bg-surface/50 py-20 sm:py-24"
    >
      <div
        className="absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FadeIn
            y={24}
            duration={0.6}
            className="lg:sticky lg:top-28"
          >
            <SectionHeading
              badge="Prečo Konstrukt"
              title="Stavba bez chaosu, výhovoriek a skrytých prekvapení."
              description="Kvalitná realizácia nie je iba o remesle. Rovnako dôležité sú príprava, koordinácia, komunikácia a dôsledná kontrola každej fázy projektu."
            />

            <div className="mt-8 rounded-2xl border border-border bg-background p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="font-semibold text-foreground">
                    Za výsledkom si stojíme
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Projekt nepovažujeme za dokončený, kým nie je riadne
                    skontrolovaný a pripravený na odovzdanie.
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {guarantees.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-foreground"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              href="#kontakt"
              className="mt-9 w-full gap-2 sm:w-fit"
            >
              Prediskutovať projekt

              <ArrowRight
                className="h-5 w-5"
                aria-hidden="true"
              />
            </Button>
          </FadeIn>

          <Stagger
            staggerChildren={0.1}
            className="grid gap-5 sm:grid-cols-2"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <StaggerItem
                  key={benefit.title}
                  duration={0.5}
                  y={28}
                  className="h-full"
                >
                  <article className="group relative flex h-full min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 sm:p-7">
                    <div
                      className="absolute right-0 top-0 h-28 w-28 translate-x-12 -translate-y-12 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-start justify-between gap-6">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-sm font-bold tracking-[0.2em] text-muted/35 transition-colors duration-300 group-hover:text-primary/55">
                        {number}
                      </span>
                    </div>

                    <div className="relative mt-auto pt-10">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {benefit.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}

            <StaggerItem
              duration={0.5}
              y={28}
              className="sm:col-span-2"
            >
              <div className="relative overflow-hidden rounded-2xl bg-foreground p-7 text-background shadow-xl sm:p-8">
                <div
                  className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-primary/20 blur-2xl"
                  aria-hidden="true"
                />

                <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <HardHat
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Skúsený realizačný tím
                      </p>

                      <p className="mt-2 max-w-xl text-lg font-semibold leading-7">
                        Každý projekt vedie zodpovedná osoba, ktorá koordinuje
                        celý priebeh realizácie.
                      </p>
                    </div>
                  </div>

                  <a
                    href="#kontakt"
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-75"
                  >
                    Kontaktovať nás

                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}