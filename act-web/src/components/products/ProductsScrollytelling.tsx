"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { productTranslationsEn } from "@/lib/i18n/translations";
import { products } from "@/data/products";
import { productPath } from "@/lib/productPaths";
import { Container } from "@/components/site/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/* ════════════════════════════════════════════════════════════════
   PRODUCT ROW — text left + static image right
════════════════════════════════════════════════════════════════ */

const HERO_IMAGES: Record<"digi-skin" | "digi-feet", string> = {
  "digi-skin": "/images/digi-skin/hero-legende2.jpeg",
  "digi-feet": "/images/digi-feet/DigiFeet_Legende2.jpeg",
};

type ProductBeat = {
  slug: "digi-skin" | "digi-feet";
  badge: string;
  name: string;
  tagline: string;
  pitch: string;
  benefits: string[];
  href: string;
  seeLabel: string;
  demoLabel: string;
};

function ProductRow({ beat, imageContain = false }: { beat: ProductBeat; imageContain?: boolean }) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      {/* Text */}
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
          {beat.badge}
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">{beat.name}</h2>
        <p className="text-lg font-semibold text-accent">{beat.tagline}</p>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{beat.pitch}</p>
        <ul className="space-y-2">
          {beat.benefits.slice(0, 3).map((b) => (
            <li key={b} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
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
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className={imageContain ? "overflow-hidden rounded-2xl" : "relative aspect-[4/3] overflow-hidden rounded-2xl"}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {imageContain ? (
          <Image
            src={HERO_IMAGES[beat.slug]}
            alt={beat.name}
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", transform: "scale(1.12)", transformOrigin: "center" }}
            className="rounded-2xl"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <Image
            src={HERO_IMAGES[beat.slug]}
            alt={beat.name}
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={beat.slug === "digi-skin"}
          />
        )}
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
          <text
              x={node.x}
              y="72"
              textAnchor="middle"
              fill="currentColor"
              fontSize="7.5"
              fontWeight="bold"
              letterSpacing="0.5"
            >
              {node.label === "IA & Indicateurs" ? (
                <>
                  <tspan x={node.x} dy="0">IA &</tspan>
                  <tspan x={node.x} dy="9">Indicateurs</tspan>
                </>
              ) : (
                node.label
              )}
            </text>
          <text x={node.x} y="88" textAnchor="middle" fill="currentColor" fillOpacity="0.4" fontSize="6.5">{node.sublabel}</text>
        </motion.g>
      ))}
    </svg>
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
    <section id="comparatif" className="scroll-mt-28 border-y bg-secondary py-12 md:py-16">
      <Container>
        <div className="space-y-8">
          <Reveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
          </Reveal>
          <div>
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
    <section id="technologie" className="scroll-mt-28 py-12 md:py-16">
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
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
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
      href: productPath("digi-feet"),
      seeLabel: p.see,
      demoLabel: p.demo,
    },
  ];

  return (
    <div className="relative">

      {/* ── Hero compact ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,hsl(var(--brand-purple)/0.15),transparent)]" />
        <Container>
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/60">
              {p.badge}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {p.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/50">
              {p.desc}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Digi'Skin ─────────────────────────────────────────────── */}
      <section id="digi-skin" className="scroll-mt-16 border-b py-12 md:py-16">
        <Container>
          <ProductRow beat={beats[0]} imageContain />
        </Container>
      </section>

      {/* ── Digi'Feet ─────────────────────────────────────────────── */}
      <section id="digi-feet" className="scroll-mt-16 border-b bg-secondary py-12 md:py-16">
        <Container>
          <ProductRow beat={beats[1]} imageContain />
        </Container>
      </section>

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
      <section className="border-t bg-primary py-14 md:py-20">
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
                href="/clinique-ou-validation/"
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
