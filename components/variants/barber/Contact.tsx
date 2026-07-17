"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { company } from "@/content/company";
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
    <section id="kontakt" className="bg-background py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Kontakt"
            title="Rezervujte si svoj termín."
            description="Zavolajte nám alebo nám napíšte. Radi vám pomôžeme nájsť najbližší voľný termín."
          />
        </FadeIn>

        <Stagger
          staggerChildren={0.08}
          className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <StaggerItem
            duration={0.45}
            y={18}
            className="rounded-card border border-border bg-surface p-7"
          >
            <div className="space-y-6">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-4">
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
                            item.external
                              ? "noopener noreferrer"
                              : undefined
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
          </StaggerItem>

          <StaggerItem
            duration={0.45}
            y={18}
            className="overflow-hidden rounded-card border border-border bg-surface p-3"
          >
            <iframe
              src={company.mapUrl}
              title={`${company.name} mapa`}
              className="h-[28rem] w-full rounded-[1.5rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}