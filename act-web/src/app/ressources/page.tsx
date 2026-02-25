import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { products } from "@/data/products";
import { productPath } from "@/lib/productPaths";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Ressources et liens utiles : pages produits, technologie, preuves & validation, et contact.",
  openGraph: {
    title: "Ressources | Advanced Care Technologies",
    description:
      "Pages produits, technologie, preuves & validation, et moyens de contact.",
    type: "website",
  },
};

export default function RessourcesPage() {
  return (
    <div>
      <section className="border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              Ressources
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Tout au même endroit.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Liens utiles pour comprendre nos produits, notre approche technologique et notre
              démarche de validation. Des ressources additionnelles (PDF, presse, kit média) peuvent
              être ajoutées à mesure qu’elles sont disponibles.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Produits
              </div>
              <div className="mt-3 text-xl font-extrabold tracking-tight">
                Pages produits détaillées
              </div>
              <div className="mt-6 space-y-3">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={productPath(p.slug)}
                    className="block rounded-2xl border bg-background px-5 py-4 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                  >
                    {p.name} → <span className="font-semibold">{p.tagline}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/produits/"
                  className="text-sm font-extrabold text-foreground/80 hover:text-foreground"
                >
                  Vue d’ensemble des produits →
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  Explorer
                </div>
                <div className="mt-3 grid gap-3">
                  <Link
                    href="/technologie/"
                    className="rounded-2xl border bg-background px-5 py-4 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                  >
                    Technologie →
                  </Link>
                  <Link
                    href="/clinique-ou-validation/"
                    className="rounded-2xl border bg-background px-5 py-4 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                  >
                    Preuves & validation →
                  </Link>
                  <Link
                    href="/a-propos/"
                    className="rounded-2xl border bg-background px-5 py-4 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                  >
                    À propos →
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border bg-secondary p-8 shadow-sm">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  Contact
                </div>
                <div className="mt-3 text-xl font-extrabold tracking-tight">
                  Besoin d’un échange rapide ?
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Décris ton contexte (patient, équipe clinique, partenaire, structure) et nous
                  organiserons une démonstration adaptée.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact/"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                  >
                    Demander une démo
                  </Link>
                  <a
                    href="mailto:contact@advancedcaretechnologies.fr"
                    className="inline-flex h-11 items-center justify-center rounded-full border bg-background px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                  >
                    contact@advancedcaretechnologies.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

