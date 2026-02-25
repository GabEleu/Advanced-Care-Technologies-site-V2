import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { ProductTeam } from "@/components/products/ProductTeam";
import { getProductBySlug } from "@/data/products";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Advanced Care Technologies : mission, valeurs et équipe. Une approche medtech orientée suivi, clarté et intégration terrain.",
  openGraph: {
    title: "À propos | Advanced Care Technologies",
    description:
      "Mission, valeurs et équipe d’Advanced Care Technologies. Une approche prudente, orientée suivi et crédibilité clinique.",
    type: "website",
  },
};

export default function AProposPage() {
  const digiSkin = getProductBySlug("digi-skin");
  const team = digiSkin?.team;

  return (
    <div>
      <section className="border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              À propos
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Concevoir des produits utiles, avec exigence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Advanced Care Technologies développe des solutions medtech combinant capteurs,
              logiciel et visualisations claires. Notre priorité : une information compréhensible
              et exploitable, sans sur-promettre.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/produits/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Découvrir les produits
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                Nous contacter
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
                Mission
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Améliorer le suivi au quotidien
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Mettre la technologie au service de l’autonomie, avec des produits orientés usage,
                intégration et compréhension.
              </p>
            </div>
            <div className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Valeurs
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Clarté, prudence, sécurité
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Un langage neutre, des indicateurs lisibles, et des choix produits cohérents avec
                les exigences du domaine.
              </p>
            </div>
            <div className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Terrain
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Construire avec les équipes
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nous privilégions une démarche itérative et documentée, avec un dialogue continu
                avec les parties prenantes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {team ? (
        <ProductTeam
          title={team.title}
          members={team.members}
          collaborations={team.collaborations}
        />
      ) : null}
    </div>
  );
}

