"use client";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { reviews } from "@/content/review";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <Section>
      <FadeIn y={40} duration={0.6}>
        <SectionHeading
          badge="Recenzie"
          title="Čo hovoria naši zákazníci"
        />
      </FadeIn>

      <Stagger
        staggerChildren={0.15}
        className="mt-10 grid gap-6 md:grid-cols-3"
      >
        {reviews.map((review) => (
          <StaggerItem
            key={review.name}
            duration={0.5}
            y={25}
            className="flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="flex gap-1 text-primary">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-current drop-shadow-sm"
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="mt-5 flex-1 text-sm leading-6 text-muted">
              “{review.text}”
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/10 ring-2 ring-primary/20">
                {review.name.charAt(0)}
              </div>

              <p className="font-semibold text-foreground">
                {review.name}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}