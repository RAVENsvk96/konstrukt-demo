"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { reviews } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function BeautyReviews() {
  return (
    <section id="recenzie" className="bg-surface/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            badge="Recenzie"
            title="Slová našich klientiek."
            description="Najväčšou odmenou je pre nás spokojnosť, dôvera a pocit, s ktorým od nás klientky odchádzajú."
            centered
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10"
              >
                <Quote
                  className="absolute right-7 top-7 h-9 w-9 text-primary/10"
                  aria-hidden="true"
                />

                <div
                  className="flex gap-1 text-primary"
                  aria-label={`${review.rating} z 5 hviezdičiek`}
                >
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-[1.1rem] w-[1.1rem] fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-7 flex-1 text-[1.05rem] leading-8 text-muted">
                  „{review.text}“
                </blockquote>

                <div className="mt-8 border-t border-border pt-5">
                  <p className="text-base font-semibold text-foreground">
                    {review.name}
                  </p>

                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                    Overená klientka
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}