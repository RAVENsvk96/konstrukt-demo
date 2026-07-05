"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Galéria"
          title="Každý detail má svoj význam."
          description="Moderný priestor, precízna práca a pokojná atmosféra tvoria zážitok z každej návštevy."
        />

        <div className="mt-14 space-y-6">
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gallery-1.jpg"
              alt="Interiér barber štúdia"
              width={1600}
              height={900}
              className="h-[34rem] w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/gallery-2.jpg"
                alt="Strih vlasov"
                width={800}
                height={1000}
                className="h-[26rem] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/images/gallery-3.jpg"
                alt="Úprava brady"
                width={800}
                height={1000}
                className="h-[26rem] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}