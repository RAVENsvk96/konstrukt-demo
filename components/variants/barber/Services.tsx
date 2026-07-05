"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/content/services";
import { motion } from "framer-motion";

export default function ServicesBarber() {
  return (
    <section id="sluzby" className="bg-[#F7F5F2] px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Služby"
          title="Jednoduchá ponuka bez zbytočností."
          description="Vyberte si službu podľa toho, čo práve potrebujete. Každý termín má priestor na konzultáciu, detail a finálnu úpravu."
        />

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#E6DED2] bg-white">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group border-b border-[#E6DED2] p-6 transition-colors duration-300 last:border-b-0 hover:bg-[#F7F5F2]"
            >
              <div className="grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-center">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#111111]">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#666666]">
                    {service.description}
                  </p>
                </div>

                <p className="text-sm font-medium text-[#666666]">
                  {index === 0
                    ? "45 min"
                    : index === 1
                      ? "30 min"
                      : index === 2
                        ? "75 min"
                        : "30 min"}
                </p>

                <p className="text-lg font-semibold text-[#A7865A]">
                  {service.price}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <Button href="#kontakt">Rezervovať termín</Button>
        </div>
      </div>
    </section>
  );
}