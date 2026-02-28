"use client";

import { products } from "@/data/products";
import { Container } from "@/components/site/Container";
import { productPath } from "@/lib/productPaths";
import { ProductStickySubnav } from "@/components/products/ProductStickySubnav";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { productTranslationsEn } from "@/lib/i18n/translations";

export function ProductsContent() {
  const { lang, t } = useLanguage();
  const p = t.productsPage;

  const localizedProducts = products.map((prod) => ({
    ...prod,
    tagline:
      lang === "en" ? productTranslationsEn[prod.slug]?.tagline ?? prod.tagline : prod.tagline,
    pitch:
      lang === "en" ? productTranslationsEn[prod.slug]?.pitch ?? prod.pitch : prod.pitch,
    benefits:
      lang === "en" ? productTranslationsEn[prod.slug]?.benefits ?? prod.benefits : prod.benefits,
  }));

  const stickyItems = [
    { id: "produits", label: p.badge },
    { id: "comparatif", label: p.comparatifEyebrow },
    { id: "technologie", label: t.nav.technology },
    { id: "preuves", label: t.nav.evidence },
    { id: "ressources", label: t.nav.resources },
  ];

  return (
    <div>
      <section id="produits" className="scroll-mt-28 border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              {p.badge}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">{p.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {p.desc}
            </p>
          </div>
        </Container>
      </section>

      <ProductStickySubnav items={stickyItems} />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {localizedProducts.map((prod) => (
              <Card key={prod.slug}>
                <CardBody>
                  <div className="text-sm font-extrabold text-muted-foreground">
                    {prod.slug === "digi-feet" ? p.newProductBadge : p.productBadge}
                  </div>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{prod.name}</h2>
                  <p className="mt-3 text-foreground/80">{prod.tagline}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{prod.pitch}</p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink href={productPath(prod.slug)} variant="primary">
                      {p.see} {prod.name}
                    </ButtonLink>
                    <ButtonLink href="/contact/" variant="secondary">
                      {p.demo}
                    </ButtonLink>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="comparatif" className="scroll-mt-28 border-y bg-secondary py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {p.comparatifEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {p.comparatifTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.comparatifDesc}
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
                <div className="grid grid-cols-3 border-b bg-muted/40 p-4 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  <div>{p.colProduct}</div>
                  <div>{p.colDigiSkin}</div>
                  <div>{p.colDigiFeet}</div>
                </div>
                {p.rows.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 border-b p-4 text-sm last:border-0"
                  >
                    <div className="font-bold text-foreground/70">{row[0]}</div>
                    <div className="text-muted-foreground">{row[1]}</div>
                    <div className="text-muted-foreground">{row[2]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="technologie" className="scroll-mt-28 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {p.techEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {p.techTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.techDesc}</p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {p.techCards.map((card) => (
                  <div key={card.title} className="rounded-3xl border bg-card p-6 shadow-sm">
                    <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                      {card.eyebrow}
                    </div>
                    <div className="mt-2 text-sm font-extrabold tracking-tight">{card.title}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="preuves" className="scroll-mt-28 border-y bg-secondary py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {p.proofEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {p.proofTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.proofDesc}</p>
            </div>
            <div className="md:col-span-7">
              <ButtonLink href="/clinique-ou-validation/" variant="ghost">
                {p.seeEvidence}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="ressources" className="scroll-mt-28 py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="/technologie/" variant="secondary">
              {t.home.techLink}
            </ButtonLink>
            <ButtonLink href="/clinique-ou-validation/" variant="secondary">
              {t.home.proofLink}
            </ButtonLink>
            <ButtonLink href="/contact/" variant="primary">
              {p.demo}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
