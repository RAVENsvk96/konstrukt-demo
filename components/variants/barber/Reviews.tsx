"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { reviews } from "@/content/review";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewsBarber() {
  return (
    <section id="recenzie" className="bg-[#F7F5F2] px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Recenzie"
          title="Klienti sa vracajú pre detail."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex h-full flex-col rounded-[1.5rem] border border-[#E6DED2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#A7865A]/40 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex gap-1 text-[#A7865A]">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#A7865A]" />
                ))}
              </div>

              <p className="mt-6 flex-1 text-base leading-8 text-[#111111]">
                “{review.text}”
              </p>

              <p className="mt-8 text-sm font-semibold text-[#666666]">
                {review.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}