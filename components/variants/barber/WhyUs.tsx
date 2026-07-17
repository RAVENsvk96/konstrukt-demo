"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { whyUs } from "@/content/whyUs";

export default function WhyUsBarber() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading badge={whyUs.badge} title={whyUs.title} />
        </FadeIn>

        <Stagger
          staggerChildren={0.06}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {whyUs.items.map((item, index) => (
            <StaggerItem
              key={item.title}
              duration={0.45}
              y={18}
              className="rounded-[1.5rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-surface-foreground">
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