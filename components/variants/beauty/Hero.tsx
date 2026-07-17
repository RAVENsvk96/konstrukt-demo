"use client";

import Button from "@/components/ui/Button";
import { company } from "@/content/company";
import { hero, heroFeatures } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import Image from "next/image";

export default function BeautyHero() {
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-background px-6 py-20 sm:py-24 lg:py-28">
      <div className="absolute left-0 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Star
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            />
            {hero.ratingBadge}
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {hero.badge}
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#kontakt">
              {hero.primaryButton}
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

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap">
            {heroFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/80 px-5 py-3.5 text-sm font-medium text-muted shadow-sm backdrop-blur"
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
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />

          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface p-3 shadow-2xl shadow-primary/10">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src={company.heroImage}
                alt={`${company.name} – kozmetické ošetrenie`}
                width={1200}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="h-[34rem] w-full object-cover object-center sm:h-[40rem] lg:h-[40rem]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}