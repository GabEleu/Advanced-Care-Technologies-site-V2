"use client";

import { createElement, useEffect, useMemo, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function Product3DBackdrop({
  src,
  alt = "Visualisation 3D du dispositif",
}: {
  src: string;
  alt?: string;
}) {
  const reducedMotion = useReducedMotion();
  const [cameraOrbit, setCameraOrbit] = useState("32deg 78deg 2.15m");
  const [cameraTarget, setCameraTarget] = useState("0m 0m 0m");

  useEffect(() => {
    void import("@google/model-viewer");
  }, []);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reducedMotion) return;
    const theta = 20 + v * 280;
    const phi = 74 - v * 8;
    const radius = 2.25 - v * 0.95;
    const targetY = (v - 0.5) * 0.2;
    setCameraOrbit(`${theta.toFixed(1)}deg ${phi.toFixed(1)}deg ${radius.toFixed(2)}m`);
    setCameraTarget(`0m ${targetY.toFixed(2)}m 0m`);
  });

  const x = useTransform(scrollYProgress, [0, 1], [90, -120]);
  const y = useTransform(scrollYProgress, [0, 1], [64, -56]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.55, 0.78, 0.72, 0.58]);

  const modelStyle = useMemo(
    () =>
      reducedMotion
        ? {}
        : {
            x,
            y,
            scale,
            opacity,
          },
    [opacity, reducedMotion, scale, x, y],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="h-svh">
        <div className="absolute inset-0 [background:radial-gradient(50%_45%_at_78%_38%,hsl(var(--accent)/0.14),transparent_65%),radial-gradient(45%_35%_at_82%_70%,hsl(var(--brand-purple)/0.12),transparent_70%)]" />

        <motion.div
          style={modelStyle}
          className="absolute right-[-8vw] top-[6vh] h-[84vh] w-[84vh] min-w-[460px] max-w-[980px]"
        >
          {createElement("model-viewer", {
            src,
            alt,
            "camera-controls": false,
            "interaction-prompt": "none",
            "auto-rotate": false,
            "camera-orbit": cameraOrbit,
            "camera-target": cameraTarget,
            "field-of-view": reducedMotion ? "36deg" : "28deg",
            exposure: "1",
            "shadow-intensity": "0",
            "environment-image": "neutral",
            style: {
              display: "block",
              width: "100%",
              height: "100%",
              background: "transparent",
            },
          })}
        </motion.div>
      </div>
    </div>
  );
}

