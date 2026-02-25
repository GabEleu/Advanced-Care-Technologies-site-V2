import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/site/Container";

export const metadata: Metadata = {
  title: "Preuves & validation",
  description:
    "Notre approche clinique et de validation : méthodologie, partenaires, éthique et transparence, sans allégations non démontrées.",
  openGraph: {
    title: "Preuves & validation | Advanced Care Technologies",
    description:
      "Méthodologie, partenaires et principes d’éthique : une approche prudente, orientée preuve et intégration terrain.",
    type: "website",
  },
};

export default function CliniqueOuValidationPage() {
  return (
    <div>
      <section className="border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              Preuves
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Une approche prudente, orientée preuve.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Nous concevons et évaluons nos solutions avec une attention portée à la méthodologie,
              à l’intégration terrain et à la transparence. Cette page décrit notre démarche sans
              inventer de résultats ni promettre un diagnostic.
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
                Demander une démo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Méthodologie
              </div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                Mesurer, documenter, itérer.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    <span className="font-bold text-foreground/80">Définition des indicateurs</span>{" "}
                    : choix explicites, lisibles, orientés suivi.
                  </li>
                  <li>
                    <span className="font-bold text-foreground/80">Traçabilité</span> : historique,
                    contexte et cohérence des visualisations.
                  </li>
                  <li>
                    <span className="font-bold text-foreground/80">Évaluation</span> : retours
                    terrain, tests itératifs, amélioration continue.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
                  Les dispositifs et scores présentés ont vocation à aider au suivi. Ils ne
                  constituent pas un diagnostic et ne remplacent pas l’expertise clinique.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Partenaires
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Collaborations et terrains
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nous travaillons avec des partenaires et structures selon les opportunités et
                contextes. La liste complète est publiée lorsque confirmée.
              </p>
            </div>
            <div className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Éthique
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Confidentialité et consentement
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Minimisation des données, bonnes pratiques de sécurité, et communication prudente
                sur les indicateurs.
              </p>
            </div>
            <div className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Transparence
              </div>
              <div className="mt-3 text-lg font-extrabold tracking-tight">
                Pas d’allégations non démontrées
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nous évitons les promesses médicales non validées. Les informations affichées sont
                présentées comme des éléments d’aide au suivi.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

