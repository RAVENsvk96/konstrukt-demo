"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { company } from "@/content/company";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactBarber() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address
  )}`;

  const items = [
    {
      icon: Phone,
      label: "Telefón",
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      label: "Adresa",
      value: company.address,
      href: mapsLink,
      external: true,
    },
    {
      icon: Clock,
      label: "Otváracie hodiny",
      value: company.openingHours,
    },
  ];

  return (
    <section id="kontakt" className="bg-[#F7F5F2] px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Kontakt"
          title="Rezervujte si svoj termín."
          description="Zavolajte nám alebo nám napíšte. Radi vám pomôžeme nájsť najbližší voľný termín."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-[#E6DED2] bg-white p-7"
          >
            <div className="space-y-6">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#A7865A]/10">
                      <Icon className="h-5 w-5 text-[#A7865A]" />
                    </div>

                    <div>
                      <p className="text-sm text-[#666666]">{item.label}</p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="font-semibold text-[#111111] transition hover:text-[#A7865A]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-[#111111]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-[#E6DED2] bg-white p-3"
          >
            <iframe
              src={company.mapUrl}
              title={`${company.name} mapa`}
              className="h-[28rem] w-full rounded-[1.5rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}