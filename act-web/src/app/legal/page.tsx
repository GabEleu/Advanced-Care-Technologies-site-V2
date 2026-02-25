import type { Metadata } from "next";

import { Container } from "@/components/site/Container";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et informations de confidentialité d’Advanced Care Technologies.",
  openGraph: {
    title: "Mentions légales | Advanced Care Technologies",
    description:
      "Mentions légales et informations de confidentialité d’Advanced Care Technologies.",
    type: "website",
  },
};

export default function LegalPage() {
  return (
    <div>
      <section className="border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              Legal
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Mentions légales & confidentialité
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Cette page fournit des informations générales. Elle peut être complétée avec les
              éléments légaux (raison sociale, adresse, directeur de publication, hébergeur, etc.)
              et une politique de confidentialité détaillée.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight">Mentions légales</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-bold text-foreground/80">Éditeur</span> : Advanced Care
                  Technologies (à compléter : forme juridique, capital, adresse, RCS/SIRET).
                </p>
                <p>
                  <span className="font-bold text-foreground/80">Directeur de publication</span> :
                  à compléter.
                </p>
                <p>
                  <span className="font-bold text-foreground/80">Hébergement</span> : GitHub Pages
                  (GitHub, Inc.).
                </p>
              </div>
            </div>

            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight">Confidentialité</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Nous appliquons des bonnes pratiques de minimisation et de sécurité des données.
                  Les informations affichées sur ce site ont une vocation informative.
                </p>
                <p>
                  <span className="font-bold text-foreground/80">Données de contact</span> : si vous
                  nous écrivez, vos informations sont utilisées uniquement pour répondre à votre
                  demande.
                </p>
                <p>
                  <span className="font-bold text-foreground/80">Cookies</span> : à compléter (si
                  des outils de mesure d’audience sont ajoutés, préciser finalités et base légale).
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border bg-secondary p-8 shadow-sm">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              Important
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Les contenus produits décrivent des approches et indicateurs destinés à aider au
              suivi. Ils ne constituent pas un diagnostic et ne remplacent pas un avis médical.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

