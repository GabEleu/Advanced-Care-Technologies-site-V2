"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/site/Container";

/* ─── SVG animations ─────────────────────────────────────────────── */

function InnovationSVG() {
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
      <g>
        <rect x="52" y="36" width="16" height="48" rx="3" fill="hsl(var(--accent))" />
        <rect x="36" y="52" width="48" height="16" rx="3" fill="hsl(var(--accent))" />
      </g>
    </svg>
  );
}

const SOBRIETY_ELEMENTS = [
  { cx: 20, cy: 20, r: 8 },
  { cx: 92, cy: 25, r: 6 },
  { cx: 102, cy: 87, r: 10 },
  { cx: 15, cy: 92, r: 7 },
  { cx: 78, cy: 55, r: 9 },
  { cx: 40, cy: 50, r: 5 },
];

function SobrietySVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
      {SOBRIETY_ELEMENTS.map((el, i) => (
        <motion.circle
          key={i}
          cx={el.cx} cy={el.cy} r={el.r}
          fill="hsl(var(--primary))"
          animate={{ opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}
      <motion.circle
        cx="60" cy="60" r="15"
        fill="hsl(var(--accent)/0.25)"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        animate={{ r: [13, 18, 13] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
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

function HumanSVG() {
  return (
    <svg viewBox="0 0 120 140" fill="none" className="h-full w-full">
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
    </svg>
  );
}

const SVGS = [InnovationSVG, SobrietySVG, SensationSVG, HumanSVG];
const EYEBROWS = ["Innovation", "Sobriété", "Sensation", "Humanité"];

/* ─── Main component ─────────────────────────────────────────────── */

type PrincipleData = { title: string; desc: string };

type Props = {
  eyebrow: string;
  title: string;
  principles: ReadonlyArray<PrincipleData>;
};

export function HomePrinciplesScrollytelling({ eyebrow, title, principles }: Props) {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => {
            const SVGComponent = SVGS[i];
            return (
              <motion.div
                key={p.title}
                className="flex flex-col rounded-3xl border bg-card p-7 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="mb-5 size-20 text-foreground">
                  {SVGComponent && <SVGComponent />}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-accent">
                  {EYEBROWS[i]}
                </div>
                <h3 className="mt-2 text-lg font-extrabold leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
