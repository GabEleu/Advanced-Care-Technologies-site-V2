"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
  y = 14,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

