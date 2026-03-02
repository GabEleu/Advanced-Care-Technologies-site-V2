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
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/site/Container";
import { Product3DBackdrop } from "@/components/products/Product3DBackdrop";
import { SlotCounter } from "@/components/ui/SlotCounter";

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
  const model3d = product.downloads?.find((item) => item.href.toLowerCase().endsWith(".glb"));
  const otherDownloads = product.downloads?.filter(
    (item) => !item.href.toLowerCase().endsWith(".glb"),
  );

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
    <div className="relative">
      {model3d ? <Product3DBackdrop src={model3d.href} alt={`Modèle 3D ${product.name}`} /> : null}
      <div className="relative z-10">
        <ProductHero product={product} />
        <ProductStickySubnav items={stickyItems} />

      <Reveal>
        <ProductProblem
          id="probleme"
          title={problem.title}
          description={problem.description}
          bullets={problem.bullets}
          note={problem.note}
        />
      </Reveal>

      {product.mission || product.numbers ? (
        <section className="scroll-mt-28 border-y bg-secondary/70 py-16 backdrop-blur-[1px] md:py-20">
          <Container>
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              {product.mission ? (
                <div className="md:col-span-7">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                    Mission
                  </div>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                    {product.mission.title}
                  </h2>
                  {product.mission.subtitle ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {product.mission.subtitle}
                    </p>
                  ) : null}
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {product.mission.cards.map((card) => (
                      <div key={card} className="rounded-2xl border bg-card p-5 text-sm font-bold">
                        {card}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {product.numbers ? (
                <div className="md:col-span-5">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                    {product.numbers.title}
                  </div>
                  <div className="mt-4 grid gap-3">
                    {product.numbers.stats.map((stat) => (
                      <div key={`${stat.value || stat.line1}-${stat.line2 || ""}`} className="rounded-2xl border bg-card p-5">
                        {stat.value ? (
                          <div className="text-3xl font-extrabold tracking-tight">
                            <SlotCounter value={stat.value} />
                          </div>
                        ) : null}
                        <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          <div>{stat.line1}</div>
                          {stat.line2 ? <div>{stat.line2}</div> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                  {product.numbers.note ? (
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      {product.numbers.note}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {product.media?.gallery?.length ? (
        <ProductGallery
          title="Visuels"
          description="Photos et captures illustrant le produit."
          images={product.media.gallery}
        />
      ) : null}

      <div id="solution" className="scroll-mt-28">
        <Reveal>
          <ProductFeatureGrid
            title="La solution"
            description="Une architecture produit pensée pour transformer des signaux en informations lisibles."
            features={product.features}
          />
        </Reveal>
      </div>

      <div id="fonctionnement" className="scroll-mt-28">
        <Reveal>
          <ProductHowItWorks
            title="Comment ça marche ?"
            description="Un parcours en quelques étapes, centré sur la lisibilité et l’intégration."
            steps={product.howItWorks}
          />
        </Reveal>
      </div>

      <Reveal>
        <ProductValueProps
          id="benefices"
          title="Bénéfices clés"
          description="Des bénéfices orientés usage et suivi."
          items={product.benefits}
        />
      </Reveal>

      <Reveal>
        <ProductSpecs
          id="specs"
          title="Vue d’ensemble"
          description="Informations descriptives pour comprendre les briques et le positionnement."
          items={specs}
        />
      </Reveal>

      <div id="preuves" className="scroll-mt-28">
        <Reveal>
          <>
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
          </>
        </Reveal>
      </div>

      <div id="pour-qui" className="scroll-mt-28">
        <Reveal>
          <ProductAudienceGrid
            title="Pour qui ?"
            description="Patients, professionnels et structures : des vues adaptées à chaque contexte."
            audiences={product.audiences}
          />
        </Reveal>
      </div>

      {otherDownloads?.length ? (
        <ProductDownloads
          title="Ressources"
          description="Ressources associées au produit (si disponibles)."
          items={otherDownloads}
        />
      ) : null}

      <div id="faq" className="scroll-mt-28">
        <Reveal>
          <ProductFAQ
            title="Questions fréquentes"
            description=""
            items={product.faq}
          />
        </Reveal>
      </div>

      <ProductCTA
        title="Parlons de votre contexte"
        description="Décrivez votre besoin et nous organiserons une démonstration adaptée (parcours, contraintes, objectifs)."
        primary={product.primaryCta}
        secondary={{ label: "Voir tous les produits", href: "/produits/" }}
      />
      </div>
    </div>
  );
}

