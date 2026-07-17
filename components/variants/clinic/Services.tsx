"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { services } from "@/content/services";
import { icons } from "@/lib/icons";

export default function ServicesClinic() {
  return (
    <section id="sluzby" className="bg-background py-20">
      <Container>
        <FadeIn y={32} duration={0.6}>
          <SectionHeading
            badge="Služby"
            title="Komplexná starostlivosť na jednom mieste"
            description="Od preventívnych prehliadok až po estetické a špecializované ošetrenia. Každú službu navrhujeme s dôrazom na komfort, dôveru a dlhodobé zdravie."
          />
        </FadeIn>

        <Stagger
          staggerChildren={0.06}
          className="mt-12 grid gap-x-12 gap-y-2 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <StaggerItem
                key={service.title}
                duration={0.45}
                y={24}
                className="group border-b border-border py-7"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {service.description}
                    </p>

                    <a
                      href={service.href ?? "#kontakt"}
                      className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                    >
                      Objednať konzultáciu
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}