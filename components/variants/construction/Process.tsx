"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  HardHat,
  KeyRound,
  MapPin,
} from "lucide-react";

const processSteps = [
  {
    icon: MapPin,
    title: "Obhliadka a konzultácia",
    description:
      "Prejdeme si vaše predstavy, rozsah prác a technický stav objektu. Získame všetky informácie potrebné na správne nacenenie.",
  },
  {
    icon: FileText,
    title: "Cenová ponuka",
    description:
      "Pripravíme zrozumiteľnú ponuku s rozsahom prác, použitými materiálmi, predbežným harmonogramom a cenou realizácie.",
  },
  {
    icon: ClipboardList,
    title: "Príprava projektu",
    description:
      "Dohodneme termín, zabezpečíme materiál, pracovníkov a jednotlivé profesie tak, aby práce prebiehali plynulo.",
  },
  {
    icon: HardHat,
    title: "Realizácia",
    description:
      "Projekt realizujeme podľa dohodnutého postupu. Priebežne kontrolujeme kvalitu a informujeme vás o aktuálnom stave.",
  },
  {
    icon: KeyRound,
    title: "Kontrola a odovzdanie",
    description:
      "Dokončené práce spoločne skontrolujeme, odstránime prípadné nedostatky a projekt vám riadne odovzdáme.",
  },
];

const projectBenefits = [
  "Jeden kontaktný človek počas celej realizácie",
  "Priebežná kontrola kvality vykonaných prác",
  "Jasne stanovený rozsah a harmonogram",
];

export default function ConstructionProcess() {
  return (
    <section
      id="proces"
      className="relative overflow-hidden bg-background py-20 sm:py-24"
    >
      <div
        className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <FadeIn y={24} duration={0.6}>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-12">
            <SectionHeading
              badge="Ako pracujeme"
              title="Od prvého stretnutia až po odovzdanie hotového projektu."
              description="Každý projekt má jasný postup. Vďaka dôslednej príprave, koordinácii a pravidelnej komunikácii presne viete, čo sa práve realizuje a čo bude nasledovať."
            />

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="mt-1 h-full min-h-16 w-1 shrink-0 rounded-full bg-primary" />

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Transparentný priebeh
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Pred začiatkom si spoločne odsúhlasíme rozsah, cenu aj
                    predpokladaný harmonogram realizácie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <Stagger
          staggerChildren={0.1}
          className="relative mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-5"
        >
          <div
            className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const number = String(index + 1).padStart(2, "0");
            const isLast = index === processSteps.length - 1;

            return (
              <StaggerItem
                key={step.title}
                duration={0.5}
                y={28}
                className={isLast ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <article className="group relative h-full rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background text-foreground shadow-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                      Krok {number}
                    </span>

                    <h3 className="mt-3 text-lg font-semibold leading-7 tracking-tight text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn
          y={24}
          duration={0.6}
          delay={0.15}
          className="mt-14 lg:mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-8 text-background shadow-xl sm:px-8 lg:px-10 lg:py-10">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Máte pripravený projekt?
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">
                  Začnime nezáväznou konzultáciou a obhliadkou.
                </h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {projectBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm leading-6 text-background/75"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />

                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                href="#kontakt"
                className="w-full shrink-0 gap-2 sm:w-fit"
              >
                Dohodnúť obhliadku

                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}