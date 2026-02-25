import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/site/Container";

export const metadata: Metadata = {
  title: "Technologie",
  description:
    "Découvrez l’approche technologique d’Advanced Care Technologies : capteurs, traitement des signaux, visualisation et IA interne, au service du suivi.",
  openGraph: {
    title: "Technologie | Advanced Care Technologies",
    description:
      "Capteurs, traitement des signaux, visualisation et IA interne : une plateforme orientée suivi, lisibilité et sécurité.",
    type: "website",
  },
};

export default function TechnologiePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_60%_at_50%_10%,hsl(var(--accent)/0.18),transparent_60%),conic-gradient(from_180deg_at_50%_50%,hsl(var(--brand-purple)/0.14),transparent_35%,hsl(var(--accent)/0.10),transparent_65%,hsl(var(--primary)/0.14),transparent_85%)]" />
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              Technologie
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              De la mesure à la compréhension.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Nos produits combinent capteurs, traitement des signaux et interfaces claires pour
              aider au suivi dans le temps. Nous privilégions la lisibilité, la sécurité et
              l’intégration dans des parcours existants.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/produits/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Voir les produits
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                Parler à l’équipe
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Capteurs
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Mesurer, au plus proche de l’usage
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Dispositifs conçus pour capter des signaux pertinents, avec une attention portée à
                l’ergonomie et à la continuité de mesure.
              </p>
            </div>
            <div className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Traitement
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Structurer des signaux hétérogènes
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Chaîne logicielle orientée robustesse et traçabilité, pour transformer des mesures
                en indicateurs et vues exploitables.
              </p>
            </div>
            <div className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                IA interne
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Aide à la visualisation, sans diagnostic
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Modèles conçus pour fournir des scores ou tendances indicatives. Ils ne remplacent
                pas une évaluation clinique.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border bg-secondary p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  Principes
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  Performance, sécurité, clarté.
                </h2>
              </div>
              <div className="md:col-span-7">
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    <span className="font-bold text-foreground/80">Lisibilité</span> : des vues
                    simples, scannables, et un langage neutre.
                  </li>
                  <li>
                    <span className="font-bold text-foreground/80">Traçabilité</span> : historique
                    et éléments de contexte pour comprendre l’évolution.
                  </li>
                  <li>
                    <span className="font-bold text-foreground/80">Sécurité</span> : bonnes
                    pratiques de protection des données et de minimisation.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
                  Les sections technologiques restent volontairement “marketing” : elles décrivent
                  l’approche sans divulguer de détails sensibles.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

