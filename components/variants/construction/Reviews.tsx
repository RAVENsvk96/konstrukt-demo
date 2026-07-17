"use client";

import { Quote } from "lucide-react";

import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

const reviews = [
  {
    name: "Peter Novák",
    project: "Rodinný dom • Senec",
    featured: true,
    text:
      "Od prvej konzultácie až po odovzdanie domu prebiehalo všetko profesionálne. Dodržali termíny, rozpočet aj kvalitu práce. Oceňujeme najmä výbornú komunikáciu počas celej realizácie.",
  },
  {
    name: "Martina Kováčová",
    project: "Rekonštrukcia bytu • Bratislava",
    featured: false,
    text:
      "Rekonštrukcia prebehla bez komplikácií a výsledok splnil naše očakávania. Tím bol spoľahlivý a všetko po sebe vždy upratal.",
  },
  {
    name: "Marek Šimek",
    project: "Administratívna budova • Trnava",
    featured: false,
    text:
      "Výborná organizácia prác a profesionálny prístup. Oceňujeme transparentnú komunikáciu aj dodržanie harmonogramu.",
  },
];

const stats = [
  {
    value: "300+",
    label: "úspešne dokončených projektov",
  },
  {
    value: "98 %",
    label: "klientov nás odporúča",
  },
  {
    value: "15+",
    label: "rokov skúseností",
  },
];

export default function ConstructionReviews() {
  const featuredReview = reviews.find((review) => review.featured);
  const secondaryReviews = reviews.filter((review) => !review.featured);

  if (!featuredReview) {
    return null;
  }

  return (
    <section
      id="referencie"
      className="relative overflow-hidden bg-foreground py-20 text-background sm:py-24"
    >
      <div
        className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <FadeIn y={24} duration={0.6}>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Referencie
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
              Čo hovoria naši klienti.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-background/65">
              Spokojnosť klientov je pre nás najlepším potvrdením kvalitnej
              práce, spoľahlivej komunikácie a dodržaných dohôd.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[1.4fr_0.8fr]">
          <FadeIn y={28} duration={0.6}>
            <article className="relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-2xl border border-background/15 bg-background/[0.05] p-7 shadow-2xl backdrop-blur-sm sm:p-9 lg:p-10">
              <div
                className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
                aria-hidden="true"
              />

              <Quote
                className="absolute right-7 top-7 h-16 w-16 text-background/[0.05] sm:h-20 sm:w-20"
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col">
                <blockquote className="max-w-3xl text-xl font-semibold leading-relaxed text-background sm:text-2xl sm:leading-relaxed lg:text-[1.7rem]">
                  „{featuredReview.text}“
                </blockquote>

                <div className="mt-auto pt-10">
                  <div className="border-t border-background/15 pt-6">
                    <p className="font-semibold text-background">
                      {featuredReview.name}
                    </p>

                    <p className="mt-1 text-sm text-background/55">
                      {featuredReview.project}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>

          <Stagger
            staggerChildren={0.08}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                y={20}
                duration={0.45}
                className="h-full"
              >
                <div className="group flex h-full min-h-32 flex-col justify-center rounded-2xl border border-background/15 bg-background/[0.05] p-6 transition-all duration-300 hover:border-primary/40 hover:bg-background/[0.07] lg:min-h-0 lg:p-7">
                  <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                    {stat.value}
                  </p>

                  <p className="mt-3 max-w-52 text-sm leading-6 text-background/65">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger
          staggerChildren={0.1}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          {secondaryReviews.map((review) => (
            <StaggerItem
              key={review.name}
              y={24}
              duration={0.5}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-2xl border border-background/15 bg-background/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background/[0.06] hover:shadow-xl sm:p-8">
                <blockquote className="flex-1 text-base leading-7 text-background/75">
                  „{review.text}“
                </blockquote>

                <div className="mt-7 border-t border-background/15 pt-5">
                  <p className="font-semibold text-background">{review.name}</p>

                  <p className="mt-1 text-sm text-background/50">
                    {review.project}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}