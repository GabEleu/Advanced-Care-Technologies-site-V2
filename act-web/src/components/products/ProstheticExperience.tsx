"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

const FRAME_COUNT = 280;

function frameSrc(n: number) {
  return `/sequence/prosthesis_${String(n).padStart(3, "0")}.jpg`;
}

const BEATS = [
  {
    range: [0, 0.2] as [number, number],
    label: "01 / 04",
    title: "SENSORY REBIRTH",
    subtitle: "Bridging the gap between prosthesis and perception.",
  },
  {
    range: [0.25, 0.5] as [number, number],
    label: "02 / 04",
    title: "NERVOUS SYSTEM 2.0",
    subtitle: "High-precision PCBs mapped to human intent.",
  },
  {
    range: [0.55, 0.8] as [number, number],
    label: "03 / 04",
    title: "TACTILE PRECISION",
    subtitle: "Micro-actuators delivering real-time sensory data.",
  },
  {
    range: [0.85, 1.0] as [number, number],
    label: "04 / 04",
    title: "BEYOND THE LIMB",
    subtitle: "Integrated wearable tech for seamless control.",
  },
] as const;

export function ProstheticExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  const [loadedCount, setLoadedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const isLoaded = loadedCount >= FRAME_COUNT;
  const loadPct = Math.round((loadedCount / FRAME_COUNT) * 100);

  // ── draw one frame to canvas (cover-fit) ──────────────────────────────
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img?.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const canvasAspect = cw / ch;
    const imgAspect = iw / ih;

    let sx = 0, sy = 0, sw = iw, sh = ih;
    if (canvasAspect > imgAspect) {
      sh = iw / canvasAspect;
      sy = (ih - sh) / 2;
    } else {
      sw = ih * canvasAspect;
      sx = (iw - sw) / 2;
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  // ── preload all frames ────────────────────────────────────────────────
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let count = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      const onEvent = () => {
        count++;
        // update UI every 10 frames to avoid 280 re-renders
        if (count % 10 === 0 || count === FRAME_COUNT) {
          setLoadedCount(count);
        }
        // draw first frame as soon as it's ready
        if (count === 1) drawFrame(0);
      };
      img.onload = onEvent;
      img.onerror = onEvent;
      img.src = frameSrc(i + 1);
      images[i] = img;
    }
    imagesRef.current = images;

    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [drawFrame]);

  // ── canvas resize to viewport ─────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(frameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  // ── scroll → target frame ─────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = container.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      targetFrameRef.current = Math.round(p * (FRAME_COUNT - 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── RAF loop: spring interpolation between frames ─────────────────────
  useEffect(() => {
    const animate = () => {
      const target = targetFrameRef.current;
      const current = frameRef.current;
      const diff = target - current;

      if (Math.abs(diff) >= 0.5) {
        const next = Math.round(current + diff * 0.14);
        if (next !== current) {
          frameRef.current = next;
          drawFrame(next);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [drawFrame]);

  const activeBeat = BEATS.findIndex(
    (b) => progress >= b.range[0] && progress <= b.range[1],
  );

  return (
    <div ref={containerRef} style={{ height: "500vh" }} className="relative">
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#050505]">

        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Loading bar */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <div className="h-px w-56 overflow-hidden bg-white/10">
              <div
                className="h-full bg-white/60 transition-all duration-200"
                style={{ width: `${loadPct}%` }}
              />
            </div>
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/30">
              {loadPct} %
            </span>
          </div>
        )}

        {/* Text beats — bottom-left */}
        {BEATS.map((beat, i) => (
          <div
            key={beat.label}
            className={cn(
              "pointer-events-none absolute inset-0 flex items-end pb-16 pl-10 pr-10 transition-all duration-700 md:pl-20",
              activeBeat === i
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0",
            )}
          >
            <div className="max-w-xl">
              <p className="mb-4 text-[10px] font-bold tracking-[0.4em] text-white/35 uppercase">
                {beat.label}
              </p>
              <h2
                className="mb-3 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {beat.title}
              </h2>
              <p className="text-sm leading-relaxed text-white/55 md:text-base">
                {beat.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Vertical beat dots — right */}
        <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 md:right-10">
          {BEATS.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-px rounded-full bg-white transition-all duration-500",
                activeBeat === i ? "h-8 opacity-100" : "h-2 opacity-20",
              )}
            />
          ))}
        </div>

        {/* Scroll cue */}
        {progress < 0.03 && (
          <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
            <span className="text-[9px] font-bold tracking-[0.4em] text-white/25 uppercase">
              Scroll
            </span>
            <div className="h-4 w-px bg-white/20" />
          </div>
        )}
      </div>
    </div>
  );
}
