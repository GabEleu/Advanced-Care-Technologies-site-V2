import type { Metadata } from "next";

import { products } from "@/data/products";
import { Container } from "@/components/site/Container";
import { productPath } from "@/lib/productPaths";
import { ProductStickySubnav } from "@/components/products/ProductStickySubnav";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Découvrez Digi’Skin et Digi’Feet, les produits Advanced Care Technologies : solutions medtech orientées suivi, données et indicateurs.",
  openGraph: {
    title: "Produits | Advanced Care Technologies",
    description:
      "Découvrez Digi’Skin et Digi’Feet : deux produits pour structurer le suivi et la visualisation d’indicateurs.",
    type: "website",
  },
};

export default function ProductsPage() {
  const digiSkin = products.find((p) => p.slug === "digi-skin");
  const digiFeet = products.find((p) => p.slug === "digi-feet");

  const stickyItems = [
    { id: "produits", label: "Produits" },
    { id: "comparatif", label: "Comparatif" },
    { id: "technologie", label: "Technologie" },
    { id: "preuves", label: "Preuves" },
    { id: "ressources", label: "Ressources" },
  ];

  return (
    <div>
      <section id="produits" className="scroll-mt-28 border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              Produits
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Deux produits, une même exigence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Digi’Skin et Digi’Feet s’inscrivent dans une approche commune : structurer des données
              pertinentes, présenter des indicateurs compréhensibles et soutenir le suivi, sans
              promesse médicale non justifiée.
            </p>
          </div>
        </Container>
      </section>

      <ProductStickySubnav items={stickyItems} />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <Card key={p.slug}>
                <CardBody>
                  <div className="text-sm font-extrabold text-muted-foreground">
                    {p.slug === "digi-feet" ? "Nouveau produit" : "Produit"}
                  </div>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{p.name}</h2>
                  <p className="mt-3 text-foreground/80">{p.tagline}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.pitch}</p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink href={productPath(p.slug)} variant="primary">
                      Voir {p.name}
                    </ButtonLink>
                    <ButtonLink href="/contact/" variant="secondary">
                      Demander une démo
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
                Vue d’ensemble
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Comparatif léger.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Un résumé scannable pour comprendre l’usage et les briques, sans détails sensibles.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
                <div className="grid grid-cols-3 border-b bg-muted/40 p-4 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  <div />
                  <div>{digiSkin?.name || "Digi’Skin"}</div>
                  <div>{digiFeet?.name || "Digi’Feet"}</div>
                </div>
                <div className="divide-y">
                  {[
                    {
                      label: "Problème",
                      left: "Restitution haptique non invasive (usage prothèse).",
                      right: "Suivi de la santé du pied (diabète) dans le temps.",
                    },
                    {
                      label: "Utilisateurs",
                      left: "Patients amputés, équipes terrain, partenaires.",
                      right: "Patients, professionnels de santé, structures.",
                    },
                    {
                      label: "Briques",
                      left: "Capteurs • traitement temps réel • brassard.",
                      right: "Semelle • app • indicateurs • historique.",
                    },
                    {
                      label: "Indicateurs",
                      left: "Retour haptique synchronisé (orienté usage).",
                      right: "Score indicatif + tendances (sans diagnostic).",
                    },
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-1 gap-3 p-6 md:grid-cols-3 md:gap-6">
                      <div className="text-sm font-extrabold text-foreground/80">
                        {row.label}
                      </div>
                      <div className="text-sm leading-relaxed text-muted-foreground">
                        {row.left}
                      </div>
                      <div className="text-sm leading-relaxed text-muted-foreground">
                        {row.right}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={productPath("digi-skin")} variant="primary">
                  Voir Digi’Skin
                </ButtonLink>
                <ButtonLink href={productPath("digi-feet")} variant="secondary">
                  Voir Digi’Feet
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="technologie" className="scroll-mt-28 py-16 md:py-20">
        <Container>
          <div className="rounded-3xl border bg-card p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  Technologie
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  Une plateforme capteurs + données.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="leading-relaxed text-muted-foreground">
                  Capteurs, traitement des signaux, visualisation et IA interne : nos produits
                  s’inscrivent dans une même logique de suivi, lisibilité et sécurité.
                </p>
                <div className="mt-6">
                  <ButtonLink href="/technologie/" variant="ghost" size="sm">
                    Découvrir la page Technologie →
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="preuves" className="scroll-mt-28 border-t py-16 md:py-20">
        <Container>
          <div className="rounded-3xl border bg-secondary p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  Preuves
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  Méthodologie et prudence.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="leading-relaxed text-muted-foreground">
                  Notre démarche met l’accent sur l’intégration terrain, la documentation et une
                  communication prudente sur les indicateurs.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/clinique-ou-validation/" variant="primary">
                    Voir l’approche →
                  </ButtonLink>
                  <ButtonLink href="/contact/" variant="secondary">
                    Demander une démo
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="ressources" className="scroll-mt-28 border-t py-16 md:py-20">
        <Container>
          <div className="rounded-3xl border bg-card p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  Ressources
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  Liens utiles et supports.
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="leading-relaxed text-muted-foreground">
                  Centraliser ce qui aide à comprendre rapidement (pages, PDF, presse, kit média).
                </p>
                <div className="mt-6">
                  <ButtonLink href="/ressources/" variant="ghost" size="sm">
                    Voir la page Ressources →
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

