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
  const y = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1.04]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [0.2, 0.35, 0.3, 0.14]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["2px", "8px", "3px"]);
  const ghostX = useTransform(scrollYProgress, [0, 1], [130, -170]);
  const ghostY = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const ghostScale = useTransform(scrollYProgress, [0, 1], [1.24, 1.07]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.2]);

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
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="sticky top-0 h-svh">
        <div className="absolute inset-0 [background:radial-gradient(50%_45%_at_78%_38%,hsl(var(--accent)/0.14),transparent_65%),radial-gradient(45%_35%_at_82%_70%,hsl(var(--brand-purple)/0.12),transparent_70%)]" />

        <motion.div
          style={modelStyle}
          className="absolute -right-[24vw] top-[4vh] h-[90vh] w-[90vh] min-w-[520px] max-w-[1080px]"
        >
          {createElement("model-viewer", {
            src,
            alt,
            "camera-controls": false,
            "interaction-prompt": "none",
            "auto-rotate": !reducedMotion,
            "auto-rotate-delay": 0,
            "rotation-per-second": "16deg",
            "camera-orbit": cameraOrbit,
            "camera-target": cameraTarget,
            "field-of-view": reducedMotion ? "36deg" : "28deg",
            exposure: "1",
            "shadow-intensity": "0",
            "environment-image": "neutral",
            style: {
              width: "100%",
              height: "100%",
              background: "transparent",
            },
          })}
        </motion.div>

        {!reducedMotion ? (
          <motion.div
            style={{
              x: ghostX,
              y: ghostY,
              scale: ghostScale,
              opacity: ghostOpacity,
              filter: blur,
            }}
            className="absolute -right-[28vw] top-[2vh] h-[90vh] w-[90vh] min-w-[520px] max-w-[1080px]"
          >
            {createElement("model-viewer", {
              src,
              alt: "",
              "camera-controls": false,
              "interaction-prompt": "none",
              "auto-rotate": true,
              "auto-rotate-delay": 0,
              "rotation-per-second": "26deg",
              "camera-orbit": "76deg 74deg 2.4m",
              "field-of-view": "22deg",
              exposure: "1.1",
              "shadow-intensity": "0",
              "environment-image": "neutral",
              style: {
                width: "100%",
                height: "100%",
                background: "transparent",
              },
            })}
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

