"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { company } from "@/content/company";
import { heroFeatures } from "@/content/variants/barber/heroFeatures";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function HeroBarber() {
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="absolute right-0 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-3xl" />

      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {company.slogan}
          </p>

          <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Strih, ktorý sedí vášmu štýlu.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-muted">
            Precízne strihy, úprava brady a pokojná atmosféra v štúdiu
            navrhnutom pre moderných gentlemanov.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#kontakt">
              Rezervovať termín
            </Button>

            <Button
              href={phoneHref}
              variant="secondary"
              className="gap-2"
            >
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              Zavolať
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted shadow-sm"
                >
                  <Icon
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden rounded-card border border-border bg-surface p-3 shadow-2xl shadow-black/10"
        >
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src={company.heroImage}
              alt={company.name}
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              className="h-[34rem] w-full object-cover object-right lg:h-[46rem]"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}