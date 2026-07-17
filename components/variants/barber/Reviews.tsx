"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { reviews } from "@/content/review";
import { Star } from "lucide-react";

export default function ReviewsBarber() {
  return (
    <section id="recenzie" className="bg-background py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Recenzie"
            title="Klienti sa vracajú pre detail."
          />
        </FadeIn>

        <Stagger
          staggerChildren={0.06}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {reviews.map((review) => (
            <StaggerItem
              key={review.name}
              duration={0.45}
              y={18}
              className="flex h-full flex-col rounded-[1.5rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-6 flex-1 text-base leading-8 text-surface-foreground">
                “{review.text}”
              </p>

              <p className="mt-8 text-sm font-semibold text-muted">
                {review.name}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}