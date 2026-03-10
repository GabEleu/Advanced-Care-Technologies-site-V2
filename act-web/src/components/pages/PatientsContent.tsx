"use client";

import Image from "next/image";
import { Container } from "@/components/site/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";
import { ProductFAQ } from "@/components/products/ProductFAQ";
import { ProductCTA } from "@/components/products/ProductCTA";
import { VideoTestimonial } from "@/components/common/VideoTestimonial";
import { useLanguage } from "@/context/LanguageContext";

export function PatientsContent() {
  const { t } = useLanguage();
  const p = t.profiles.patients;

  return (
    <div>
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/accroche.jpeg"
            alt={p.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>
        <Container className="relative pt-8" style={{ zIndex: 4 }}>
          <Breadcrumb
            items={[
              { label: t.nav.home, href: "/" },
              { label: p.badge },
            ]}
          />
        </Container>
        <div className="absolute inset-x-0 bottom-0 flex items-end px-8 pb-6 md:pb-10 md:px-14" style={{ zIndex: 4 }}>
          <div className="w-full">
            <div className="rounded-2xl bg-background/70 px-8 py-6 backdrop-blur-sm">
              <Reveal>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/50">
                  {p.badge}
                </p>
              </Reveal>
              <div className="space-y-3">
                <Reveal delay={0.08}>
                  <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-6xl">
                    {p.title}
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {p.desc}
                  </p>
                </Reveal>
                <Reveal delay={0.28}>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <ButtonLink href="/contact/" variant="secondary">
                      {p.ctaPrimary}
                    </ButtonLink>
                    <ButtonLink href="/produits/" variant="primary">
                      {p.ctaSecondary}
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="presentation" className="scroll-mt-28 py-12 md:py-16">
        <ProductSectionHeader
          eyebrow={p.presentationEyebrow}
          title={p.presentationTitle}
          description={p.presentationDesc}
        />
      </section>

      <section id="prise-en-main" className="scroll-mt-28 border-y bg-secondary py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border bg-card p-8 shadow-sm md:p-10">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              {p.priseEnMainSection.eyebrow}
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              {p.priseEnMainSection.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {p.priseEnMainSection.description}
            </p>
          </div>
        </Container>
      </section>

      <VideoTestimonial
        eyebrow={p.videoSection.eyebrow}
        title={p.videoSection.title}
        src="/videos/temoignage-patient-digiskin.mp4"
        tracks={[
          { src: "/videos/temoignage-patient-digiskin.en.vtt", lang: "en", label: "English" },
        ]}
        transcriptLabel={p.videoSection.transcriptLabel}
        transcript={p.videoSection.transcript}
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
