import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getProductBySlug, products, type ProductSlug } from "@/data/products";
import { Container } from "@/components/site/Container";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductHowItWorks } from "@/components/products/ProductHowItWorks";
import { ProductFeatureGrid } from "@/components/products/ProductFeatureGrid";
import { ProductAudienceGrid } from "@/components/products/ProductAudienceGrid";
import { ProductSecurity } from "@/components/products/ProductSecurity";
import { ProductFAQ } from "@/components/products/ProductFAQ";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductPartnerLogos } from "@/components/products/ProductPartnerLogos";
import { ProductMission } from "@/components/products/ProductMission";
import { ProductNumbers } from "@/components/products/ProductNumbers";
import { ProductTeam } from "@/components/products/ProductTeam";
import { ProductDownloads } from "@/components/products/ProductDownloads";

export const dynamic = "force-static";
export const dynamicParams = false;

type PageParams = {
  slug?: string | string[];
};

function toProductSlug(params: PageParams): ProductSlug | null {
  const slug = params.slug;
  if (typeof slug !== "string") return null;
  if (slug === "digi-skin" || slug === "digi-feet") return slug;
  return null;
}

export function generateStaticParams(): Array<{ slug: ProductSlug }> {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = toProductSlug(resolvedParams);
  if (!slug) return {};

  const product = getProductBySlug(slug);
  if (!product) return {};

  const title = product.seo.title;
  const description = product.seo.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

function DigiFeetProblemSection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              Enjeux
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Un suivi prudent, dans un contexte à risque.
            </h2>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <p className="leading-relaxed text-muted-foreground">
                Chez les personnes diabétiques, la santé du pied nécessite une attention
                particulière. Digi’Feet vise à faciliter le suivi dans le temps grâce à des mesures
                issues de capteurs et à des données cliniques renseignées, présentées sous forme
                d’indicateurs lisibles.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-muted p-5">
                  <div className="text-sm font-extrabold">Continuité</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Aider à suivre l’évolution et les tendances sans se limiter à un instant T.
                  </div>
                </div>
                <div className="rounded-2xl bg-muted p-5">
                  <div className="text-sm font-extrabold">Lecture unifiée</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Rassembler mesures et données cliniques dans une vue cohérente.
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
                Digi’Feet n’a pas vocation à réaliser un diagnostic. Les indicateurs et le score
                sont conçus comme une aide au suivi et à la visualisation.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const slug = toProductSlug(resolvedParams);
  if (!slug) notFound();

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const featureSection =
    product.slug === "digi-skin"
      ? {
          title: "Notre solution",
          description: "Une innovation de rupture : un dispositif IoT basé sur l’IA.",
        }
      : {
          title: "Des fonctionnalités conçues pour le suivi",
          description:
            "Capteurs, application, indicateurs : chaque brique vise une lecture plus claire et un suivi plus continu.",
        };

  const howItWorksSection =
    product.slug === "digi-skin"
      ? {
          title: "Comment ça marche ?",
          description:
            "Capteurs, traitement et restitution : un parcours en quelques étapes, orienté usage et synchronisation.",
        }
      : {
          title: "De la mesure à la visualisation",
          description: "Un parcours en quelques étapes, centré sur la lisibilité et l’historique.",
        };

  const audienceSection =
    product.slug === "digi-skin"
      ? {
          title: "Conçu pour patients et équipes terrain",
          description:
            "Patients, cliniciens, partenaires : une approche orientée intégration et usage, sans promesse de diagnostic.",
        }
      : {
          title: "Conçu pour patients, professionnels et structures",
          description:
            "Un langage neutre et des vues structurées, pour faciliter le suivi et les échanges.",
        };

  return (
    <div>
      <ProductHero product={product} />

      {product.mission ? (
        <ProductMission
          title={product.mission.title}
          subtitle={product.mission.subtitle}
          cards={product.mission.cards}
        />
      ) : null}

      {product.media?.partnerLogos?.length ? (
        <ProductPartnerLogos
          title="Partenaires et terrains d’expérimentation"
          description="Un ancrage terrain et des collaborations structurantes."
          logos={product.media.partnerLogos}
        />
      ) : null}

      {product.media?.gallery?.length ? (
        <ProductGallery
          title={
            product.slug === "digi-skin" ? "Prototypes & extraits" : "Visuels du produit"
          }
          description={
            product.slug === "digi-skin"
              ? "Photos du dispositif et captures du premier site Digi’Skin, réintégrées pour enrichir la présentation."
              : "Quelques visuels pour contextualiser le produit."
          }
          images={product.media.gallery}
        />
      ) : null}

      {product.slug === "digi-feet" ? <DigiFeetProblemSection /> : null}

      <ProductFeatureGrid
        title={featureSection.title}
        description={featureSection.description}
        features={product.features}
      />

      {product.numbers ? (
        <ProductNumbers title={product.numbers.title} stats={product.numbers.stats} note={product.numbers.note} />
      ) : null}

      <ProductHowItWorks
        title={howItWorksSection.title}
        description={howItWorksSection.description}
        steps={product.howItWorks}
      />

      {product.downloads?.length ? (
        <ProductDownloads
          title="Ressources et démonstration"
          description="Éléments issus du premier site (modèle 3D) pour compléter la présentation."
          items={product.downloads}
        />
      ) : null}

      <ProductSecurity title={product.security.title} description={product.security.description} />

      <ProductAudienceGrid
        title={audienceSection.title}
        description={audienceSection.description}
        audiences={product.audiences}
      />

      {product.team ? (
        <ProductTeam
          title={product.team.title}
          members={product.team.members}
          collaborations={product.team.collaborations}
        />
      ) : null}

      <ProductFAQ
        title="Questions fréquentes"
        description="Réponses courtes, précises et prudentes."
        items={product.faq}
      />

      <ProductCTA
        title="Parlons de votre contexte"
        description="Décrivez votre besoin et nous organiserons une démonstration adaptée (parcours, contraintes, objectifs)."
        primary={product.primaryCta}
        secondary={{ label: "Voir tous les produits", href: "/produits/" }}
      />
    </div>
  );
}

