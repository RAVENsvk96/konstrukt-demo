"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { company } from "@/content/company";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import type { ComponentProps } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address
  )}`;

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = async (
    event
  ) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Kontakt"
          title="Dohodnite si termín ešte dnes"
          description="Zavolajte nám alebo nám napíšte. Radi vám poradíme, pripravíme cenovú ponuku a nájdeme najbližší voľný termín."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10">
            <div className="space-y-6">
              {[
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
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10">
                      <Icon className="h-5 w-5 text-orange-500" />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-400">{item.label}</p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="font-semibold transition hover:text-orange-500"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800">
              <iframe
                src={company.mapUrl}
                title={`${company.name} mapa`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-400"
            >
              <MapPin className="h-4 w-4" />
              Otvoriť v Google Maps
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10"
          >
            <div className="grid gap-4">
              <input
                name="name"
                required
                placeholder="Vaše meno"
                className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Váš email"
                className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Napíšte, s čím potrebujete pomôcť"
                className="resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Odosielam..." : "Odoslať správu"}
                <Send className="h-5 w-5" />
              </button>

              {status === "success" && (
                <p className="text-sm text-green-400">
                  Správa bola úspešne odoslaná.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Správu sa nepodarilo odoslať. Skúste to znova.
                </p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}