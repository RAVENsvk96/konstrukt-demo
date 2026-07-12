"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { services } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BeautyServices() {
  return (
    <section id="sluzby" className="bg-surface/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            badge="Naše služby"
            title="Starostlivosť vytvorená pre vás."
            description="Vyberte si profesionálne beauty ošetrenie prispôsobené vašim potrebám, štýlu a očakávanému výsledku."
            centered
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isFeatured = index === 0;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 ${
                    isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-2xl" />
                  )}

                  <div className="relative flex items-start justify-between gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      {service.price}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3
                      className={`font-semibold text-foreground ${
                        isFeatured ? "text-2xl" : "text-xl"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-4 leading-7 text-muted ${
                        isFeatured ? "max-w-2xl text-base" : "text-sm"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="#kontakt"
                    className="relative mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                  >
                    Rezervovať ošetrenie
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
            >
              Rezervovať termín
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}