"use client";

import Button from "@/components/ui/Button";
import { company } from "@/data/company";
import { heroFeatures } from "@/data/heroFeatures";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-14 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400 shadow-lg shadow-orange-500/10">
            <Star className="h-4 w-4 fill-orange-400" />
            4.9 / 5 hodnotenie zákazníkov
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            {company.slogan}
          </p>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-6xl">
            Opravíme vaše auto rýchlo, férovo a spoľahlivo.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Moderný autoservis pre bežnú údržbu, diagnostiku, brzdy, podvozok a
            pneuservis. Objednanie jednoducho online alebo telefonicky.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 text-sm text-zinc-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:bg-zinc-900 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <Icon className="h-6 w-6 shrink-0 text-orange-500" />
                  <span className="font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#kontakt">Objednať termín</Button>

            <a
              href={`tel:${company.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/60 hover:bg-zinc-900"
            >
              <Phone className="h-5 w-5 text-orange-500" />
              Zavolať
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-orange-500/15 blur-2xl" />

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-5">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={company.heroImage}
                alt="Auto v autoservise"
                width={700}
                height={500}
                className="h-72 w-full rounded-2xl object-cover transition duration-700 hover:scale-105 sm:h-80"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/70 px-5 py-4 backdrop-blur sm:right-auto">
                <p className="text-xs uppercase tracking-wider text-orange-400">
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
              <div className="rounded-2xl bg-zinc-950 p-4">
                <p className="text-sm text-zinc-400">Najbližší termín</p>
                <p className="mt-1 font-semibold">do 24 hodín</p>
              </div>

              <div className="rounded-2xl bg-zinc-950 p-4">
                <p className="text-sm text-zinc-400">Diagnostika</p>
                <p className="mt-1 font-semibold">od 30 €</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}