"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/layout/SectionHeading";

import { services } from "@/content/services";
import { icons } from "@/lib/icons";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="sluzby" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading badge="Služby" title="Naše služby" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                    {service.description}
                  </p>

                  {service.price && (
                    <p className="mt-6 font-semibold text-orange-500">
                      {service.price}
                    </p>
                  )}

                  <Button href="#kontakt" className="mt-6 w-full px-4 py-2">
                    Objednať
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}