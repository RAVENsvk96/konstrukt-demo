"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { whyUs } from "@/content/whyUs";
import { CheckCircle2 } from "lucide-react";

export default function WhyUsClinic() {
  return (
    <section className="bg-background py-20">
      <Container>
        <FadeIn y={32} duration={0.6}>
          <SectionHeading
            badge={whyUs.badge}
            title={whyUs.title}
          />
        </FadeIn>

        <Stagger
          staggerChildren={0.08}
          className="mt-14 grid gap-10 md:grid-cols-3"
        >
          {whyUs.items.map((item) => (
            <StaggerItem
              key={item.title}
              duration={0.45}
              y={24}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2
                  className="h-8 w-8"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}