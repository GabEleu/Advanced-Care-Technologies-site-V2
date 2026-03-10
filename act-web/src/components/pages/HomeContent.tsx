"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/site/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { HomePrinciplesScrollytelling } from "@/components/home/HomePrinciplesScrollytelling";
import { ProfilNavigation } from "@/components/home/ProfilNavigation";
import { useLanguage } from "@/context/LanguageContext";
import { productPath } from "@/lib/productPaths";
import { ProductTeam } from "../products/ProductTeam";
import { getProductBySlug } from "@/data/products";
import { ProductTeamforhome } from "../products/ProductTeamforhome";

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
  "/legacy/digiskin-legacy/team/gabriel-eleuterio.png",
  "/legacy/digiskin-legacy/team/manon-frajman.png",
  "/legacy/digiskin-legacy/team/edward-de-keating-hart.png",
];

export function HomeContent() {
  const { t } = useLanguage();
  const h = t.home;
 
  const digiSkin = getProductBySlug("digi-skin");
  const team = digiSkin?.team;
  return (
    <div className="relative">

      {/* ── 1. Hero plein écran ──────────────────────────────────── */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/accroche.jpeg"
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
        <div className="absolute inset-x-0 bottom-0 flex items-end pb-6 px-8 md:pb-10 md:px-14" style={{ zIndex: 4 }}>
          <div className="w-full">
            <div className="rounded-2xl bg-background/70 px-8 py-6 backdrop-blur-sm">
              <Reveal>
                <p className="mb-3 text-[10px] font-bold tracking-[0.4em] text-foreground/50 uppercase">
                  {h.badge}
                </p>
              </Reveal>
              <div className="space-y-3">
                <Reveal delay={0.08}>
                  <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-6xl">
                    {h.heroTitle}
                  </h1>
                </Reveal>
                <Reveal delay={0.14}>
                  <p className="text-lg font-semibold text-accent md:text-xl">
                    {h.heroSubtitle}
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {h.heroDesc}
                  </p>
                </Reveal>
                <Reveal delay={0.28}>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <ButtonLink href={productPath("digi-skin")} variant="secondary">
                      {h.cta1}
                    </ButtonLink>
                    <ButtonLink href={productPath("digi-feet")} variant="secondary">
                      {h.cta2}
                    </ButtonLink>
                    <ButtonLink href="/contact/" variant="primary">
                      {h.cta3}
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Navigation par profils ───────────────────────────── */}
      <ProfilNavigation />

      {/* ── 3. Nos solutions ────────────────────────────────────── */}
      <section id="solutions" className="scroll-mt-28 py-12 md:py-16">
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

          {/* Digi'Skin row */}
          <div className="mt-10 grid items-center gap-10 border-t pt-10 md:grid-cols-2">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {h.digiSkinEyebrow}
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">Digi&apos;Skin</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{h.digiSkinShort}</p>
              <ButtonLink href={productPath("digi-skin")} variant="ghost" size="sm">
                {h.discoverBtn} →
              </ButtonLink>
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <Image
                src="/images/digi-skin/hero-legende2.jpeg"
                alt="Digi'Skin — prothèse avec retour haptique"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto", transform: "scale(1.12)", transformOrigin: "center" }}
                className="rounded-2xl"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </motion.div>
          </div>

          {/* Digi'Feet row */}
          <div className="mt-10 grid items-center gap-10 border-t pt-10 md:grid-cols-2">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {h.digiFeetEyebrow}
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">Digi&apos;Feet</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{h.digiFeetShort}</p>
              <ButtonLink href={productPath("digi-feet")} variant="ghost" size="sm">
                {h.discoverBtn} →
              </ButtonLink>
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <Image
                src="/images/digi-feet/DigiFeet_Legende2.jpeg"
                alt="Digi'Feet — semelle connectée"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="rounded-2xl"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── 4. Qui nous sommes / Équipe ─────────────────────────── */}
      <section id="equipe" className="scroll-mt-28 border-y bg-secondary py-12 md:py-16">
        <Container>
          {team && (
            <>
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {h.teamEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {h.teamTitle}
              </h2>
              <div className="mt-6">
                <ProductTeamforhome
                  title={team.title}
                  members={team.members}
                  collaborations={team.collaborations}
                  compact
                />
              </div>
            </>
          )}
        </Container>
      </section>

      {/* ── 5. Principes de conception (scrollytelling) ──────────── */}
      <HomePrinciplesScrollytelling
        eyebrow={h.principlesEyebrow}
        title={h.principlesTitle}
        principles={h.principles}
      />

      {/* ── 6. CTA final ────────────────────────────────────────── */}
      <section className="bg-primary py-14 md:py-20">
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
