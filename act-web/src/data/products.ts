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

export type ProductMission = {
  title: string;
  subtitle?: string;
  cards: string[];
};

export type ProductStat = {
  value?: string;
  line1: string;
  line2?: string;
};

export type ProductNumbers = {
  title: string;
  stats: ProductStat[];
  note?: string;
};

export type ProductTeamMember = {
  name: string;
  role: string;
  qualifications: string;
  image?: ProductImage;
};

export type ProductTeam = {
  title: string;
  members: ProductTeamMember[];
  collaborations?: {
    title: string;
    logos: ProductPartnerLogo[];
    note?: string;
  };
};

export type ProductDownload = {
  label: string;
  href: string;
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
  mission?: ProductMission;
  numbers?: ProductNumbers;
  team?: ProductTeam;
  downloads?: ProductDownload[];
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
    tagline: "Retrouver le sens du toucher au niveau de la prothèse.",
    pitch:
      "Advanced Care Technologies développe un dispositif non invasif de retour haptique visant à permettre aux personnes amputées de retrouver le sens du toucher au niveau de leur prothèse : Digi’Skin. En restaurant le sens du toucher, Digi’Skin vise à aider le patient à interagir à nouveau avec son environnement.",
    primaryCta: { label: "Demander une démo", href: "/contact/" },
    secondaryCta: { label: "Voir Digi’Feet", href: "/produits/digi-feet/" },
    media: {
      heroImage: {
        src: "/legacy/digi-skin/arm-sensors.png",
        alt: "Dispositif Digi’Skin (capteurs portés au niveau des doigts et bracelet).",
      },
      gallery: [
        {
          src: "/legacy/digiskin-legacy/photos/prototype-main-table.png",
          alt: "Prototype Digi’Skin posé sur table — vue d’ensemble du dispositif.",
        },
        {
          src: "/legacy/digiskin-legacy/photos/bracelet-poignet-zoom.png",
          alt: "Zoom sur le boîtier bracelet porté au poignet.",
        },
        {
          src: "/legacy/digiskin-legacy/photos/capteur-bracelet-seul.png",
          alt: "Capteur embarqué sur bracelet élastique — vue détaillée.",
        },
        {
          src: "/legacy/digiskin-legacy/photos/prototype-vue-laterale.png",
          alt: "Vue latérale du prototype Digi’Skin avec capteurs de doigts.",
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
      "Restaurer des sensations",
      "Retrouver l’équilibre",
      "Éviter douleurs et blessures",
      "Retour haptique non invasif, pensé pour l’usage quotidien",
      "Traitement temps réel et restitution synchronisée",
    ],
    mission: {
      title: "Notre mission est d’améliorer la qualité de vie et l’autonomie des patients",
      subtitle: "Avec Digi’Skin, nous visons à :",
      cards: ["Restaurer des sensations", "Retrouver l’équilibre", "Éviter douleurs et blessures"],
    },
    numbers: {
      title: "En chiffres",
      stats: [
        {
          value: "10%",
          line1: "de la population mondiale a",
          line2: "une atteinte sensitive",
        },
        {
          value: "50%",
          line1: "des cas associés à",
          line2: "des douleurs chroniques",
        },
        {
          value: "15 k€",
          line1: "Le coût moyen",
          line2: "par patient",
        },
      ],
    },
    howItWorks: [
      {
        title: "Capteurs de force intégrés",
        description:
          "Capteurs de force intégrés, collectant les informations du toucher.",
      },
      {
        title: "Logiciel temps réel",
        description:
          "Logiciel transmettant les signaux en temps réel selon le contexte d’utilisation ou le profil sensoriel de l’utilisateur.",
      },
      {
        title: "Brassard de stimulation",
        description:
          "Brassard de stimulation attaché au bras, délivrant un retour vibro-tactile multi-zones synchronisé avec les capteurs.",
      },
    ],
    features: [
      {
        title: "Capteur haptique",
        description:
          "Capteur de pression à haute sensibilité, conçu pour une intégration au plus près de l’interaction.",
      },
      {
        title: "Algorithmes IA",
        description:
          "Traitement temps réel et reconstruction des stimuli tactiles pour un retour adapté.",
      },
      {
        title: "Brassard de stimulation",
        description:
          "Retour vibro-tactile multi-zones synchronisé avec les capteurs, pour soutenir la restitution.",
      },
    ],
    downloads: [
      {
        label: "Télécharger le modèle 3D du brassard (GLB)",
        href: "/legacy/digi-skin/models/BraceletV2.glb",
      },
    ],
    audiences: [
      {
        title: "Patients amputés",
        description:
          "Pour viser un meilleur ressenti lors de l’usage d’une prothèse, dans un cadre d’accompagnement.",
      },
      {
        title: "Cliniciens & équipes de rééducation",
        description:
          "Pour intégrer un dispositif de retour haptique dans des parcours et protocoles (sans promesse de diagnostic).",
      },
      {
        title: "Prothésistes & partenaires",
        description:
          "Pour explorer des intégrations et des usages terrain, avec une approche prudente et documentée.",
      },
    ],
    team: {
      title: "À propos de nous",
      members: [
        {
          name: "Gabriel ELEUTERIO",
          role: "CEO & cofondateur",
          qualifications:
            "Ingénieur en Biotechnologie (Sup'Biotech) • ESME - Mastère Spécialisé en Numérique et Biotechnologie (Robotique) • Inventeur de la technologie de restitution sensorielle : Digi'Skin",
          image: {
            src: "/legacy/digiskin-legacy/team/gabriel-eleuterio.png",
            alt: "Portrait de Gabriel ELEUTERIO",
          },
        },
        {
          name: "Manon Frajman",
          role: "COO & cofondatrice",
          qualifications:
            "Ingénieure en Biotechnologie (Sup'Biotech) • Product Manager et Clinical Project Manager dans des startups de dispositifs médicaux • Auto-entrepreneur : rédaction de dossiers de financement",
          image: {
            src: "/legacy/digiskin-legacy/team/manon-frajman.png",
            alt: "Portrait de Manon Frajman",
          },
        },
        {
          name: "Edward De Keating - Hart",
          role: "Chirurgien Orthopédiste & cofondateur",
          qualifications:
            "Chirurgien Orthopédiste • Membre de la Société Française de Chirurgie Orthopédique et Traumatologique (SOFCOT) • Membre associé de la Société Française de Chirurgie de la Main (SFCM)",
          image: {
            src: "/legacy/digiskin-legacy/team/edward-de-keating-hart.png",
            alt: "Portrait de Edward De Keating - Hart",
          },
        },
      ],
      collaborations: {
        title: "Écosystème, partenariats et soutiens",
        logos: [
          {
            src: "/legacy/digiskin-legacy/ecosystem/supbiotech.png",
            alt: "Sup’Biotech",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/esme.png",
            alt: "ESME Engineering School",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/i-stem.png",
            alt: "I-Stem",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/imt-starter.png",
            alt: "IMT Starter",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/french-tech-paris-saclay.png",
            alt: "La French Tech Paris-Saclay",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/la-handitech.png",
            alt: "La Handitech",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/handilab.png",
            alt: "Handilab",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/bpifrance.png",
            alt: "Bpifrance",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/reseau-entreprendre-essonne.png",
            alt: "Réseau Entreprendre Essonne",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/women-in-tech-france.png",
            alt: "Women in Tech France",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/airbus-developpement.png",
            alt: "Airbus Développement",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/vitadx.png",
            alt: "VitaDX",
          },
          {
            src: "/legacy/digiskin-legacy/ecosystem/sofcot.png",
            alt: "SOFCOT",
          },
          {
            src: "/legacy/digiskin-legacy/collaborations/sfcm.png",
            alt: "SFCM",
          },
        ],
        note:
          "Logos affichés à titre indicatif. Ils reflètent un contexte clinique/partenarial et ne constituent pas une allégation médicale.",
      },
    },
    security: {
      title: "Sécurité & confidentialité",
      description:
        "ACT conçoit ses produits avec une attention particulière à la confidentialité et à la sécurité des données, selon les bonnes pratiques du domaine. Digi’Skin est présenté comme un dispositif de restitution ; il ne constitue pas un diagnostic.",
    },
    faq: [
      {
        question: "À qui s’adresse Digi’Skin ?",
        answer:
          "Digi’Skin vise les personnes amputées utilisant une prothèse, ainsi que les équipes qui les accompagnent (clinique, rééducation, partenaires).",
      },
      {
        question: "Digi’Skin pose-t-il un diagnostic ?",
        answer:
          "Non. Les informations affichées visent à aider au suivi et à la documentation ; elles ne remplacent pas l’évaluation clinique.",
      },
      {
        question: "Comment fonctionne Digi’Skin ?",
        answer:
          "Digi’Skin combine des capteurs de force, un traitement logiciel en temps réel et un brassard de stimulation pour délivrer un retour haptique synchronisé avec l’interaction.",
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
        "Digi’Skin : dispositif non invasif de retour haptique visant à permettre aux personnes amputées de retrouver le sens du toucher au niveau de leur prothèse (sans promesse de diagnostic).",
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

