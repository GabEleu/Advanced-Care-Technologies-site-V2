"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import type { ProductImage } from "@/data/products";
import { cn } from "@/lib/cn";

export function ImageCarousel({
  images,
  label = "Galerie visuelle produit",
}: {
  images: ProductImage[];
  label?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const visible = isDesktop ? 2 : 1;
  const maxIndex = Math.max(0, images.length - visible);

  const displayed = useMemo(
    () => images.slice(current, current + visible),
    [current, images, visible],
  );

  const goTo = (index: number) => {
    setCurrent(Math.min(maxIndex, Math.max(0, index)));
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const onTouchEnd = (endX: number) => {
    if (touchStartX === null) return;
    const delta = endX - touchStartX;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) next();
    else prev();
    setTouchStartX(null);
  };

  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="rounded-3xl border bg-card p-4 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          next();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          prev();
        }
      }}
      onTouchStart={(e) => setTouchStartX(e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => onTouchEnd(e.changedTouches[0]?.clientX ?? 0)}
    >
      <motion.div
        key={`${current}-${visible}`}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn("grid gap-4", visible === 2 ? "md:grid-cols-2" : "grid-cols-1")}
        aria-live="polite"
      >
        {displayed.map((img) => (
          <a
            key={img.src}
            href={img.src}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border bg-background p-3 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 45vw, 92vw"
              />
            </div>
            <div className="mt-3 text-sm font-bold text-foreground/80">{img.alt}</div>
          </a>
        ))}
      </motion.div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                idx === current ? "bg-foreground" : "bg-muted-foreground/40",
              )}
              aria-label={`Aller à la vue ${idx + 1}`}
              aria-current={idx === current ? "true" : undefined}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="inline-flex h-9 items-center rounded-full border px-3 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Image précédente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            disabled={current >= maxIndex}
            className="inline-flex h-9 items-center rounded-full border px-3 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Image suivante"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

