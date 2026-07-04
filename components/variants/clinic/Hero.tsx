"use client";

import Button from "@/components/ui/Button";
import { company } from "@/content/company";
import { heroFeatures } from "@/content/heroFeatures";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import Image from "next/image";

export default function HeroClinic() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-lg shadow-primary/10">
            <Star className="h-4 w-4 fill-primary" />
            4.9 / 5 hodnotenie pacientov
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {company.slogan}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Moderná zubná starostlivosť pre celú rodinu.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Poskytujeme preventívnu, estetickú a komplexnú stomatologickú
            starostlivosť pre deti aj dospelých s dôrazom na komfort a
            individuálny prístup.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#kontakt">Objednať termín</Button>

            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-surface"
            >
              <Phone className="h-5 w-5 text-primary" />
              Zavolať
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-border bg-surface p-4 shadow-2xl shadow-black/40"
        >
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src={company.heroImage}
              alt={company.name}
              width={1200}
              height={650}
              priority
              className="h-[22rem] w-full object-cover object-center sm:h-[30rem]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {heroFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-surface/80 p-5 text-sm text-zinc-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
              >
                <Icon className="h-6 w-6 shrink-0 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}