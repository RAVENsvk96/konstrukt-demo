"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { reviews } from "@/content/review";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Recenzie"
          title="Čo hovoria naši zákazníci"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="flex gap-1 text-orange-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-500 drop-shadow-sm"
                  />
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-6 text-zinc-300">
                “{review.text}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white shadow-lg shadow-orange-500/10 ring-2 ring-orange-500/20">
                  {review.name.charAt(0)}
                </div>

                <p className="font-semibold">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}