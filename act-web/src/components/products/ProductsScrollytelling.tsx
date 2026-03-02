"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { productTranslationsEn } from "@/lib/i18n/translations";
import { products } from "@/data/products";
import { productPath } from "@/lib/productPaths";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/* ════════════════════════════════════════════════════════════════
   CANVAS SEQUENCE — canvas + RAF spring, same technique as product pages
════════════════════════════════════════════════════════════════ */

/**
 * Renders a product frame sequence on a <canvas> using the same
 * canvas + cover-fit + RAF spring approach as DigiSkinScrollytelling
 * and DigiFeetScrollytelling. Progress (0→1) maps to frames.
 */
function CanvasSequence({
  dir,
  progress,
  frameCount = 80,
  className,
  label,
}: {
  dir: "sequence" | "sequence-feet";
  progress: MotionValue<number>;
  frameCount?: number;
  className?: string;
  label: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafRef = useRef(0);
  const [loadPct, setLoadPct] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sparse sampling: spread frameCount frames over the full 240-frame sequence
  const step = 240 / frameCount;
  const getFrameSrc = useCallback(
    (i: number) => {
      const n = Math.min(240, Math.max(1, Math.round(1 + i * step)));
      const padded = String(n).padStart(3, "0");
      return dir === "sequence"
        ? `/sequence/prosthesis_${padded}.jpg`
        : `/sequence-feet/insole_${padded}.jpg`;
    },
    [dir, step],
  );

  // Cover-fit draw — identical to the product page implementation
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[Math.round(idx)];
    if (!canvas || !img?.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width: cw, height: ch } = canvas;
    const { naturalWidth: iw, naturalHeight: ih } = img;
    const canvasAspect = cw / ch;
    const imgAspect = iw / ih;
    let sx = 0, sy = 0, sw = iw, sh = ih;
    if (canvasAspect > imgAspect) { sh = iw / canvasAspect; sy = (ih - sh) / 2; }
    else { sw = ih * canvasAspect; sx = (iw - sw) / 2; }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const images = Array.from({ length: frameCount }, (_, i) => {
      const img = new window.Image();
      const onEvent = () => {
        loaded++;
        if (loaded % 8 === 0 || loaded === frameCount) setLoadPct(Math.round((loaded / frameCount) * 100));
        if (loaded === frameCount) setIsLoaded(true);
        if (loaded === 1) drawFrame(0);
      };
      img.onload = onEvent;
      img.onerror = onEvent;
      img.src = getFrameSrc(i);
      return img;
    });
    imagesRef.current = images;
    return () => { images.forEach((img) => { img.onload = null; img.onerror = null; }); };
  }, [drawFrame, getFrameSrc, frameCount]);

  // Canvas resize via ResizeObserver
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawFrame(frameRef.current);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [drawFrame]);

  // RAF spring loop — same spring constant (0.14) as product pages
  useEffect(() => {
    const animate = () => {
      const target = targetFrameRef.current;
      const current = frameRef.current;
      const diff = target - current;
      if (Math.abs(diff) >= 0.5) {
        const next = current + diff * 0.14;
        frameRef.current = next;
        drawFrame(Math.round(next));
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [drawFrame]);

  // Map scroll progress to target frame
  useMotionValueEvent(progress, "change", (v) => {
    targetFrameRef.current = Math.max(0, Math.min(frameCount - 1, v * (frameCount - 1)));
  });

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
          <div className="h-px w-24 overflow-hidden bg-foreground/10">
            <div
              className="h-full bg-foreground/40 transition-all duration-200"
              style={{ width: `${loadPct}%` }}
            />
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        aria-label={label}
        className={cn("h-full w-full", !isLoaded && "opacity-0")}
      />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   HERO DUAL PRODUCT VISUAL — fixed landscape images, no animation
════════════════════════════════════════════════════════════════ */

function HeroDualVisual() {
  return (
    <div className="relative flex h-full w-full flex-col gap-2 sm:flex-row">
      {/* Digi'Skin panel */}
      <motion.div
        className="relative flex-1 overflow-hidden rounded-2xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25 }}
      >
        <Image
          src="/sequence/prosthesis_090.jpg"
          alt="Digi'Skin — prothèse haptique"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 text-xs font-extrabold tracking-[0.2em] text-white/70">
          DIGI&apos;SKIN
        </div>
        <div className="absolute right-3 top-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            {[1, 2, 3].map((i) => (
              <motion.circle
                key={i}
                cx="16" cy="16" r={i * 4}
                stroke="hsl(var(--accent))"
                strokeWidth="0.8"
                fill="none"
                animate={{ opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
            <circle cx="16" cy="16" r="3" fill="hsl(var(--accent))" />
          </svg>
        </div>
      </motion.div>

      {/* Digi'Feet panel */}
      <motion.div
        className="relative flex-1 overflow-hidden rounded-2xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.38 }}
      >
        <Image
          src="/sequence-feet/insole_090.jpg"
          alt="Digi'Feet — semelle connectée"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 text-xs font-extrabold tracking-[0.2em] text-white/70">
          DIGI&apos;FEET
        </div>
      </motion.div>
    </div>
  );
}

/** Tech pipeline SVG: Capteurs → Traitement → IA */
function TechPipelineSVG() {
  const nodes = [
    { label: "Capteurs", sublabel: "Mesurer", x: 60 },
    { label: "Traitement", sublabel: "Structurer", x: 200 },
    { label: "IA & Indicateurs", sublabel: "Comprendre", x: 340 },
  ];
  return (
    <svg viewBox="0 0 400 160" fill="none" className="h-full w-full">
      {/* Connecting paths */}
      {[0, 1].map((i) => (
        <g key={i}>
          <line
            x1={nodes[i].x + 32} y1="80"
            x2={nodes[i + 1].x - 32} y2="80"
            stroke="hsl(var(--primary))" strokeOpacity="0.15" strokeWidth="1.5"
          />
          {[0, 1, 2].map((j) => (
            <motion.circle
              key={j}
              cy="80"
              r="3.5"
              fill="hsl(var(--accent))"
              animate={{
                cx: [nodes[i].x + 32, nodes[i + 1].x - 32],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.6 + j * 0.6,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <motion.circle
            cx={node.x} cy="80" r="30"
            fill="hsl(var(--primary)/0.08)"
            stroke="hsl(var(--primary))"
            strokeWidth="1.2"
            whileInView={{ scale: [0.85, 1] }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          />
          <motion.circle
            cx={node.x} cy="80" r="30"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            fill="none"
            strokeOpacity="0.4"
            animate={{ r: [30, 36, 30], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
          />
          <text x={node.x} y="76" textAnchor="middle" fill="currentColor" fontSize="7.5" fontWeight="bold" letterSpacing="0.5">{node.label}</text>
          <text x={node.x} y="88" textAnchor="middle" fill="currentColor" fillOpacity="0.4" fontSize="6.5">{node.sublabel}</text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════
   STICKY PRODUCT SECTION
════════════════════════════════════════════════════════════════ */

type ProductBeat = {
  slug: "digi-skin" | "digi-feet";
  badge: string;
  name: string;
  tagline: string;
  pitch: string;
  benefits: string[];
  illustrationLeft: boolean;
  href: string;
  seeLabel: string;
  demoLabel: string;
};

function StickyProductSection({ beat }: { beat: ProductBeat }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = scrollYProgress;

  const illustrationY = useTransform(progress, [0, 1], [20, -20]);
  const illustrationOpacity = useTransform(progress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);

  const isLeft = beat.illustrationLeft;

  return (
    <div ref={ref} className="relative" style={{ height: "220vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container>
          <div className={cn("grid items-center gap-12 md:grid-cols-2", isLeft ? "" : "")}>

            {/* Illustration panel */}
            <motion.div
              className={cn(
                "relative h-[55vw] max-h-96 overflow-hidden rounded-2xl md:h-[45vh]",
                !isLeft && "order-last md:order-none"
              )}
              style={{ y: illustrationY, opacity: illustrationOpacity }}
            >
              <CanvasSequence
                dir={beat.slug === "digi-skin" ? "sequence" : "sequence-feet"}
                progress={progress}
                frameCount={80}
                className="absolute inset-0 h-full w-full"
                label={beat.slug === "digi-skin" ? "Digi'Skin — prothèse haptique" : "Digi'Feet — semelle connectée"}
              />
            </motion.div>

            {/* Text panel */}
            <div className={cn("space-y-6", isLeft && "order-first md:order-last")}>
              <motion.div
                className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {beat.badge}
              </motion.div>
              <motion.h2
                className="text-4xl font-extrabold tracking-tight md:text-5xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                {beat.name}
              </motion.h2>
              <motion.p
                className="text-lg font-semibold text-accent"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.14 }}
              >
                {beat.tagline}
              </motion.p>
              <motion.p
                className="text-sm leading-relaxed text-muted-foreground md:text-base"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {beat.pitch}
              </motion.p>
              <ul className="space-y-2">
                {beat.benefits.slice(0, 3).map((b, i) => (
                  <motion.li
                    key={b}
                    className="flex gap-3 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.28 + i * 0.08 }}
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="flex flex-wrap gap-3 pt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.5 }}
              >
                <Link
                  href={beat.href}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground transition hover:bg-primary/90"
                >
                  {beat.seeLabel} {beat.name}
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted"
                >
                  {beat.demoLabel}
                </Link>
              </motion.div>
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   COMPARISON TABLE — rows revealed on scroll
════════════════════════════════════════════════════════════════ */

function ComparativeTable({
  eyebrow, title, colProduct, colDigiSkin, colDigiFeet, rows,
}: {
  eyebrow: string; title: string;
  colProduct: string; colDigiSkin: string; colDigiFeet: string;
  rows: readonly (readonly string[])[];
}) {
  return (
    <section id="comparatif" className="scroll-mt-28 border-y bg-secondary py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <Reveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {eyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-3 border-b bg-muted/40 px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                <div>{colProduct}</div>
                <div>{colDigiSkin}</div>
                <div>{colDigiFeet}</div>
              </div>
              {rows.map((row, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-3 border-b px-5 py-4 text-sm last:border-0"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="font-bold text-foreground/70">{row[0]}</div>
                  <div className="text-muted-foreground">{row[1]}</div>
                  <div className="text-muted-foreground">{row[2]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   TECH PIPELINE SECTION
════════════════════════════════════════════════════════════════ */

function TechSection({
  eyebrow, title, desc, cards,
}: {
  eyebrow: string; title: string; desc: string;
  cards: readonly { eyebrow: string; title: string; desc: string }[];
}) {
  return (
    <section id="technologie" className="scroll-mt-28 py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{desc}</p>
        </Reveal>

        {/* Pipeline diagram */}
        <div className="mt-12 h-64 text-foreground">
          <TechPipelineSVG />
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-3xl border bg-card p-7 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="text-xs font-extrabold uppercase tracking-widest text-accent">
                {card.eyebrow}
              </div>
              <div className="mt-2 text-sm font-extrabold tracking-tight">{card.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */

export function ProductsScrollytelling() {
  const { lang, t } = useLanguage();
  const p = t.productsPage;


  const localizedProducts = products.map((prod) => ({
    ...prod,
    tagline:
      lang === "en" ? productTranslationsEn[prod.slug]?.tagline ?? prod.tagline : prod.tagline,
    pitch: lang === "en" ? productTranslationsEn[prod.slug]?.pitch ?? prod.pitch : prod.pitch,
    benefits:
      lang === "en" ? productTranslationsEn[prod.slug]?.benefits ?? prod.benefits : prod.benefits,
  }));

  const digiSkin = localizedProducts.find((p) => p.slug === "digi-skin")!;
  const digiFeet = localizedProducts.find((p) => p.slug === "digi-feet")!;

  const beats: ProductBeat[] = [
    {
      slug: "digi-skin",
      badge: p.productBadge,
      name: digiSkin.name,
      tagline: digiSkin.tagline,
      pitch: digiSkin.pitch,
      benefits: digiSkin.benefits,
      illustrationLeft: true,
      href: productPath("digi-skin"),
      seeLabel: p.see,
      demoLabel: p.demo,
    },
    {
      slug: "digi-feet",
      badge: p.newProductBadge,
      name: digiFeet.name,
      tagline: digiFeet.tagline,
      pitch: digiFeet.pitch,
      benefits: digiFeet.benefits,
      illustrationLeft: false,
      href: productPath("digi-feet"),
      seeLabel: p.see,
      demoLabel: p.demo,
    },
  ];

  return (
    <div className="relative">

      {/* ── Hero dark ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050505] py-24 md:py-32">
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,hsl(var(--brand-purple)/0.15),transparent)]" />
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-white">
              <motion.div
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/60"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {p.badge}
              </motion.div>
              <motion.h1
                className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                {p.title}
              </motion.h1>
              <motion.p
                className="mt-5 text-base leading-relaxed text-white/50 md:text-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {p.desc}
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
              >
                <Link
                  href="#digi-skin"
                  className="inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-extrabold text-[#050505] transition hover:bg-white/90"
                >
                  Digi&apos;Skin
                </Link>
                <Link
                  href="#digi-feet"
                  className="inline-flex h-11 items-center rounded-full border border-white/20 px-5 text-sm font-extrabold text-white/80 transition hover:bg-white/10"
                >
                  Digi&apos;Feet
                </Link>
              </motion.div>
            </div>
            <div className="h-56 w-full md:h-72">
              <HeroDualVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Digi'Skin ─────────────────────────────────────────────── */}
      <div id="digi-skin" className="scroll-mt-16 border-b">
        <StickyProductSection beat={beats[0]} />
      </div>

      {/* ── Digi'Feet ─────────────────────────────────────────────── */}
      <div id="digi-feet" className="scroll-mt-16 border-b bg-secondary">
        <StickyProductSection beat={beats[1]} />
      </div>

      {/* ── Comparatif ────────────────────────────────────────────── */}
      <ComparativeTable
        eyebrow={p.comparatifEyebrow}
        title={p.comparatifTitle}
        colProduct={p.colProduct}
        colDigiSkin={p.colDigiSkin}
        colDigiFeet={p.colDigiFeet}
        rows={p.rows}
      />

      {/* ── Tech pipeline ─────────────────────────────────────────── */}
      <TechSection
        eyebrow={p.techEyebrow}
        title={p.techTitle}
        desc={p.techDesc}
        cards={p.techCards}
      />

      {/* ── CTA final ─────────────────────────────────────────────── */}
      <section className="border-t bg-primary py-20 md:py-28">
        <Container>
          <motion.div
            className="mx-auto max-w-xl text-center"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-4xl">
              {p.proofTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {p.proofDesc}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary-foreground px-6 text-sm font-extrabold text-primary transition hover:bg-primary-foreground/90"
              >
                {p.demo}
              </Link>
              <Link
                href={p.seeEvidence}
                className="inline-flex h-11 items-center justify-center rounded-full border border-primary-foreground/30 px-6 text-sm font-extrabold text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                {p.seeEvidence}
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

    </div>
  );
}
