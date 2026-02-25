import Link from "next/link";
import type { Metadata } from "next";

import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Advanced Care Technologies présente Digi’Skin et Digi’Feet : des solutions medtech orientées suivi, données et indicateurs, avec un ton prudent et clinique.",
  openGraph: {
    title: "Advanced Care Technologies",
    description:
      "Découvrez Digi’Skin et Digi’Feet : capteurs, application et indicateurs pour aider au suivi, dans un cadre professionnel.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_60%_at_50%_10%,hsl(var(--accent)/0.25),transparent_60%),conic-gradient(from_180deg_at_50%_50%,hsl(var(--brand-purple)/0.18),transparent_35%,hsl(var(--accent)/0.14),transparent_65%,hsl(var(--primary)/0.18),transparent_85%)]" />
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-bold text-foreground/80 shadow-sm">
              Medtech • Suivi • Données & indicateurs
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Des produits pour mieux suivre, sans sur-promettre.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Advanced Care Technologies conçoit des solutions combinant capteurs, applications et
              indicateurs pour aider au suivi et à la prise de décision. Notre approche privilégie
              la clarté, la sécurité et la crédibilité clinique.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/produits"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Découvrir les produits
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                Demander une démo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div key={p.slug} className="rounded-3xl border bg-card p-8 shadow-sm">
              <div className="text-sm font-bold text-muted-foreground">
                {p.slug === "digi-feet" ? "Nouveau produit" : "Produit"}
              </div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{p.name}</h2>
              <p className="mt-3 text-muted-foreground">{p.tagline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/produits/${p.slug}`}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-muted px-4 text-sm font-bold text-foreground transition hover:bg-muted/80"
                >
                  Voir {p.name}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-full border bg-card px-4 text-sm font-bold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                >
                  Demander une démo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
