"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  y?: number;
};

export default function StaggerItem({
  children,
  className = "",
  duration = 0.45,
  y = 22,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}