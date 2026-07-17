"use client";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { company } from "@/content/company";
import { site } from "@/content/site";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import type { ComponentProps } from "react";

const contactContent = {
  classic: {
    badge: "Kontakt",
    title: "Ozvite sa nám",
    description:
      "Radi vám odpovieme na otázky, pripravíme cenovú ponuku a dohodneme ďalší postup.",
    subjectLabel: "Predmet",
    subjectPlaceholder: "S čím vám môžeme pomôcť?",
    messagePlaceholder: "Napíšte nám viac o vašej požiadavke",
    submitLabel: "Odoslať správu",
  },
  clinic: {
    badge: "Kontakt",
    title: "Objednajte sa na vyšetrenie",
    description:
      "Kontaktujte nás telefonicky alebo prostredníctvom formulára. Radi vám pomôžeme s výberom vhodného termínu.",
    subjectLabel: "Dôvod návštevy",
    subjectPlaceholder: "Vyberte dôvod návštevy",
    messagePlaceholder:
      "Napíšte nám stručne, s čím potrebujete pomôcť",
    submitLabel: "Odoslať požiadavku",
  },
  barber: {
    badge: "Kontakt",
    title: "Rezervujte si svoj termín",
    description:
      "Vyberte si službu a napíšte nám. Čo najskôr vám potvrdíme dostupný termín.",
    subjectLabel: "Služba",
    subjectPlaceholder: "Vyberte službu",
    messagePlaceholder:
      "Napíšte preferovaný termín alebo ďalšie požiadavky",
    submitLabel: "Požiadať o termín",
  },
  beauty: {
    badge: "Kontakt",
    title: "Dohodnite si termín ešte dnes",
    description:
      "Zavolajte nám alebo nám napíšte. Radi vám poradíme a nájdeme najbližší voľný termín.",
    subjectLabel: "Ošetrenie",
    subjectPlaceholder: "Vyberte ošetrenie",
    messagePlaceholder:
      "Napíšte, o aké ošetrenie máte záujem",
    submitLabel: "Rezervovať termín",
  },
  construction: {
    badge: "Kontakt",
    title: "Máte projekt? Radi ho s vami preberieme.",
    description:
      "Kontaktujte nás pre nezáväznú konzultáciu. Pripravíme cenovú ponuku a navrhneme riešenie podľa vašich požiadaviek.",
    subjectLabel: "Typ projektu",
    subjectPlaceholder: "Vyberte typ projektu",
    messagePlaceholder:
      "Napíšte nám stručný opis projektu, lokalitu a predpokladaný termín realizácie",
    submitLabel: "Vyžiadať cenovú ponuku",
  },
} as const;

const subjectOptions = {
  classic: [
    "Všeobecná otázka",
    "Cenová ponuka",
    "Spolupráca",
    "Iné",
  ],
  clinic: [
    "Preventívna prehliadka",
    "Konzultácia",
    "Kontrolné vyšetrenie",
    "Akútny problém",
    "Iné",
  ],
  barber: [
    "Pánsky strih",
    "Úprava brady",
    "Strih a brada",
    "Detský strih",
    "Iné",
  ],
  beauty: [
    "Kozmetické ošetrenie",
    "Pleťová procedúra",
    "Masáž",
    "Obočie a mihalnice",
    "Iné",
  ],
  construction: [
    "Novostavba",
    "Rekonštrukcia",
    "Hrubá stavba",
    "Komerčný objekt",
    "Fasáda a zateplenie",
    "Iné",
  ],
} as const;

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const content = contactContent[site.variant];
  const options = subjectOptions[site.variant];

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address
  )}`;

  const contactItems = [
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

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = async (
    event
  ) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Contact form request failed.");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="kontakt">
      <FadeIn y={40} duration={0.6}>
        <SectionHeading
          badge={content.badge}
          title={content.title}
          description={content.description}
        />
      </FadeIn>

      <Stagger
        staggerChildren={0.08}
        className="mt-12 grid gap-8 lg:grid-cols-2"
      >
        <StaggerItem
          duration={0.5}
          y={24}
          className="rounded-card border border-border bg-surface p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
        >
          <div className="space-y-6">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm text-muted">{item.label}</p>

                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external ? "noopener noreferrer" : undefined
                        }
                        className="font-semibold text-surface-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-surface-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-card border border-border">
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
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Otvoriť v Google Maps
          </a>
        </StaggerItem>

        <StaggerItem
          duration={0.5}
          y={24}
          className="rounded-card border border-border bg-surface p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-surface-foreground">
                  Meno
                </span>

                <input
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Vaše meno"
                  className="rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-surface-foreground">
                  Email
                </span>

                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Váš email"
                  className="rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-surface-foreground">
                  {content.subjectLabel}
                </span>

                <select
                  name="subject"
                  required
                  defaultValue=""
                  className="rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                >
                  <option value="" disabled>
                    {content.subjectPlaceholder}
                  </option>

                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-surface-foreground">
                  Správa
                </span>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={content.messagePlaceholder}
                  className="resize-none rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-button bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading"
                  ? "Odosielam..."
                  : content.submitLabel}

                <Send className="h-5 w-5" aria-hidden="true" />
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="text-sm text-green-500">
                    Správa bola úspešne odoslaná.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Správu sa nepodarilo odoslať. Skúste to znova.
                  </p>
                )}
              </div>
            </div>
          </form>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}