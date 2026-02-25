import type { Product, ProductSlug } from "@/data/products";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductProblem } from "@/components/products/ProductProblem";
import { ProductFeatureGrid } from "@/components/products/ProductFeatureGrid";
import { ProductHowItWorks } from "@/components/products/ProductHowItWorks";
import { ProductValueProps } from "@/components/products/ProductValueProps";
import { ProductSpecs, type ProductSpecItem } from "@/components/products/ProductSpecs";
import { ProductPartnerLogos } from "@/components/products/ProductPartnerLogos";
import { ProductSecurity } from "@/components/products/ProductSecurity";
import { ProductAudienceGrid } from "@/components/products/ProductAudienceGrid";
import { ProductFAQ } from "@/components/products/ProductFAQ";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductStickySubnav } from "@/components/products/ProductStickySubnav";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductDownloads } from "@/components/products/ProductDownloads";

function getProblem(slug: ProductSlug) {
  if (slug === "digi-feet") {
    return {
      title: "Un suivi prudent, dans un contexte à risque.",
      description:
        "Chez les personnes diabétiques, la santé du pied nécessite une attention particulière. Digi’Feet vise à faciliter le suivi dans le temps grâce à des mesures issues de capteurs et à des données cliniques renseignées, présentées sous forme d’indicateurs lisibles.",
      bullets: ["Continuité", "Lecture unifiée", "Historique", "Indicateurs lisibles"],
      note:
        "Digi’Feet n’a pas vocation à réaliser un diagnostic. Les indicateurs et le score sont conçus comme une aide au suivi et à la visualisation.",
    };
  }

  return {
    title: "Retrouver une interaction plus naturelle.",
    description:
      "L’absence de sensations au niveau d’une prothèse peut compliquer certains gestes du quotidien. Digi’Skin vise à proposer une restitution haptique non invasive pour soutenir l’interaction avec l’environnement, dans un cadre d’usage et d’accompagnement.",
    bullets: ["Sensations", "Équilibre", "Sécurité d’usage", "Confiance"],
    note:
      "Digi’Skin est présenté comme un dispositif de restitution. Il ne constitue pas un diagnostic et ne remplace pas une évaluation clinique.",
  };
}

function getSpecs(slug: ProductSlug): ProductSpecItem[] {
  if (slug === "digi-feet") {
    return [
      {
        label: "Format",
        value: "Semelle connectée + application.",
      },
      {
        label: "Données",
        value: "Mesures capteurs + informations cliniques renseignées (vue unifiée).",
      },
      {
        label: "Indicateurs",
        value: "Score indicatif et tendances dans le temps (aide au suivi, sans diagnostic).",
      },
      {
        label: "Partage",
        value: "Vues conçues pour faciliter l’échange patient / professionnel / structure.",
      },
    ];
  }

  return [
    {
      label: "Format",
      value: "Dispositif de retour haptique non invasif.",
    },
    {
      label: "Chaîne fonctionnelle",
      value: "Capteurs de force → traitement temps réel → brassard de stimulation multi-zones.",
    },
    {
      label: "Restitution",
      value: "Retour vibro-tactile synchronisé avec l’interaction (orienté usage).",
    },
    {
      label: "Positionnement",
      value: "Conçu pour l’usage quotidien et l’intégration terrain, avec une communication prudente.",
    },
  ];
}

export function ProductPageTemplate({ product }: { product: Product }) {
  const problem = getProblem(product.slug);
  const specs = getSpecs(product.slug);

  const stickyItems = [
    { id: "probleme", label: "Problème" },
    { id: "solution", label: "Solution" },
    { id: "fonctionnement", label: "Fonctionnement" },
    { id: "benefices", label: "Bénéfices" },
    { id: "specs", label: "Spécifications" },
    { id: "preuves", label: "Preuves" },
    { id: "pour-qui", label: "Pour qui" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div>
      <ProductHero product={product} />
      <ProductStickySubnav items={stickyItems} />

      <ProductProblem
        id="probleme"
        title={problem.title}
        description={problem.description}
        bullets={problem.bullets}
        note={problem.note}
      />

      {product.media?.gallery?.length ? (
        <ProductGallery
          title="Visuels"
          description="Photos et captures illustrant le produit."
          images={product.media.gallery}
        />
      ) : null}

      <div id="solution" className="scroll-mt-28">
        <ProductFeatureGrid
          title="La solution"
          description="Une architecture produit pensée pour transformer des signaux en informations lisibles."
          features={product.features}
        />
      </div>

      <div id="fonctionnement" className="scroll-mt-28">
        <ProductHowItWorks
          title="Comment ça marche ?"
          description="Un parcours en quelques étapes, centré sur la lisibilité et l’intégration."
          steps={product.howItWorks}
        />
      </div>

      <ProductValueProps
        id="benefices"
        title="Bénéfices clés"
        description="Des bénéfices orientés usage et suivi."
        items={product.benefits}
      />

      <ProductSpecs
        id="specs"
        title="Vue d’ensemble"
        description="Informations descriptives pour comprendre les briques et le positionnement."
        items={specs}
      />

      <div id="preuves" className="scroll-mt-28">
        {product.media?.partnerLogos?.length ? (
          <ProductPartnerLogos
            title="Partenaires et terrains"
            description="Un ancrage terrain et des collaborations structurantes."
            logos={product.media.partnerLogos}
          />
        ) : null}

        {product.team?.collaborations?.logos?.length ? (
          <ProductPartnerLogos
            title="Écosystème"
            description="Acteurs, soutiens et réseaux associés au projet."
            logos={product.team.collaborations.logos}
          />
        ) : null}

        <ProductSecurity title={product.security.title} description={product.security.description} />
      </div>

      <div id="pour-qui" className="scroll-mt-28">
        <ProductAudienceGrid
          title="Pour qui ?"
          description="Patients, professionnels et structures : des vues adaptées à chaque contexte."
          audiences={product.audiences}
        />
      </div>

      {product.downloads?.length ? (
        <ProductDownloads
          title="Ressources"
          description="Ressources associées au produit (si disponibles)."
          items={product.downloads}
        />
      ) : null}

      <div id="faq" className="scroll-mt-28">
        <ProductFAQ
          title="Questions fréquentes"
          description="Réponses courtes, précises et prudentes."
          items={product.faq}
        />
      </div>

      <ProductCTA
        title="Parlons de votre contexte"
        description="Décrivez votre besoin et nous organiserons une démonstration adaptée (parcours, contraintes, objectifs)."
        primary={product.primaryCta}
        secondary={{ label: "Voir tous les produits", href: "/produits/" }}
      />
    </div>
  );
}

