"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

export function ProfileCard({
  title,
  description,
  href,
  discoverLabel,
  imageSrc,
}: {
  title: string;
  description: string;
  href: string;
  discoverLabel: string;
  imageSrc?: string;
}) {
  return (
    <motion.div
      className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border shadow-sm"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Background image */}
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 flex h-full flex-col p-7 ${imageSrc ? "text-white" : "bg-card"}`}>
        <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
        <div className="flex-1" />
        <p className={`mb-4 text-sm leading-relaxed ${imageSrc ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
        <div>
          <ButtonLink
            href={href}
            variant={imageSrc ? "primary" : "ghost"}
            size="sm"
          >
            {discoverLabel} →
          </ButtonLink>
        </div>
      </div>
    </motion.div>
  );
}
