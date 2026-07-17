"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { services } from "@/content/services";
import { icons } from "@/lib/icons";

export default function Services() {
  return (
    <section id="sluzby" className="bg-background py-20">
      <Container>
        <FadeIn y={30} duration={0.6}>
          <SectionHeading badge="Služby" title="Naše služby" />
        </FadeIn>

        <Stagger
          staggerChildren={0.1}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <StaggerItem
                key={service.title}
                duration={0.5}
                y={30}
                className="h-full"
              >
                <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                    {service.description}
                  </p>

                  {service.price && (
                    <p className="mt-6 font-semibold text-primary">
                      {service.price}
                    </p>
                  )}

                  <Button href="#kontakt" className="mt-6 w-full px-4 py-2">
                    Objednať
                  </Button>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}