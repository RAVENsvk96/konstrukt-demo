"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { services } from "@/content/services";
import { icons } from "@/lib/icons";
import { motion } from "framer-motion";

export default function ServicesClinic() {
  return (
    <section id="sluzby" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Služby"
          title="Komplexná starostlivosť na jednom mieste"
          description="Od preventívnych prehliadok až po estetické a špecializované ošetrenia. Každú službu navrhujeme s dôrazom na komfort, dôveru a dlhodobé zdravie."
        />

        <div className="mt-12 grid gap-x-12 gap-y-2 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group border-b border-border py-7"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {service.description}
                    </p>

                    <a
                      href={service.href ?? "#kontakt"}
                      className="mt-4 inline-flex text-sm font-semibold text-primary transition hover:text-primary-hover"
                    >
                      Objednať konzultáciu
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}