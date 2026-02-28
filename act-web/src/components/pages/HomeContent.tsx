"use client";

import { products } from "@/data/products";
import { Container } from "@/components/site/Container";
import { productPath } from "@/lib/productPaths";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { productTranslationsEn } from "@/lib/i18n/translations";

export function HomeContent() {
  const { lang, t } = useLanguage();
  const h = t.home;

  const localizedProducts = products.map((p) => ({
    ...p,
    tagline:
      lang === "en" ? productTranslationsEn[p.slug]?.tagline ?? p.tagline : p.tagline,
    benefits:
      lang === "en" ? productTranslationsEn[p.slug]?.benefits ?? p.benefits : p.benefits,
  }));

  const digiSkin = products.find((p) => p.slug === "digi-skin");
  const trustLogos = (digiSkin?.team?.collaborations?.logos || []).slice(0, 8);
  const partnerLogos = (digiSkin?.media?.partnerLogos || []).slice(0, 3);

  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_60%_at_50%_10%,hsl(var(--accent)/0.25),transparent_60%),conic-gradient(from_180deg_at_50%_50%,hsl(var(--brand-purple)/0.18),transparent_35%,hsl(var(--accent)/0.14),transparent_65%,hsl(var(--primary)/0.18),transparent_85%)]" />
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-bold text-foreground/80 shadow-sm">
              {h.badge}
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              {h.heroTitle}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {h.heroDesc}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
          </div>
        </Container>
      </section>

      <section id="produits" className="scroll-mt-28 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {h.productsEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {h.productsTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {h.productsDesc}
              </p>
            </div>
            <div className="md:col-span-6 md:justify-self-end">
              <ButtonLink href="/produits/" variant="ghost">
                {h.productsOverview}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {localizedProducts.map((p) => (
              <Card key={p.slug}>
                <CardBody>
                  <div className="text-sm font-bold text-muted-foreground">
                    {p.slug === "digi-feet" ? h.newProductBadge : h.productBadge}
                  </div>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{p.name}</h2>
                  <p className="mt-3 text-muted-foreground">{p.tagline}</p>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {p.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <ButtonLink href={productPath(p.slug)} variant="ghost" size="sm">
                      {h.seeProduct} {p.name}
                    </ButtonLink>
                    <ButtonLink href="/contact/" variant="secondary" size="sm">
                      {h.demo}
                    </ButtonLink>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="pourquoi" className="scroll-mt-28 border-y bg-secondary py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {h.whyEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {h.whyTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h.whyDesc}</p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {h.whyCards.map((card) => (
                  <div key={card.title} className="rounded-3xl border bg-card p-7 shadow-sm">
                    <div className="text-base font-extrabold tracking-tight">{card.title}</div>
                    <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {card.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
                {h.disclaimer}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="preuves" className="scroll-mt-28 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {h.proofEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {h.proofTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h.proofDesc}</p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 rounded-3xl border bg-card p-6 shadow-sm sm:grid-cols-2 md:p-8">
                {partnerLogos.map((l) => (
                  <div key={l.src} className="rounded-2xl bg-muted/40 p-4">
                    <div className="text-sm font-extrabold">{l.alt}</div>
                  </div>
                ))}
                {trustLogos.map((l) => (
                  <div key={l.src} className="rounded-2xl bg-muted/40 p-4">
                    <div className="text-sm font-extrabold">{l.alt}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/clinique-ou-validation/" variant="ghost">
                  {h.seeApproach}
                </ButtonLink>
                <ButtonLink href="/contact/" variant="secondary">
                  {h.demo}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="ressources" className="scroll-mt-28 border-t py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {h.resourcesEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {h.resourcesTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {h.resourcesDesc}
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <ButtonLink
                  href="/technologie/"
                  variant="secondary"
                  className="justify-start rounded-3xl border bg-card p-7 shadow-sm"
                >
                  {h.techLink}
                </ButtonLink>
                <ButtonLink
                  href="/clinique-ou-validation/"
                  variant="secondary"
                  className="justify-start rounded-3xl border bg-card p-7 shadow-sm"
                >
                  {h.proofLink}
                </ButtonLink>
                <ButtonLink
                  href="/produits/"
                  variant="secondary"
                  className="justify-start rounded-3xl border bg-card p-7 shadow-sm"
                >
                  {h.productsLink}
                </ButtonLink>
                <ButtonLink
                  href="/contact/"
                  variant="secondary"
                  className="justify-start rounded-3xl border bg-card p-7 shadow-sm"
                >
                  {h.demoLink}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
