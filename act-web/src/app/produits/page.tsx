import Link from "next/link";
import type { Metadata } from "next";

import { products } from "@/data/products";
import { Container } from "@/components/site/Container";

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
  return (
    <div>
      <section className="border-b">
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

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <div key={p.slug} className="rounded-3xl border bg-card p-8 shadow-sm">
                <div className="text-sm font-extrabold text-muted-foreground">
                  {p.slug === "digi-feet" ? "Nouveau produit" : "Produit"}
                </div>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{p.name}</h2>
                <p className="mt-3 text-foreground/80">{p.tagline}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.pitch}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={`/produits/${p.slug}/`}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                  >
                    Voir {p.name}
                  </Link>
                  <Link
                    href="/contact/"
                    className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                  >
                    Demander une démo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

