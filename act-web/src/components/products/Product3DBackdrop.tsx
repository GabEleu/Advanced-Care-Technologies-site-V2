"use client";

import { createElement, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Container } from "@/components/site/Container";

export function Product3DBackdrop({
  src,
  alt = "Visualisation 3D du dispositif",
}: {
  src: string;
  alt?: string;
}) {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [cameraOrbit, setCameraOrbit] = useState("35deg 72deg 1.65m");

  useEffect(() => {
    void import("@google/model-viewer");
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reducedMotion) return;
    const theta = 35 + v * 190; // rotation autour de l'objet
    const radius = 1.75 - v * 0.55; // zoom progressif
    setCameraOrbit(`${theta.toFixed(1)}deg 72deg ${radius.toFixed(2)}m`);
  });

  const x = useTransform(scrollYProgress, [0, 1], [-26, 32]);
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);

  const modelStyle = useMemo(
    () =>
      reducedMotion
        ? {}
        : {
            x,
            y,
            scale,
          },
    [reducedMotion, scale, x, y],
  );

  return (
    <section
      ref={sectionRef}
      className="pointer-events-none relative overflow-hidden border-y bg-secondary/70 py-20 md:py-28"
      aria-label="Fond animé 3D"
    >
      <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_60%_at_80%_30%,hsl(var(--accent)/0.25),transparent_60%),radial-gradient(50%_50%_at_20%_70%,hsl(var(--brand-purple)/0.18),transparent_60%)]" />
      <Container className="relative">
        <div className="max-w-xl space-y-4">
          <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            Visualisation 3D
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Modèle du brassard intégré dans la page
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Le modèle tourne en continu et la caméra évolue au scroll pour créer un effet immersif
            sans impacter la lisibilité du contenu.
          </p>
        </div>

        <motion.div
          style={modelStyle}
          className="mx-auto mt-8 h-[320px] w-full max-w-5xl rounded-3xl border bg-card/60 p-2 shadow-sm backdrop-blur md:h-[520px]"
        >
          {createElement("model-viewer", {
            src,
            alt,
            "camera-controls": false,
            "disable-pan": true,
            "disable-tap": true,
            "interaction-prompt": "none",
            "auto-rotate": !reducedMotion,
            "auto-rotate-delay": 0,
            "rotation-per-second": "22deg",
            "camera-orbit": cameraOrbit,
            exposure: "1",
            "shadow-intensity": "0.85",
            "environment-image": "neutral",
            style: {
              width: "100%",
              height: "100%",
              background: "transparent",
            },
          })}
        </motion.div>
      </Container>
    </section>
  );
}

