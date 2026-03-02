"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/site/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { HomePrinciplesScrollytelling } from "@/components/home/HomePrinciplesScrollytelling";
import { useLanguage } from "@/context/LanguageContext";
import { productPath } from "@/lib/productPaths";

/* ─── Product card ───────────────────────────────────────────────── */

function ProductCard({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  desc,
  href,
  discoverLabel,
}: {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  discoverLabel: string;
}) {
  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </div>
        <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-6">
          <ButtonLink href={href} variant="ghost" size="sm">
            {discoverLabel} →
          </ButtonLink>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Team member card ───────────────────────────────────────────── */

function TeamCard({
  name,
  role,
  imageSrc,
}: {
  name: string;
  role: string;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border bg-card p-6 text-center shadow-sm">
      <div className="relative size-20 overflow-hidden rounded-full ring-2 ring-accent/30">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div>
        <div className="text-sm font-extrabold tracking-tight">{name}</div>
        <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{role}</div>
      </div>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */

const TEAM_IMAGES = [
  "/images/team/gabriel-eleuterio.png",
  "/images/team/manon-frajman.png",
  "/images/team/edward-de-keating-hart.png",
];

export function HomeContent() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div className="relative">

      {/* ── 1. Hero plein écran ──────────────────────────────────── */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/accroche.png"
            alt={h.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>

        {/* Hero text */}
        <Container className="relative flex min-h-[90vh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-0 md:pt-0">
          <div className="max-w-2xl space-y-5">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-foreground/20 bg-card/80 px-3 py-1 text-xs font-bold text-foreground/80 shadow-sm backdrop-blur-sm">
                {h.badge}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                {h.heroTitle}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-xl font-semibold text-accent md:text-2xl">
                {h.heroSubtitle}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
                {h.heroDesc}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonLink href={productPath("digi-skin")} variant="primary">
                  {h.cta1}
                </ButtonLink>
                <ButtonLink href={productPath("digi-feet")} variant="secondary">
                  {h.cta2}
                </ButtonLink>
                <ButtonLink href="/contact/" variant="secondary">
                  {h.cta3}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 2. Nos solutions ────────────────────────────────────── */}
      <section id="solutions" className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              {h.solutionsEyebrow}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              {h.solutionsTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {h.solutionsDesc}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <ProductCard
                imageSrc="/sequence/prosthesis_120.jpg"
                imageAlt="Digi'Skin — prothèse avec retour haptique"
                eyebrow={h.digiSkinEyebrow}
                title="Digi'Skin"
                desc={h.digiSkinShort}
                href={productPath("digi-skin")}
                discoverLabel={h.discoverBtn}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <ProductCard
                imageSrc="/sequence-feet/insole_120.jpg"
                imageAlt="Digi'Feet — semelle connectée"
                eyebrow={h.digiFeetEyebrow}
                title="Digi'Feet"
                desc={h.digiFeetShort}
                href={productPath("digi-feet")}
                discoverLabel={h.discoverBtn}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 3. Qui nous sommes / Équipe ─────────────────────────── */}
      <section id="equipe" className="scroll-mt-28 border-y bg-secondary py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Texte gauche */}
            <div>
              <Reveal>
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  {h.teamEyebrow}
                </div>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  {h.teamTitle}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {h.teamDesc}
                </p>
              </Reveal>
            </div>

            {/* Portraits droite avec parallax */}
            <ParallaxMedia>
              <div className="grid grid-cols-3 gap-4">
                {h.teamMembers.map((m, i) => (
                  <Reveal key={m.name} delay={i * 0.1}>
                    <TeamCard
                      name={m.name}
                      role={m.role}
                      imageSrc={TEAM_IMAGES[i] ?? "/images/team/gabriel-eleuterio.png"}
                    />
                  </Reveal>
                ))}
              </div>
            </ParallaxMedia>
          </div>
        </Container>
      </section>

      {/* ── 4. Principes de conception (scrollytelling) ──────────── */}
      <HomePrinciplesScrollytelling
        eyebrow={h.principlesEyebrow}
        title={h.principlesTitle}
        principles={h.principles}
      />

      {/* ── 5. CTA final ────────────────────────────────────────── */}
      <section className="bg-primary py-20 md:py-28">
        <Container>
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-4xl">
              {h.ctaTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
              {h.ctaDesc}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ButtonLink
                href="/contact/"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                {h.ctaJoin}
              </ButtonLink>
              <ButtonLink
                href="/produits/"
                variant="secondary"
                className="border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                {h.ctaSecondary}
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </section>

    </div>
  );
}
