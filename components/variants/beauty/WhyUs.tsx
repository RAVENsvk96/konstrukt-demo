"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { whyUs } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import { Flower2, Heart, Sparkles } from "lucide-react";

const icons = [Heart, Sparkles, Flower2];

export default function BeautyWhyUs() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24">
      <div className="absolute right-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            badge={whyUs.badge}
            title={whyUs.title}
            description="Každú návštevu tvoríme tak, aby ste sa cítili príjemne od prvého momentu až po výsledok."
            centered
          />

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {whyUs.items.map((item, index) => {
              const Icon = icons[index] ?? Sparkles;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted">
                    {item.description}
                  </p>

                  <div className="mx-auto mt-8 h-px w-12 bg-primary/30" />
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}