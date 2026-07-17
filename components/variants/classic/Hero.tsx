"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { company } from "@/content/company";
import { heroFeatures } from "@/content/heroFeatures";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <Container className="grid min-h-[85vh] items-center gap-14 py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-lg shadow-primary/10">
            <Star
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            />
            4.9 / 5 hodnotenie zákazníkov
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {company.slogan}
          </p>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Opravíme vaše auto rýchlo, férovo a spoľahlivo.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Moderný autoservis pre bežnú údržbu, diagnostiku, brzdy, podvozok a
            pneuservis. Objednanie jednoducho online alebo telefonicky.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface/80 p-4 text-sm text-muted backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-surface hover:shadow-lg hover:shadow-primary/10"
                >
                  <Icon
                    className="h-6 w-6 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#kontakt">
              Objednať termín
            </Button>

            <Button
              href={phoneHref}
              variant="secondary"
              className="gap-2"
            >
              <Phone
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
              Zavolať
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-card bg-primary/15 blur-2xl" />

          <div className="rounded-card border border-border bg-surface/90 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-5">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={company.heroImage}
                alt="Auto v autoservise"
                width={700}
                height={500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="h-72 w-full object-cover transition duration-700 hover:scale-105 sm:h-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/70 px-5 py-4 backdrop-blur sm:right-auto">
                <p className="text-xs uppercase tracking-wider text-primary">
                  Dnes otvorené
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  {company.openingHours}
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  ⭐ 4.9 / 5 • 5000+ opravených áut
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-background p-4">
                <p className="text-sm text-muted">Najbližší termín</p>
                <p className="mt-1 font-semibold text-foreground">
                  do 24 hodín
                </p>
              </div>

              <div className="rounded-2xl bg-background p-4">
                <p className="text-sm text-muted">Diagnostika</p>
                <p className="mt-1 font-semibold text-foreground">
                  od 30 €
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}