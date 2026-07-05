"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { whyUs } from "@/content/whyUs";
import { motion } from "framer-motion";

export default function WhyUsBarber() {
  return (
    <section className="bg-[#F7F5F2] px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading badge={whyUs.badge} title={whyUs.title} />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {whyUs.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-[#E6DED2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#A7865A]/40 hover:shadow-xl hover:shadow-black/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A7865A]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#111111]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-[#666666]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}