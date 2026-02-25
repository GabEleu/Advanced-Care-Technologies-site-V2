export type ProductSlug = "digi-skin" | "digi-feet";

export type ProductCTA = {
  label: string;
  href: string;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductStep = {
  title: string;
  description: string;
};

export type ProductFAQItem = {
  question: string;
  answer: string;
};

export type ProductAudience = {
  title: string;
  description: string;
};

export type ProductSEO = {
  title: string;
  description: string;
};

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductPartnerLogo = {
  src: string;
  alt: string;
  href?: string;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  pitch: string;
  primaryCta: ProductCTA;
  secondaryCta?: ProductCTA;
  media?: {
    heroImage?: ProductImage;
    gallery?: ProductImage[];
    partnerLogos?: ProductPartnerLogo[];
  };
  benefits: string[];
  howItWorks: ProductStep[];
  features: ProductFeature[];
  audiences: ProductAudience[];
  security: {
    title: string;
    description: string;
  };
  faq: ProductFAQItem[];
  seo: ProductSEO;
};

export const products: Product[] = [
  {
    slug: "digi-skin",
    name: "Digi’Skin",
    tagline: "Capturer des signaux, structurer le suivi, clarifier les tendances.",
    pitch:
      "Digi’Skin combine des capteurs portés (au niveau de la main) et une application pour structurer un suivi et visualiser des indicateurs dans le temps. L’objectif est d’offrir une lecture claire et cohérente, dans un cadre professionnel et prudent.",
    primaryCta: { label: "Demander une démo", href: "/contact/" },
    secondaryCta: { label: "Voir Digi’Feet", href: "/produits/digi-feet/" },
    media: {
      heroImage: {
        src: "/legacy/digi-skin/arm-sensors.png",
        alt: "Dispositif Digi’Skin (capteurs portés au niveau des doigts et bracelet).",
      },
      gallery: [
        {
          src: "/legacy/digi-skin/sensor-glove.png",
          alt: "Prototype de capteurs portés sur la main (Digi’Skin).",
        },
        {
          src: "/legacy/digi-skin/arm-sensors-photo.png",
          alt: "Dispositif Digi’Skin porté (capteurs doigts + bracelet).",
        },
      ],
      partnerLogos: [
        {
          src: "/legacy/partners/clinique-jules-verne.png",
          alt: "Clinique Jules Verne (Groupe VYV)",
        },
        {
          src: "/legacy/partners/la-tourmaline.png",
          alt: "La Tourmaline — Centre de Réadaptation et de Rééducation Fonctionnelle",
        },
        {
          src: "/legacy/partners/wilco.png",
          alt: "WILCO",
        },
      ],
    },
    benefits: [
      "Collecte via capteurs portés, pensée pour un usage réel",
      "Organisation des données dans une vue cohérente",
      "Historique et tendances pour aider au suivi",
      "Approche orientée crédibilité clinique",
      "Démonstration et intégration facilitées",
    ],
    howItWorks: [
      {
        title: "Collecte",
        description:
          "Des capteurs portés collectent des mesures pendant l’utilisation, dans un cadre défini.",
      },
      {
        title: "Agrégation",
        description:
          "Les données sont organisées et contextualisées pour faciliter la lecture et la continuité du suivi.",
      },
      {
        title: "Indicateurs & visualisation",
        description:
          "Des vues synthétiques, un historique et des tendances permettent une compréhension rapide, sans promesse de diagnostic.",
      },
    ],
    features: [
      {
        title: "Capteurs portés",
        description:
          "Une instrumentation au plus proche du geste, conçue pour collecter des mesures en conditions réalistes.",
      },
      {
        title: "Données structurées",
        description:
          "Organisation des informations pour une lecture plus claire et un partage facilité.",
      },
      {
        title: "Vues & tendances",
        description:
          "Visualisations hiérarchisées et historique pour suivre l’évolution dans le temps.",
      },
    ],
    audiences: [
      {
        title: "Professionnels de santé",
        description:
          "Accès à des vues utiles au suivi et à la discussion, sans promesse de diagnostic.",
      },
      {
        title: "Recherche & innovation",
        description:
          "Pour instrumenter, analyser et documenter des signaux dans un cadre méthodologique.",
      },
      {
        title: "Structures",
        description:
          "Support pour organiser un suivi homogène et faciliter le déploiement.",
      },
    ],
    security: {
      title: "Sécurité & confidentialité",
      description:
        "ACT conçoit ses produits avec une attention particulière à la confidentialité et à la sécurité des données, selon les bonnes pratiques du domaine.",
    },
    faq: [
      {
        question: "À qui s’adresse Digi’Skin ?",
        answer:
          "Digi’Skin s’adresse à des équipes (professionnels, structures, recherche) qui souhaitent instrumenter et structurer un suivi via des capteurs portés et des vues d’indicateurs.",
      },
      {
        question: "Digi’Skin pose-t-il un diagnostic ?",
        answer:
          "Non. Les informations affichées visent à aider au suivi et à la documentation ; elles ne remplacent pas l’évaluation clinique.",
      },
      {
        question: "Comment demander une démo ?",
        answer:
          "Vous pouvez nous contacter via la page Contact pour organiser une démonstration.",
      },
    ],
    seo: {
      title: "Digi’Skin",
      description:
        "Digi’Skin : capteurs portés + application pour structurer un suivi et visualiser des indicateurs dans le temps, dans un cadre professionnel et prudent.",
    },
  },
  {
    slug: "digi-feet",
    name: "Digi’Feet",
    tagline: "Surveiller la santé du pied, prévenir les complications.",
    pitch:
      "Digi’Feet combine une semelle connectée et une application pour suivre l’état de santé des pieds chez les personnes diabétiques. Les capteurs embarqués et les données cliniques permettent une vision personnalisée et un score de santé du pied calculé par une IA développée en interne.",
    primaryCta: { label: "Demander une démo", href: "/contact/" },
    secondaryCta: { label: "Voir les produits", href: "/produits/" },
    benefits: [
      "Suivi continu et personnalisé du pied",
      "Données capteurs + données cliniques dans une vue unifiée",
      "Score de santé du pied et tendances dans le temps",
      "Aide au suivi patient / professionnel de santé",
    ],
    howItWorks: [
      {
        title: "Mesure via la semelle",
        description:
          "La semelle collecte des mesures via des capteurs embarqués pendant l’utilisation.",
      },
      {
        title: "Agrégation dans l’application",
        description:
          "L’application agrège les mesures et les données cliniques renseignées pour une lecture unifiée.",
      },
      {
        title: "Score & indicateurs",
        description:
          "L’IA interne calcule un score de santé du pied et des indicateurs de suivi à partir des données disponibles.",
      },
      {
        title: "Visualisation & historique",
        description:
          "Une visualisation claire, un historique et des éléments d’aide au suivi facilitent la compréhension dans le temps (sans diagnostic).",
      },
    ],
    features: [
      {
        title: "Capteurs embarqués",
        description:
          "Collecte de mesures au plus proche du quotidien, avec un dispositif conçu pour être porté.",
      },
      {
        title: "Application & dashboard",
        description:
          "Vues hiérarchisées, lecture rapide et accès à l’historique pour contextualiser.",
      },
      {
        title: "Score IA interne",
        description:
          "Un score indicatif et des tendances dans le temps pour aider au suivi, sans remplacer l’évaluation clinique.",
      },
      {
        title: "Données unifiées",
        description:
          "Combinaison des données capteurs et des informations cliniques pour une vue plus complète.",
      },
    ],
    audiences: [
      {
        title: "Patients",
        description:
          "Pour aider à suivre l’évolution dans le temps et favoriser une meilleure compréhension des tendances.",
      },
      {
        title: "Professionnels de santé",
        description:
          "Pour disposer d’éléments de suivi structurés, en soutien à l’échange et à la décision.",
      },
      {
        title: "Structures",
        description:
          "Pour déployer un suivi homogène et faciliter l’organisation des parcours.",
      },
    ],
    security: {
      title: "Sécurité & confidentialité",
      description:
        "Les données sont traitées avec une attention particulière à la confidentialité et à la sécurité. Les informations présentées sont des indicateurs d’aide au suivi et ne constituent pas un diagnostic.",
    },
    faq: [
      {
        question: "À qui s’adresse Digi’Feet ?",
        answer:
          "Digi’Feet est destiné au suivi de la santé du pied chez les personnes diabétiques, en lien avec les professionnels et structures de soins.",
      },
      {
        question: "Quels types de données sont utilisés ?",
        answer:
          "Des mesures issues des capteurs embarqués et des données cliniques renseignées, agrégées dans une vue unifiée.",
      },
      {
        question: "Le score est-il un diagnostic ?",
        answer:
          "Non. Le score est un indicateur d’aide au suivi et à la visualisation des tendances ; il ne remplace pas une évaluation clinique.",
      },
      {
        question: "Comment demander une démo ?",
        answer:
          "Rendez-vous sur la page Contact pour nous présenter votre contexte et planifier une démonstration.",
      },
    ],
    seo: {
      title: "Digi’Feet",
      description:
        "Digi’Feet : semelle connectée + application pour le suivi de la santé du pied chez les personnes diabétiques, avec score indicatif calculé par IA interne.",
    },
  },
];

export function getProductBySlug(slug: ProductSlug) {
  return products.find((p) => p.slug === slug);
}

