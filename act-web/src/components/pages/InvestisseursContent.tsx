"use client";

import Image from "next/image";
import { Container } from "@/components/site/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";
import { ProductFAQ } from "@/components/products/ProductFAQ";
import { ProductCTA } from "@/components/products/ProductCTA";
import { StatsSection } from "@/components/common/StatsSection";
import { useLanguage } from "@/context/LanguageContext";

export function InvestisseursContent() {
  const { t } = useLanguage();
  const p = t.profiles.investisseurs;

  return (
    <div>
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/illustration-investisseurs.png"
            alt={p.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>
        <Container className="relative flex min-h-[60vh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-0 md:pt-0">
          <Breadcrumb
            items={[
              { label: t.nav.home, href: "/" },
              { label: p.badge },
            ]}
          />
          <div className="mt-4 max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border border-foreground/20 bg-card/80 px-3 py-1 text-xs font-bold text-foreground/80 shadow-sm backdrop-blur-sm">
              {p.badge}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">{p.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
              {p.desc}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact/" variant="primary">
                {p.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="/produits/" variant="secondary">
                {p.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="presentation" className="scroll-mt-28 py-12 md:py-16">
        <ProductSectionHeader
          eyebrow={p.presentationEyebrow}
          title={p.presentationTitle}
          description={p.presentationDesc}
        />
      </section>

      <StatsSection
        id="chiffres"
        eyebrow={p.statsSection.eyebrow}
        title={p.statsSection.title}
        description={p.statsSection.subtitle}
        stats={[...p.statsSection.stats]}
      />

      <section id="benefices" className="scroll-mt-28 border-y bg-secondary py-12 md:py-16">
        <Container>
          <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            {p.benefitsEyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            {p.benefitsTitle}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {p.benefits.map((card) => (
              <div key={card.title} className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-sm">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  {card.eyebrow}
                </div>
                <div className="mt-3 text-lg font-extrabold tracking-tight">{card.title}</div>
                <p className="mt-3 min-h-0 flex-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div id="faq" className="scroll-mt-28">
        <ProductFAQ title={p.faqTitle} items={[...p.faqItems]} />
      </div>

      <ProductCTA
        title={p.ctaTitle}
        description={p.ctaDesc}
        primary={{ label: p.ctaPrimary, href: "/contact/" }}
        secondary={{ label: p.ctaSecondary, href: "/produits/" }}
      />
    </div>
  );
}
