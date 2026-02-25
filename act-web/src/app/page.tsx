import Link from "next/link";
import type { Metadata } from "next";

import { products } from "@/data/products";
import { Container } from "@/components/site/Container";
import { productPath } from "@/lib/productPaths";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Advanced Care Technologies conçoit des solutions medtech combinant capteurs, logiciel et indicateurs, pour aider au suivi dans un cadre prudent et professionnel.",
  openGraph: {
    title: "Advanced Care Technologies",
    description:
      "Tech au service de la santé : capteurs, logiciel et indicateurs pour aider au suivi, avec une communication prudente.",
    type: "website",
  },
};

export default function Home() {
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
              Medtech • Suivi • Données & indicateurs
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Une technologie au service du suivi, sans sur-promettre.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Advanced Care Technologies conçoit des solutions combinant capteurs, applications et
              indicateurs pour aider au suivi et à la prise de décision. Notre approche privilégie
              la clarté, la sécurité et la crédibilité clinique.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={productPath("digi-skin")}
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Découvrir Digi’Skin
              </Link>
              <Link
                href={productPath("digi-feet")}
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                Découvrir Digi’Feet
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                Demander une démo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="produits" className="scroll-mt-28 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Nos produits
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Deux produits, une même exigence.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Des pages dédiées, des sections scannables, et des CTA cohérents pour faciliter la
                prise de contact.
              </p>
            </div>
            <div className="md:col-span-6 md:justify-self-end">
              <Link
                href="/produits/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-muted px-5 text-sm font-extrabold text-foreground transition hover:bg-muted/80"
              >
                Vue d’ensemble →
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div key={p.slug} className="rounded-3xl border bg-card p-8 shadow-sm">
              <div className="text-sm font-bold text-muted-foreground">
                {p.slug === "digi-feet" ? "Nouveau produit" : "Produit"}
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
                <Link
                  href={productPath(p.slug)}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-muted px-4 text-sm font-bold text-foreground transition hover:bg-muted/80"
                >
                  Voir {p.name}
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex h-10 items-center justify-center rounded-full border bg-card px-4 text-sm font-bold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                >
                  Demander une démo
                </Link>
              </div>
            </div>
          ))}
          </div>
        </Container>
      </section>

      <section id="pourquoi" className="scroll-mt-28 border-y bg-secondary py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Pourquoi ACT
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Clarté produit et crédibilité medtech.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Une approche orientée usage, sécurité et communication prudente.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border bg-card p-7 shadow-sm">
                  <div className="text-base font-extrabold tracking-tight">R&D interne</div>
                  <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Capteurs, traitement et indicateurs pensés comme un ensemble cohérent.
                  </div>
                </div>
                <div className="rounded-3xl border bg-card p-7 shadow-sm">
                  <div className="text-base font-extrabold tracking-tight">Approche terrain</div>
                  <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Itérations guidées par l’intégration et les retours d’usage.
                  </div>
                </div>
                <div className="rounded-3xl border bg-card p-7 shadow-sm">
                  <div className="text-base font-extrabold tracking-tight">Design centré patient</div>
                  <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Interfaces scannables, langage neutre, historique et contexte.
                  </div>
                </div>
                <div className="rounded-3xl border bg-card p-7 shadow-sm">
                  <div className="text-base font-extrabold tracking-tight">Sécurité</div>
                  <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Bonnes pratiques de confidentialité et de minimisation des données.
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
                Les produits et indicateurs présentés visent à aider au suivi. Ils ne constituent
                pas un diagnostic et ne remplacent pas une évaluation clinique.
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
                Preuves & confiance
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Partenaires et écosystème.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Logos affichés à titre indicatif, reflétant un contexte projet/partenarial.
              </p>
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
                <Link
                  href="/clinique-ou-validation/"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-muted px-5 text-sm font-extrabold text-foreground transition hover:bg-muted/80"
                >
                  Voir notre approche →
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                >
                  Demander une démo
                </Link>
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
                Ressources
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Approfondir, puis contacter.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Technologie, preuves, pages produits: tout est structuré pour une lecture rapide.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/technologie/"
                  className="rounded-3xl border bg-card p-7 text-sm font-extrabold text-foreground/80 shadow-sm transition hover:bg-muted hover:text-foreground"
                >
                  Technologie →
                </Link>
                <Link
                  href="/clinique-ou-validation/"
                  className="rounded-3xl border bg-card p-7 text-sm font-extrabold text-foreground/80 shadow-sm transition hover:bg-muted hover:text-foreground"
                >
                  Preuves & validation →
                </Link>
                <Link
                  href="/produits/"
                  className="rounded-3xl border bg-card p-7 text-sm font-extrabold text-foreground/80 shadow-sm transition hover:bg-muted hover:text-foreground"
                >
                  Voir les produits →
                </Link>
                <Link
                  href="/contact/"
                  className="rounded-3xl border bg-card p-7 text-sm font-extrabold text-foreground/80 shadow-sm transition hover:bg-muted hover:text-foreground"
                >
                  Demander une démo →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
