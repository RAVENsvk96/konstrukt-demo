"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10"
          >
            <h3 className="text-5xl font-bold tracking-tight text-orange-500">
              <CountUp
                end={stat.number}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              />
              {stat.suffix}
            </h3>

            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-zinc-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}