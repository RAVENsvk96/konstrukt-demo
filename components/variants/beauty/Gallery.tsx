"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { gallery } from "@/content/variants/beauty";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BeautyGallery() {
  const [featuredImage, ...secondaryImages] = gallery;

  if (!featuredImage) {
    return null;
  }

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-background px-6 py-24"
    >
      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            badge="Galéria"
            title="Priestor pre krásu a oddych."
            description="Nahliadnite do prostredia Bloom Beauty Studio a objavte atmosféru, v ktorej sa profesionálna starostlivosť spája s pokojom."
            centered
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              className="group overflow-hidden rounded-[2.5rem] border border-border bg-surface p-2 shadow-lg shadow-primary/5"
            >
              <div className="relative h-full overflow-hidden rounded-[2rem]">
                <Image
                  src={featuredImage.image}
                  alt={featuredImage.alt}
                  width={1000}
                  height={1300}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
                  className="h-[32rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:h-[38rem] lg:h-full lg:min-h-[48rem]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70" />
              </div>
            </motion.div>

            <div className="grid gap-6">
              {secondaryImages.map((item, index) => (
                <motion.div
                  key={item.image}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-[2rem] border border-border bg-surface p-2 shadow-lg shadow-primary/5"
                >
                  <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={900}
                      height={700}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 42vw"
                      className="h-[22rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] lg:h-full lg:min-h-[23rem]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}