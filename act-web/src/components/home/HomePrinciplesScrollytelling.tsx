"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { Container } from "@/components/site/Container";

/* ─── Individual SVG animations ─────────────────────────────────── */

function InnovationSVG({ progress }: { progress: MotionValue<number> }) {
  const crossOpacity = useTransform(progress, [0.4, 0.9], [0, 1]);
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
      {[48, 34, 20].map((r, i) => (
        <motion.circle
          key={r}
          cx="60" cy="60" r={r}
          stroke="currentColor"
          strokeOpacity={0.12 + i * 0.1}
          strokeWidth="1"
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 12 - i * 3, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px 60px" }}
        />
      ))}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <motion.circle
            key={i}
            cx={60 + 34 * Math.cos(rad)}
            cy={60 + 34 * Math.sin(rad)}
            r="3"
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        );
      })}
      {/* Medical cross — appears as scroll progresses */}
      <motion.g style={{ opacity: crossOpacity }}>
        <rect x="52" y="36" width="16" height="48" rx="3" fill="hsl(var(--accent))" />
        <rect x="36" y="52" width="48" height="16" rx="3" fill="hsl(var(--accent))" />
      </motion.g>
    </svg>
  );
}

const SOBRIETY_ELEMENTS = [
  { cx: 20, cy: 20, r: 8, threshold: 0.15 },
  { cx: 92, cy: 25, r: 6, threshold: 0.30 },
  { cx: 102, cy: 87, r: 10, threshold: 0.45 },
  { cx: 15, cy: 92, r: 7, threshold: 0.60 },
  { cx: 78, cy: 55, r: 9, threshold: 0.75 },
  { cx: 40, cy: 50, r: 5, threshold: 0.90 },
];

function SobrietyDot({
  cx, cy, r, threshold, progress,
}: { cx: number; cy: number; r: number; threshold: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [threshold * 0.75, threshold], [0.6, 0]);
  const scale = useTransform(progress, [threshold * 0.75, threshold], [1, 0]);
  return (
    <motion.circle cx={cx} cy={cy} r={r} fill="hsl(var(--primary))" style={{ opacity, scale, transformOrigin: `${cx}px ${cy}px` }} />
  );
}

function SobrietySVG({ progress }: { progress: MotionValue<number> }) {
  const coreR = useTransform(progress, [0, 1], [10, 20]);
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
      {SOBRIETY_ELEMENTS.map((el) => (
        <SobrietyDot key={el.threshold} {...el} progress={progress} />
      ))}
      <motion.circle cx="60" cy="60" r={coreR} fill="hsl(var(--accent)/0.25)" stroke="hsl(var(--accent))" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="4" fill="hsl(var(--primary))" />
    </svg>
  );
}

function SensationSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx="60" cy="60" r="10"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="none"
          animate={{ r: [10, 56], opacity: [0.9, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
        />
      ))}
      <circle cx="60" cy="60" r="7" fill="hsl(var(--accent))" />
      <circle cx="60" cy="60" r="3" fill="hsl(var(--primary))" />
    </svg>
  );
}

function HumanSVG({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.45], [0, 1]);
  return (
    <motion.svg viewBox="0 0 120 140" fill="none" className="h-full w-full" style={{ opacity }}>
      <circle cx="60" cy="28" r="16" fill="hsl(var(--primary)/0.12)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <path
        d="M36 70 C36 50 84 50 84 70 L84 100 C84 110 36 110 36 100 Z"
        fill="hsl(var(--primary)/0.06)"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
      />
      <path d="M36 72 L16 88" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M84 72 L104 88" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="90" r="5" fill="hsl(var(--accent)/0.5)" stroke="hsl(var(--accent))" strokeWidth="1" />
      <circle cx="106" cy="90" r="5" fill="hsl(var(--accent)/0.5)" stroke="hsl(var(--accent))" strokeWidth="1" />
      <motion.path
        d="M55 82 C55 78 48 74 48 80 C48 86 55 91 60 95 C65 91 72 86 72 80 C72 74 65 78 65 82 C63 79 57 79 55 82Z"
        fill="hsl(var(--accent))"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 84px" }}
      />
    </motion.svg>
  );
}

/* ─── Single beat (one principle) ───────────────────────────────── */

const PRINCIPLE_EYEBROWS = ["Innovation", "Sobriété", "Sensation", "Humanité"];

type PrincipleData = { title: string; desc: string };

function PrincipleBeat({
  data,
  index,
  n,
  sectionProgress,
}: {
  data: PrincipleData;
  index: number;
  n: number;
  sectionProgress: MotionValue<number>;
}) {
  const beatSize = 1 / n;
  const start = index * beatSize;
  const end = start + beatSize;

  const beatOpacity = useTransform(
    sectionProgress,
    [Math.max(0, start - 0.03), start + 0.06, end - 0.06, Math.min(1, end + 0.03)],
    [0, 1, 1, 0],
  );

  const beatProgress = useTransform(sectionProgress, [start, end], [0, 1]);

  const eyebrow = PRINCIPLE_EYEBROWS[index] ?? `Principe ${index + 1}`;

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 md:flex-row md:gap-16 md:px-12"
      style={{ opacity: beatOpacity }}
    >
      {/* SVG */}
      <div className="size-40 shrink-0 text-foreground md:size-52">
        {index === 0 && <InnovationSVG progress={beatProgress} />}
        {index === 1 && <SobrietySVG progress={beatProgress} />}
        {index === 2 && <SensationSVG />}
        {index === 3 && <HumanSVG progress={beatProgress} />}
      </div>

      {/* Text */}
      <div className="max-w-md text-center md:text-left">
        <div className="text-xs font-extrabold uppercase tracking-widest text-accent">
          {eyebrow}
        </div>
        <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
          {data.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {data.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Progress dot (reads scroll value directly) ─────────────────── */

function ProgressDot({
  index,
  n,
  sectionProgress,
}: {
  index: number;
  n: number;
  sectionProgress: MotionValue<number>;
}) {
  const beatSize = 1 / n;
  const start = index * beatSize;
  const end = start + beatSize;
  const isActive = useTransform(sectionProgress, [start, end], [1, 1]);
  const dotBg = useTransform(
    sectionProgress,
    [Math.max(0, start - 0.01), start + 0.01, end - 0.01, Math.min(1, end)],
    [
      "hsl(var(--foreground)/0.15)",
      "hsl(var(--accent))",
      "hsl(var(--accent))",
      "hsl(var(--foreground)/0.15)",
    ],
  );
  return (
    <motion.div
      key={index}
      className="size-2 rounded-full border border-foreground/20"
      style={{ backgroundColor: dotBg }}
    />
  );
}

/* ─── Main component ─────────────────────────────────────────────── */

type Props = {
  eyebrow: string;
  title: string;
  principles: ReadonlyArray<PrincipleData>;
};

export function HomePrinciplesScrollytelling({ eyebrow, title, principles }: Props) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const n = principles.length;

  /* Fallback for reduced motion */
  if (reduced) {
    return (
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-3xl border bg-card p-7 shadow-sm">
                <div className="text-sm font-extrabold">{p.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${100 + (n - 1) * 80}vh` }}
    >
      {/* Non-sticky header */}
      <div className="py-16 md:py-20">
        <Container>
          <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
        </Container>
      </div>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-secondary" />

        {/* Progress indicator */}
        <div className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2">
          {principles.map((_, i) => (
            <ProgressDot key={i} index={i} n={n} sectionProgress={scrollYProgress} />
          ))}
        </div>

        {/* Beat layers */}
        <div className="relative h-full">
          {principles.map((p, i) => (
            <PrincipleBeat
              key={p.title}
              data={p}
              index={i}
              n={n}
              sectionProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
