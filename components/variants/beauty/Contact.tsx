"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import { company } from "@/content/company";
import { contact } from "@/content/variants/beauty";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

export default function BeautyContact() {
  const phoneHref = `tel:${company.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${company.email}`;

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address
  )}`;

  const contactItems = [
    {
      icon: Phone,
      label: contact.phoneLabel,
      value: company.phone,
      href: phoneHref,
    },
    {
      icon: Mail,
      label: contact.emailLabel,
      value: company.email,
      href: emailHref,
    },
    {
      icon: MapPin,
      label: contact.addressLabel,
      value: company.address,
      href: mapsLink,
      external: true,
    },
    {
      icon: Clock,
      label: contact.openingHoursLabel,
      value: company.openingHours,
    },
  ];

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-surface/50 py-24"
    >
      <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <FadeIn amount={0.2}>
          <SectionHeading
            badge={contact.badge}
            title={contact.title}
            description={contact.description}
            centered
          />

          <div className="mt-16 grid overflow-hidden rounded-[2.5rem] border border-border bg-surface shadow-xl shadow-primary/5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-foreground">
                  {company.name}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-muted">
                  Doprajte si chvíľu pre seba. Zavolajte nám alebo napíšte a
                  spoločne vyberieme službu aj termín, ktorý vám bude
                  vyhovovať.
                </p>
              </div>

              <div className="mt-12 space-y-7">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                            className="mt-1 inline-block font-semibold text-foreground transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-semibold text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button href={phoneHref} className="gap-2">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Zavolať
                </Button>

                <Button href={emailHref} variant="secondary" className="gap-2">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Napísať email
                </Button>
              </div>
            </div>

            <div className="min-h-[30rem] border-t border-border lg:border-l lg:border-t-0">
              <iframe
                src={company.mapUrl}
                title={`${company.name} – mapa`}
                className="h-full min-h-[30rem] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-7 text-center">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {contact.mapLinkLabel}
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}