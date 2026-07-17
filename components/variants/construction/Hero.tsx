"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import {
  company,
  hero,
  heroFeatures,
} from "@/content/variants/construction";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";

export default function ConstructionHero() {
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-gradient-to-b from-primary/10 to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute -right-32 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="py-20 sm:py-24 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              {hero.badge}
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="#kontakt" className="gap-2">
                {hero.primaryButton}

                <ArrowRight className="h-5 w-5" aria-hidden="true" />
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

                {hero.secondaryButton}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div
              className="absolute -inset-6 -z-10 rounded-[1.5rem] bg-primary/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-2xl shadow-black/15">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(1rem-0.125rem)]">
                <Image
                  src={company.heroImage}
                  alt={`${company.name} – realizácia stavebného projektu`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  priority
                  className="object-cover object-center transition duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto lg:bottom-7 lg:left-7">
                  <div className="w-full rounded-xl border border-white/15 bg-black/65 p-4 text-white shadow-2xl backdrop-blur-md sm:w-[20rem]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary">
                        <CheckCircle2
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs text-white/65">
                          Kompletná realizácia
                        </p>

                        <p className="text-sm font-semibold">
                          Od návrhu až po odovzdanie
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-4">
                      <div>
                        <p className="text-xl font-bold text-primary">
                          15+
                        </p>

                        <p className="mt-1 text-[0.7rem] text-white/65">
                          rokov skúseností
                        </p>
                      </div>

                      <div>
                        <p className="text-xl font-bold text-primary">
                          300+
                        </p>

                        <p className="mt-1 text-[0.7rem] text-white/65">
                          dokončených projektov
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -top-5 hidden rounded-xl border border-border bg-surface px-5 py-4 shadow-xl lg:block xl:right-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Kvalita
              </p>

              <p className="mt-1 font-bold text-foreground">
                Bez kompromisov
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-14"
        >
          {heroFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex min-w-0 items-center gap-4 rounded-xl border border-border bg-surface/90 px-5 py-4 text-sm font-medium text-muted shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </span>

                <span className="min-w-0 leading-5">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}