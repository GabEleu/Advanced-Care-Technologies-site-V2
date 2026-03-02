export type Lang = "fr" | "en";

/* ─────────────────────────────────────────────────────────────
   Full site translations — FR (default) + EN
───────────────────────────────────────────────────────────── */
export const translations = {
  fr: {
    lang: "fr",
    nav: {
      home: "Accueil",
      products: "Produits",
      technology: "Technologie",
      evidence: "Preuves",
      resources: "Ressources",
      contact: "Contact",
      demo: "Demander une démo",
      allProducts: "Voir tous les produits →",
      range: "Gamme",
      menu: "Menu",
    },
    footer: {
      tagline: "Solutions medtech de suivi et d'aide à la décision (sans diagnostic).",
      legal: "Mentions légales",
    },
    home: {
      /* Hero */
      badge: "Medtech • Innovation • Impact humain",
      heroTitle: "La technologie au service de la santé.",
      heroSubtitle: "Redonner une vie pleine de possibilités et de sensations.",
      heroDesc:
        "Chez Advanced Care Technologies, la technologie s'efface derrière l'utilité médicale. Nous unissons ingénierie de pointe et sensibilité utilisateur pour concevoir des dispositifs qui redonnent aux personnes le contrôle de leur corps et de leur vie.",
      heroImageAlt: "Patient retrouvant le sens du toucher grâce à Digi'Skin",
      cta1: "Découvrir Digi'Skin",
      cta2: "Découvrir Digi'Feet",
      cta3: "Nous contacter",
      /* Solutions */
      solutionsEyebrow: "Nos solutions",
      solutionsTitle: "Deux dispositifs, une mission.",
      solutionsDesc: "Des technologies non invasives qui s'intègrent dans la vie quotidienne pour restituer ce que la maladie ou le handicap ont altéré.",
      discoverBtn: "Découvrir",
      digiSkinShort: "Dispositif non invasif de retour haptique qui restitue le sens du toucher aux personnes amputées, grâce à un brassard de stimulation vibro-tactile.",
      digiFeetShort: "Semelle connectée et application dédiée pour le suivi de la santé du pied des personnes diabétiques, avec score indicatif par IA.",
      /* Digi'Skin */
      digiSkinEyebrow: "Produit phare",
      digiSkinTitle: "Digi'Skin — Le sens du toucher, restauré.",
      digiSkinDesc:
        "Digi'Skin est un dispositif non invasif qui restitue le sens du toucher pour les personnes amputées. Des capteurs de force intégrés dans la prothèse captent les interactions avec l'environnement, un traitement logiciel en temps réel encode ces données, et un brassard de stimulation vibro-tactile transmet les sensations au membre résiduel.",
      digiSkinBenefits: [
        "Restaurer des sensations naturelles au quotidien",
        "Retrouver l'équilibre et la confiance dans le geste",
        "Prévenir douleurs fantômes et blessures par manque de retour sensoriel",
      ],
      digiSkinFeaturesTitle: "Caractéristiques clés",
      digiSkinFeatures: [
        {
          label: "Capteur haptique",
          desc: "Mesure fine des forces de contact intégrée dans la prothèse, sans modification invasive.",
        },
        {
          label: "Algorithmes d'IA",
          desc: "Traitement temps réel pour encoder et adapter la stimulation aux gestes de l'utilisateur.",
        },
        {
          label: "Brassard de stimulation",
          desc: "Stimulation vibro-tactile précise sur le membre résiduel pour recréer le retour sensoriel.",
        },
      ],
      digiSkinCta: "Voir Digi'Skin →",
      /* Digi'Feet */
      digiFeetEyebrow: "Nouveau produit",
      digiFeetTitle: "Digi'Feet — La santé du pied, sous contrôle.",
      digiFeetDesc:
        "Digi'Feet est une semelle connectée accompagnée d'une application dédiée pour le suivi de la santé du pied des personnes diabétiques. Les capteurs embarqués combinent mesures physiologiques et données cliniques pour générer, grâce à une IA interne, un score de santé et des indicateurs de suivi personnalisés.",
      digiFeetFeatures: [
        {
          label: "Semelle instrumentée",
          desc: "Capteurs de pression et de température intégrés pour une mesure continue et discrète.",
        },
        {
          label: "Application & tableau de bord",
          desc: "Interface patient et vue praticien pour visualiser l'évolution dans le temps.",
        },
        {
          label: "Score indicatif par IA",
          desc: "Modèle embarqué qui synthétise les données en un indicateur de santé compréhensible.",
        },
        {
          label: "Données unifiées",
          desc: "Fusion des mesures capteurs et des données cliniques pour un suivi global et cohérent.",
        },
      ],
      digiFeetCta: "Voir Digi'Feet →",
      /* Principes */
      principlesEyebrow: "Notre approche",
      principlesTitle: "Quatre principes qui guident chaque décision.",
      principles: [
        {
          title: "Technologie au service de la santé",
          desc: "Chaque choix technique est justifié par un bénéfice concret pour l'utilisateur ou le praticien.",
        },
        {
          title: "Sobriété technologique",
          desc: "Nous privilégions la simplicité d'usage et l'intégration dans les parcours de soins existants.",
        },
        {
          title: "Restauration des sensations",
          desc: "Notre mission fondatrice : rendre aux personnes des capacités sensorielles et motrices perdues.",
        },
        {
          title: "Professionnalisme & humanité",
          desc: "Rigueur clinique et bienveillance sont indissociables dans notre façon de concevoir et de communiquer.",
        },
      ],
      /* Équipe */
      teamEyebrow: "L'équipe",
      teamTitle: "Pluridisciplinaire par conception.",
      teamDesc:
        "Notre équipe réunit ingénieurs, cliniciens et experts en robotique, convaincus qu'une technologie médicale réussie naît du dialogue entre disciplines. Chaque profil apporte une perspective essentielle au service de nos utilisateurs.",
      teamMembers: [
        {
          name: "Gabriel Eleuterio",
          role: "Cofondateur — Ingénierie & systèmes embarqués",
        },
        {
          name: "Manon Frajman",
          role: "Cofondatrice — Design & expérience utilisateur",
        },
        {
          name: "Edward De Keating-Hart",
          role: "Cofondateur — Stratégie & développement clinique",
        },
      ],
      /* CTA final */
      ctaTitle: "Repoussons ensemble les frontières de la technologie médicale.",
      ctaDesc:
        "Vous partagez notre conviction que la technologie peut rendre sa dignité à chaque personne ? Rejoignez-nous — que vous soyez clinicien, partenaire industriel ou investisseur.",
      ctaJoin: "Nous rejoindre",
      ctaSecondary: "Voir nos produits",
      /* Clés conservées pour compatibilité avec d'autres pages */
      techLink: "Technologie →",
      proofLink: "Preuves & validation →",
    },
    productsPage: {
      badge: "Produits",
      title: "Deux produits, une même exigence.",
      desc: "Digi'Skin et Digi'Feet s'inscrivent dans une approche commune : structurer des données pertinentes, présenter des indicateurs compréhensibles et soutenir le suivi, sans promesse médicale non justifiée.",
      productBadge: "Produit",
      newProductBadge: "Nouveau produit",
      see: "Voir",
      demo: "Demander une démo",
      comparatifEyebrow: "Vue d'ensemble",
      comparatifTitle: "Comparatif léger.",
      comparatifDesc:
        "Un résumé scannable pour comprendre l'usage et les briques, sans détails sensibles.",
      colProduct: "Produit",
      colDigiSkin: "Digi'Skin",
      colDigiFeet: "Digi'Feet",
      rows: [
        ["Indicateur principal", "Retour haptique non invasif", "Score santé du pied (IA)"],
        ["Population cible", "Personnes amputées (MS)", "Personnes diabétiques"],
        ["Capteurs", "Combinaison de capteurs", "Combinaison de capteurs"],
        ["Application", "Logiciel temps réel", "App + dashboard"],
        ["Stade", "Prototype avancé", "En développement"],
      ],
      techEyebrow: "Technologie",
      techTitle: "Une infrastructure commune.",
      techDesc:
        "Les deux produits s'appuient sur un pipeline capteurs→traitement→indicateurs conçu pour être robuste, lisible et évolutif.",
      techCards: [
        {
          eyebrow: "Capteurs",
          title: "Mesurer, au plus proche",
          desc: "Dispositifs embarqués conçus pour s'intégrer dans l'usage quotidien, avec une continuité de mesure.",
        },
        {
          eyebrow: "Traitement",
          title: "Structurer le signal",
          desc: "Chaîne logicielle orientée robustesse, traçabilité et indicateurs exploitables.",
        },
        {
          eyebrow: "IA & indicateurs",
          title: "Aider à comprendre",
          desc: "Scores indicatifs et visualisations claires, sans substitution à l'évaluation clinique.",
        },
      ],
      proofEyebrow: "Preuves",
      proofTitle: "Notre démarche de validation.",
      proofDesc:
        "Méthodologie, partenariats et transparence. Voir notre page dédiée pour les détails.",
      seeEvidence: "Voir l'approche clinique →",
    },
    technology: {
      badge: "Technologie",
      title: "De la mesure à la compréhension.",
      desc: "Nos produits combinent capteurs, traitement des signaux et interfaces claires pour aider au suivi dans le temps. Nous privilégions la lisibilité, la sécurité et l'intégration dans des parcours existants.",
      seeProducts: "Voir les produits",
      talkTeam: "Parler à l'équipe",
      cards: [
        {
          eyebrow: "Capteurs",
          title: "Mesurer, au plus proche de l'usage",
          desc: "Dispositifs conçus pour capter des signaux pertinents, avec une attention portée à l'ergonomie et à la continuité de mesure.",
        },
        {
          eyebrow: "Traitement",
          title: "Structurer des signaux hétérogènes",
          desc: "Chaîne logicielle orientée robustesse et traçabilité, pour transformer des mesures en indicateurs et vues exploitables.",
        },
        {
          eyebrow: "IA & Indicateurs",
          title: "Aider à interpréter, pas à diagnostiquer",
          desc: "Des scores, tendances et historiques présentés clairement pour soutenir le suivi, sans remplacer l'évaluation clinique.",
        },
      ],
      principlesEyebrow: "Principes",
      principlesTitle: "Robustesse, lisibilité, sécurité.",
      principlesDesc:
        "Nos choix techniques sont guidés par l'usage réel et la crédibilité dans des contextes cliniques.",
      principles: [
        {
          title: "Lisibilité",
          desc: "Des interfaces pensées pour être scannables rapidement : titres clairs, hiérarchie visuelle, données contextualisées.",
        },
        {
          title: "Sécurité des données",
          desc: "Minimisation, traçabilité et bonnes pratiques de confidentialité intégrées dès la conception.",
        },
        {
          title: "Intégration",
          desc: "Designed to fit into existing care pathways and workflows, rather than requiring adaptation.",
        },
      ],
      ctaTitle: "Envie d'en savoir plus ?",
      ctaDesc: "Décrivez votre contexte et nous organiserons une présentation adaptée.",
      ctaPrimary: "Demander une démo",
      ctaSecondary: "Voir les produits",
    },
    evidence: {
      badge: "Preuves",
      title: "Une approche prudente, orientée preuve.",
      desc: "Nous concevons et évaluons nos solutions avec une attention portée à la méthodologie, à l'intégration terrain et à la transparence. Cette page décrit notre démarche sans inventer de résultats ni promettre un diagnostic.",
      seeProducts: "Découvrir les produits",
      demo: "Demander une démo",
      methodEyebrow: "Méthodologie",
      methodTitle: "Mesurer, documenter, itérer.",
      methodItems: [
        {
          label: "Définition des indicateurs",
          desc: "choix explicites, lisibles, orientés suivi.",
        },
        { label: "Traçabilité", desc: "historique, contexte et cohérence des visualisations." },
        { label: "Évaluation", desc: "retours terrain, tests itératifs, amélioration continue." },
      ],
      disclaimer:
        "Les indicateurs présentés visent à soutenir le suivi. Ils ne constituent pas un résultat clinique validé et ne remplacent pas une évaluation professionnelle.",
      partnersEyebrow: "Partenaires",
      partnersTitle: "Terrains cliniques & soutiens.",
      partnersDesc:
        "Logos affichés à titre indicatif, reflétant un contexte clinique/partenarial et non une allégation médicale.",
      ethicsEyebrow: "Éthique",
      ethicsTitle: "Transparence, sans sur-promettre.",
      ethicsItems: [
        {
          label: "Pas de diagnostic",
          desc: "nos indicateurs sont des aides au suivi, pas des diagnostics.",
        },
        {
          label: "Formulation prudente",
          desc: "chaque texte est relu pour éviter toute allégation médicale non démontrée.",
        },
        {
          label: "Données",
          desc: "minimisation, confidentialité et traçabilité au cœur de la conception.",
        },
      ],
    },
    about: {
      badge: "À propos",
      title: "Concevoir des produits utiles, avec exigence.",
      desc: "Advanced Care Technologies développe des solutions medtech combinant capteurs, logiciel et visualisations claires. Notre priorité : une information compréhensible et exploitable, sans sur-promettre.",
      seeProducts: "Découvrir les produits",
      contact: "Nous contacter",
      valuesCards: [
        {
          eyebrow: "Mission",
          title: "Améliorer le suivi au quotidien",
          desc: "Mettre la technologie au service de l'autonomie, avec des produits orientés usage, intégration et compréhension.",
        },
        {
          eyebrow: "Valeurs",
          title: "Clarté, prudence, sécurité",
          desc: "Chaque produit est conçu pour être compréhensible par les utilisateurs et crédible vis-à-vis des professionnels.",
        },
        {
          eyebrow: "Approche",
          title: "R&D & terrain",
          desc: "Itérations régulières, retours d'usage et partenariats cliniques pour ancrer nos produits dans la réalité.",
        },
      ],
      teamEyebrow: "Équipe",
      teamTitle: "L'équipe fondatrice.",
      ecoEyebrow: "Écosystème",
    },
    resources: {
      badge: "Ressources",
      title: "Tout au même endroit.",
      desc: "Liens utiles pour comprendre nos produits, notre approche technologique et notre démarche de validation. Des ressources additionnelles (PDF, presse, kit média) peuvent être ajoutées à mesure qu'elles sont disponibles.",
      productsEyebrow: "Produits",
      productsTitle: "Pages produits détaillées",
      overviewLink: "Vue d'ensemble des produits →",
      exploreEyebrow: "Explorer",
      techLink: "Technologie →",
      proofLink: "Preuves & validation →",
      aboutLink: "À propos →",
      contactEyebrow: "Contact",
      contactTitle: "Besoin d'un échange rapide ?",
      contactDesc:
        "Décris ton contexte (patient, équipe clinique, partenaire, structure) et nous organiserons une démonstration adaptée.",
      demo: "Demander une démo",
    },
    contact: {
      badge: "Contact",
      title: "Demander une démo",
      desc: "Décrivez brièvement votre contexte (patient, professionnel, structure) et l'objectif du suivi. Nous reviendrons vers vous pour organiser une démonstration.",
      coordTitle: "Coordonnées",
      emailLabel: "Email :",
      disclaimer:
        "Nous privilégions des échanges structurés et prudents, sans promesse médicale non justifiée.",
      privacyNote:
        "Les informations partagées via ce formulaire (email) servent uniquement à organiser une démonstration et à comprendre votre contexte.",
    },
    contactForm: {
      name: "Nom",
      email: "Email",
      organization: "Organisation",
      message: "Message",
      submit: "Envoyer la demande",
      emailLink: "Ou écrire directement par email",
      hint: 'En cliquant sur "Envoyer la demande", votre client email s\'ouvrira avec un message prérempli.',
      mailSubject: "Demande de démo — Advanced Care Technologies",
      mailName: "Nom",
      mailEmail: "Email",
      mailOrg: "Organisation",
      mailMessage: "Message",
    },
    scrollytelling: {
      scroll: "Scroll",
      gallery: "Visuels",
      galleryTitle: "Le dispositif en images",
      clinicalEyebrow: "Terrain",
      clinicalTitle: "Partenaires & terrains cliniques",
      ecoEyebrow: "Écosystème",
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes",
      faqSubtitle: "Réponses courtes, précises et prudentes.",
      contactEyebrow: "Contact",
      contactTitle: "Parlons de votre contexte",
      contactDesc:
        "Décrivez votre besoin et nous organiserons une démonstration adaptée — parcours, contraintes, objectifs.",
      howEyebrow: "Fonctionnement",
      howTitle: "Comment ça marche",
      step: "Étape",
    },
    digiSkinBeats: {
      titles: [
        "RETOUR SENSORIEL",
        "LE DÉFI",
        "CAPTEURS DE POINTE",
        "TRAITEMENT IA EN TEMPS RÉEL",
        "SENSATIONS PRECISES",
        "EN CHIFFRES",
        "CONÇU POUR VOUS",
        "AU-DELÀ DU MEMBRE",
      ],
      b02Subtitle:
        "L'absence de sensations au niveau d'une prothèse peut compliquer certains gestes du quotidien.",
      b02Bullets: [
        "Perte du sens du toucher après amputation",
        "Risques de blessures sans retour sensitif",
        "Impact sur l'autonomie et la qualité de vie",
        "Besoin d'une solution non invasive, adaptée à l'usage quotidien",
      ],
      b06Subtitle: "Des enjeux réels, à l'échelle mondiale.",
      b08Subtitle: "Un écosystème au service de l'autonomie.",
      b08Bullets: [
        "Restaurer des sensations",
        "Retrouver l'équilibre",
        "Éviter douleurs et blessures",
      ],
      forWho: "Pour qui ?",
    },
    digiFeetBeats: {
      titles: [
        "SEMELLE INTELLIGENTE",
        "LE DÉFI",
        "CAPTEURS EMBARQUÉS",
        "DONNÉES UNIFIÉES",
        "SCORE IA DE SANTÉ",
        "EN CHIFFRES",
        "CONÇU POUR VOUS",
        "AU-DELÀ DU PIED",
      ],
      b02Subtitle: "Le pied diabétique : un enjeu de suivi quotidien.",
      b02Bullets: [
        "Le diabète peut altérer la sensibilité du pied et augmenter le risque de complications",
        "Un suivi régulier et structuré est essentiel pour détecter les évolutions précocement",
        "Les données cliniques isolées ne suffisent pas à une vision complète dans le temps",
        "Patients et professionnels ont besoin d'outils accessibles, fiables et intuitifs",
      ],
      b06Subtitle: "Le diabète et le pied : des chiffres qui parlent.",
      b06Stats: [
        {
          value: "537M",
          line1: "personnes diabétiques",
          line2: "dans le monde (IDF 2021)",
        },
        {
          value: "25%",
          line1: "des diabétiques développent",
          line2: "une plaie du pied au cours de leur vie",
        },
        {
          value: "85%",
          line1: "des amputations du pied",
          line2: "sont précédées d'une plaie évitable",
        },
      ],
      b08Subtitle: "Un suivi structuré, au service de l'autonomie.",
      b08Bullets: [
        "Visualisation claire de l'évolution dans le temps",
        "Historique consultable par le patient et son équipe soignante",
        "Aide à la décision sans substitution à l'évaluation clinique",
        "Conçu pour s'intégrer dans les parcours de soins existants",
      ],
      forWho: "Pour qui ?",
    },
  },

  en: {
    lang: "en",
    nav: {
      home: "Home",
      products: "Products",
      technology: "Technology",
      evidence: "Evidence",
      resources: "Resources",
      contact: "Contact",
      demo: "Request a Demo",
      allProducts: "View all products →",
      range: "Range",
      menu: "Menu",
    },
    footer: {
      tagline: "Medtech monitoring and decision-support solutions (without diagnosis).",
      legal: "Legal notices",
    },
    home: {
      /* Hero */
      badge: "Medtech • Innovation • Human impact",
      heroTitle: "Technology in the service of health.",
      heroSubtitle: "Restoring human autonomy and dignity.",
      heroDesc:
        "At Advanced Care Technologies, technology steps back to serve medical utility. We combine cutting-edge engineering with user sensitivity to design devices that give people back control of their bodies and their lives.",
      heroImageAlt: "Patient regaining the sense of touch with Digi'Skin",
      cta1: "Discover Digi'Skin",
      cta2: "Discover Digi'Feet",
      cta3: "Contact us",
      /* Solutions */
      solutionsEyebrow: "Our solutions",
      solutionsTitle: "Two devices, one mission.",
      solutionsDesc: "Non-invasive technologies that integrate into everyday life to restore what illness or disability has altered.",
      discoverBtn: "Discover",
      digiSkinShort: "Non-invasive haptic feedback device that restores the sense of touch for amputees, via a vibro-tactile stimulation bracelet.",
      digiFeetShort: "Connected insole and dedicated app for monitoring foot health in diabetic patients, with an AI-based health score.",
      /* Digi'Skin */
      digiSkinEyebrow: "Flagship product",
      digiSkinTitle: "Digi'Skin — The sense of touch, restored.",
      digiSkinDesc:
        "Digi'Skin is a non-invasive device that restores the sense of touch for amputees. Force sensors integrated into the prosthesis capture interactions with the environment, real-time software processing encodes the data, and a vibro-tactile stimulation bracelet transmits sensations to the residual limb.",
      digiSkinBenefits: [
        "Restore natural sensations in everyday life",
        "Regain balance and confidence in movement",
        "Prevent phantom pain and injuries caused by lack of sensory feedback",
      ],
      digiSkinFeaturesTitle: "Key features",
      digiSkinFeatures: [
        {
          label: "Haptic sensor",
          desc: "Fine contact force measurement integrated into the prosthesis, without invasive modification.",
        },
        {
          label: "AI algorithms",
          desc: "Real-time processing to encode and adapt stimulation to the user's gestures.",
        },
        {
          label: "Stimulation bracelet",
          desc: "Precise vibro-tactile stimulation on the residual limb to recreate sensory feedback.",
        },
      ],
      digiSkinCta: "See Digi'Skin →",
      /* Digi'Feet */
      digiFeetEyebrow: "New product",
      digiFeetTitle: "Digi'Feet — Foot health, under control.",
      digiFeetDesc:
        "Digi'Feet is a connected insole with a dedicated app for monitoring the foot health of diabetic patients. Onboard sensors combine physiological measurements with clinical data to generate, via an internal AI, a health score and personalised tracking indicators.",
      digiFeetFeatures: [
        {
          label: "Instrumented insole",
          desc: "Integrated pressure and temperature sensors for continuous, discreet measurement.",
        },
        {
          label: "App & dashboard",
          desc: "Patient interface and practitioner view to visualise progress over time.",
        },
        {
          label: "AI health score",
          desc: "An embedded model that synthesises data into a clear, understandable health indicator.",
        },
        {
          label: "Unified data",
          desc: "Fusion of sensor readings and clinical data for comprehensive, coherent monitoring.",
        },
      ],
      digiFeetCta: "See Digi'Feet →",
      /* Principles */
      principlesEyebrow: "Our approach",
      principlesTitle: "Four principles that guide every decision.",
      principles: [
        {
          title: "Technology in the service of health",
          desc: "Every technical choice is justified by a tangible benefit for the user or practitioner.",
        },
        {
          title: "Technological restraint",
          desc: "We favour ease of use and seamless integration into existing care pathways.",
        },
        {
          title: "Restoring sensation",
          desc: "Our founding mission: giving people back sensory and motor abilities they have lost.",
        },
        {
          title: "Professionalism & humanity",
          desc: "Clinical rigour and compassion are inseparable in how we design and communicate.",
        },
      ],
      /* Team */
      teamEyebrow: "The team",
      teamTitle: "Multidisciplinary by design.",
      teamDesc:
        "Our team brings together engineers, clinicians and robotics experts, united by the conviction that successful medical technology is born from cross-disciplinary dialogue. Every profile contributes an essential perspective in service of our users.",
      teamMembers: [
        {
          name: "Gabriel Eleuterio",
          role: "Co-founder — Engineering & embedded systems",
        },
        {
          name: "Manon Frajman",
          role: "Co-founder — Design & user experience",
        },
        {
          name: "Edward De Keating-Hart",
          role: "Co-founder — Strategy & clinical development",
        },
      ],
      /* Final CTA */
      ctaTitle: "Let's push the boundaries of medical technology together.",
      ctaDesc:
        "Do you share our belief that technology can restore dignity to every person? Join us — whether you are a clinician, industrial partner, or investor.",
      ctaJoin: "Join us",
      ctaSecondary: "See our products",
      /* Keys kept for compatibility with other pages */
      techLink: "Technology →",
      proofLink: "Evidence & validation →",
    },
    productsPage: {
      badge: "Products",
      title: "Two products, one standard of excellence.",
      desc: "Digi'Skin and Digi'Feet share a common approach: structuring relevant data, presenting understandable indicators and supporting monitoring, without unjustified medical promises.",
      productBadge: "Product",
      newProductBadge: "New product",
      see: "View",
      demo: "Request a Demo",
      comparatifEyebrow: "Overview",
      comparatifTitle: "Quick comparison.",
      comparatifDesc:
        "A scannable summary to understand usage and key components, without sensitive details.",
      colProduct: "Product",
      colDigiSkin: "Digi'Skin",
      colDigiFeet: "Digi'Feet",
      rows: [
        ["Main indicator", "Non-invasive haptic feedback", "Foot health score (AI)"],
        ["Target population", "Amputees (upper limb)", "People with diabetes"],
        ["Sensors", "Sensor combination", "Sensor combination"],
        ["Application", "Real-time software", "App + dashboard"],
        ["Stage", "Advanced prototype", "In development"],
      ],
      techEyebrow: "Technology",
      techTitle: "A shared infrastructure.",
      techDesc:
        "Both products rely on a sensors→processing→indicators pipeline designed to be robust, readable and scalable.",
      techCards: [
        {
          eyebrow: "Sensors",
          title: "Measure, up close",
          desc: "Embedded devices designed to integrate into everyday use, with continuous measurement.",
        },
        {
          eyebrow: "Processing",
          title: "Structure the signal",
          desc: "Software pipeline focused on robustness, traceability and actionable indicators.",
        },
        {
          eyebrow: "AI & indicators",
          title: "Help understand",
          desc: "Indicative scores and clear visualizations, without replacing clinical evaluation.",
        },
      ],
      proofEyebrow: "Evidence",
      proofTitle: "Our validation approach.",
      proofDesc:
        "Methodology, partnerships and transparency. See our dedicated page for details.",
      seeEvidence: "View clinical approach →",
    },
    technology: {
      badge: "Technology",
      title: "From measurement to understanding.",
      desc: "Our products combine sensors, signal processing and clear interfaces to support long-term monitoring. We prioritize readability, security and integration into existing pathways.",
      seeProducts: "View products",
      talkTeam: "Talk to the team",
      cards: [
        {
          eyebrow: "Sensors",
          title: "Measure, close to real use",
          desc: "Devices designed to capture relevant signals, with a focus on ergonomics and measurement continuity.",
        },
        {
          eyebrow: "Processing",
          title: "Structure heterogeneous signals",
          desc: "Software pipeline focused on robustness and traceability, transforming measurements into actionable indicators.",
        },
        {
          eyebrow: "AI & Indicators",
          title: "Help interpret, not diagnose",
          desc: "Scores, trends and history presented clearly to support follow-up, without replacing clinical evaluation.",
        },
      ],
      principlesEyebrow: "Principles",
      principlesTitle: "Robustness, readability, security.",
      principlesDesc:
        "Our technical choices are guided by real-world use and credibility in clinical contexts.",
      principles: [
        {
          title: "Readability",
          desc: "Interfaces designed to be quickly scannable: clear titles, visual hierarchy, contextualized data.",
        },
        {
          title: "Data security",
          desc: "Minimization, traceability and privacy best practices integrated from the design stage.",
        },
        {
          title: "Integration",
          desc: "Designed to fit into existing care pathways and workflows, rather than requiring adaptation.",
        },
      ],
      ctaTitle: "Want to learn more?",
      ctaDesc: "Describe your context and we will organize a tailored presentation.",
      ctaPrimary: "Request a Demo",
      ctaSecondary: "View products",
    },
    evidence: {
      badge: "Evidence",
      title: "A cautious, evidence-oriented approach.",
      desc: "We design and evaluate our solutions with careful attention to methodology, field integration and transparency. This page describes our approach without fabricating results or promising a diagnosis.",
      seeProducts: "Discover products",
      demo: "Request a Demo",
      methodEyebrow: "Methodology",
      methodTitle: "Measure, document, iterate.",
      methodItems: [
        { label: "Indicator definition", desc: "explicit, readable, monitoring-oriented choices." },
        { label: "Traceability", desc: "history, context and consistency of visualizations." },
        {
          label: "Evaluation",
          desc: "field feedback, iterative testing, continuous improvement.",
        },
      ],
      disclaimer:
        "The indicators presented aim to support monitoring. They do not constitute a validated clinical result and do not replace a professional evaluation.",
      partnersEyebrow: "Partners",
      partnersTitle: "Clinical sites & supporters.",
      partnersDesc:
        "Logos shown for reference, reflecting a clinical/partnership context and not a medical claim.",
      ethicsEyebrow: "Ethics",
      ethicsTitle: "Transparency, without over-promising.",
      ethicsItems: [
        {
          label: "No diagnosis",
          desc: "our indicators are monitoring aids, not diagnoses.",
        },
        {
          label: "Cautious wording",
          desc: "every text is reviewed to avoid any unproven medical claim.",
        },
        {
          label: "Data",
          desc: "minimization, confidentiality and traceability at the heart of the design.",
        },
      ],
    },
    about: {
      badge: "About",
      title: "Designing useful products, with high standards.",
      desc: "Advanced Care Technologies develops medtech solutions combining sensors, software and clear visualizations. Our priority: understandable and actionable information, without over-promising.",
      seeProducts: "Discover products",
      contact: "Contact us",
      valuesCards: [
        {
          eyebrow: "Mission",
          title: "Improve daily monitoring",
          desc: "Putting technology at the service of autonomy, with products focused on use, integration and understanding.",
        },
        {
          eyebrow: "Values",
          title: "Clarity, caution, security",
          desc: "Each product is designed to be understandable for users and credible for healthcare professionals.",
        },
        {
          eyebrow: "Approach",
          title: "R&D & field work",
          desc: "Regular iterations, usage feedback and clinical partnerships to ground our products in reality.",
        },
      ],
      teamEyebrow: "Team",
      teamTitle: "The founding team.",
      ecoEyebrow: "Ecosystem",
    },
    resources: {
      badge: "Resources",
      title: "Everything in one place.",
      desc: "Useful links to understand our products, our technological approach and our validation process. Additional resources (PDF, press, media kit) may be added as they become available.",
      productsEyebrow: "Products",
      productsTitle: "Detailed product pages",
      overviewLink: "Products overview →",
      exploreEyebrow: "Explore",
      techLink: "Technology →",
      proofLink: "Evidence & validation →",
      aboutLink: "About →",
      contactEyebrow: "Contact",
      contactTitle: "Need a quick chat?",
      contactDesc:
        "Describe your context (patient, clinical team, partner, structure) and we will organize a tailored demo.",
      demo: "Request a Demo",
    },
    contact: {
      badge: "Contact",
      title: "Request a Demo",
      desc: "Briefly describe your context (patient, professional, structure) and the monitoring objective. We will get back to you to organize a demonstration.",
      coordTitle: "Contact details",
      emailLabel: "Email:",
      disclaimer:
        "We favor structured and cautious exchanges, without unjustified medical promises.",
      privacyNote:
        "Information shared via this form (email) is used solely to organize a demonstration and understand your context.",
    },
    contactForm: {
      name: "Name",
      email: "Email",
      organization: "Organization",
      message: "Message",
      submit: "Send request",
      emailLink: "Or write directly by email",
      hint: 'By clicking "Send request", your email client will open with a pre-filled message.',
      mailSubject: "Demo request — Advanced Care Technologies",
      mailName: "Name",
      mailEmail: "Email",
      mailOrg: "Organization",
      mailMessage: "Message",
    },
    scrollytelling: {
      scroll: "Scroll",
      gallery: "Visuals",
      galleryTitle: "The device in pictures",
      clinicalEyebrow: "Field",
      clinicalTitle: "Partners & clinical sites",
      ecoEyebrow: "Ecosystem",
      faqEyebrow: "FAQ",
      faqTitle: "Frequently asked questions",
      faqSubtitle: "Short, precise and cautious answers.",
      contactEyebrow: "Contact",
      contactTitle: "Let's talk about your context",
      contactDesc:
        "Describe your need and we will organize a tailored demonstration — pathways, constraints, objectives.",
      howEyebrow: "How it works",
      howTitle: "How it works",
      step: "Step",
    },
    digiSkinBeats: {
      titles: [
        "SENSORY FEEDBACK",
        "THE CHALLENGE",
        "CUTTING-EDGE SENSORS",
        "REAL-TIME AI PROCESSING",
        "PRECISE SENSATIONS",
        "BY THE NUMBERS",
        "DESIGNED FOR YOU",
        "BEYOND THE LIMB",
      ],
      b02Subtitle:
        "The absence of sensation at the prosthesis level can complicate everyday interactions.",
      b02Bullets: [
        "Loss of the sense of touch following amputation",
        "Risk of injury without sensory feedback",
        "Impact on autonomy and quality of life",
        "Need for a non-invasive solution adapted to everyday use",
      ],
      b06Subtitle: "Real challenges, on a global scale.",
      b08Subtitle: "An ecosystem in the service of autonomy.",
      b08Bullets: [
        "Restore sensations",
        "Regain balance",
        "Avoid pain and injuries",
      ],
      forWho: "For whom?",
    },
    digiFeetBeats: {
      titles: [
        "SMART INSOLE",
        "THE CHALLENGE",
        "EMBEDDED SENSORS",
        "UNIFIED DATA",
        "AI HEALTH SCORE",
        "BY THE NUMBERS",
        "DESIGNED FOR YOU",
        "BEYOND THE FOOT",
      ],
      b02Subtitle: "The diabetic foot: a daily monitoring challenge.",
      b02Bullets: [
        "Diabetes can alter foot sensitivity and increase the risk of complications",
        "Regular and structured monitoring is essential to detect changes early",
        "Isolated clinical data alone is not enough for a complete view over time",
        "Patients and professionals need accessible, reliable and intuitive tools",
      ],
      b06Subtitle: "Diabetes and the foot: numbers that speak.",
      b06Stats: [
        {
          value: "537M",
          line1: "people with diabetes",
          line2: "worldwide (IDF 2021)",
        },
        {
          value: "25%",
          line1: "of diabetics develop",
          line2: "a foot wound during their lifetime",
        },
        {
          value: "85%",
          line1: "of lower limb amputations",
          line2: "are preceded by an avoidable wound",
        },
      ],
      b08Subtitle: "Structured monitoring in the service of autonomy.",
      b08Bullets: [
        "Clear visualization of progress over time",
        "History accessible by the patient and their care team",
        "Decision support without replacing clinical evaluation",
        "Designed to integrate into existing care pathways",
      ],
      forWho: "For whom?",
    },
  },
} as const;

/* ─────────────────────────────────────────────────────────────
   Product translations (EN overrides for all product fields)
───────────────────────────────────────────────────────────── */
export type ProductLang = {
  tagline: string;
  pitch: string;
  benefits: string[];
  howItWorks: { title: string; description: string }[];
  features: { title: string; description: string }[];
  audiences: { title: string; description: string }[];
  security: { title: string; description: string };
  faq: { question: string; answer: string }[];
  numbers?: {
    title: string;
    stats: { value?: string; line1: string; line2?: string }[];
  };
  mission?: { title: string; subtitle?: string; cards: string[] };
  primaryCta: { label: string };
  secondaryCta?: { label: string };
};

export const productTranslationsEn: Record<string, ProductLang> = {
  "digi-skin": {
    tagline: "Regaining the sense of touch at the prosthesis.",
    pitch:
      "Advanced Care Technologies is developing a non-invasive haptic feedback device to help amputees regain the sense of touch at their prosthesis: Digi'Skin. By restoring the sense of touch, Digi'Skin aims to help patients interact with their environment again.",
    benefits: [
      "Restore touch sensation",
      "Regain balance",
      "Avoid pain and injuries",
      "Non-invasive haptic feedback, designed for daily use",
      "Real-time processing and synchronized feedback",
    ],
    mission: {
      title: "Our mission is to improve the quality of life and autonomy of patients",
      subtitle: "With Digi'Skin, we aim to:",
      cards: ["Restore sensations", "Regain balance", "Avoid pain and injuries"],
    },
    numbers: {
      title: "By the numbers",
      stats: [
        { value: "10%", line1: "of the world population has", line2: "a sensory impairment" },
        { value: "50%", line1: "of cases associated with", line2: "chronic pain" },
        { value: "15 k€", line1: "average cost", line2: "per patient" },
      ],
    },
    howItWorks: [
      {
        title: "Integrated force sensors",
        description: "Force sensors integrated into the prosthetic glove, capturing touch information.",
      },
      {
        title: "Real-time software",
        description:
          "Software transmitting signals in real time based on the context of use or the user's sensory profile.",
      },
      {
        title: "Stimulation armband",
        description:
          "A stimulation armband attached to the arm, delivering multi-zone vibro-tactile feedback synchronized with the sensors.",
      },
    ],
    features: [
      {
        title: "Haptic sensor",
        description:
          "High-sensitivity pressure sensor, designed for integration as close as possible to the point of interaction.",
      },
      {
        title: "AI algorithms",
        description: "Real-time processing and reconstruction of tactile stimuli for adapted feedback.",
      },
      {
        title: "Stimulation armband",
        description:
          "Multi-zone vibro-tactile feedback synchronized with sensors, to support sensory restitution.",
      },
    ],
    audiences: [
      {
        title: "Amputee patients",
        description:
          "To achieve a better sensation when using a prosthesis, within a care support framework.",
      },
      {
        title: "Clinicians & rehabilitation teams",
        description:
          "To integrate a haptic feedback device into care pathways and protocols (without any diagnostic claim).",
      },
      {
        title: "Prosthetists & partners",
        description:
          "To explore field integrations and use cases, with a cautious and documented approach.",
      },
    ],
    security: {
      title: "Security & Privacy",
      description:
        "ACT designs its products with particular attention to data confidentiality and security, following best practices in the field. Digi'Skin is presented as a sensory restitution device; it does not constitute a diagnosis.",
    },
    faq: [
      {
        question: "Who is Digi'Skin for?",
        answer:
          "Digi'Skin is intended for amputees using a prosthesis, as well as the teams supporting them (clinical, rehabilitation, partners).",
      },
      {
        question: "Does Digi'Skin provide a diagnosis?",
        answer:
          "No. The information displayed aims to support monitoring and documentation; it does not replace clinical evaluation.",
      },
      {
        question: "How does Digi'Skin work?",
        answer:
          "Digi'Skin combines force sensors, real-time software processing and a stimulation armband to deliver haptic feedback synchronized with the interaction.",
      },
      {
        question: "How to request a demo?",
        answer: "You can contact us via the Contact page to organize a demonstration.",
      },
    ],
    primaryCta: { label: "Request a Demo" },
    secondaryCta: { label: "View Digi'Feet" },
  },

  "digi-feet": {
    tagline: "Monitor foot health, prevent complications.",
    pitch:
      "Digi'Feet combines a connected insole and an application to track the health of the feet in people with diabetes. Embedded sensors and clinical data provide a personalized view and a foot health score calculated by an in-house AI.",
    benefits: [
      "Continuous and personalized foot monitoring",
      "Sensor data + clinical data in a unified view",
      "Foot health score and trends over time",
      "Patient/healthcare professional monitoring support",
    ],
    howItWorks: [
      {
        title: "Insole measurement",
        description: "The insole collects measurements via embedded sensors during use.",
      },
      {
        title: "Aggregation in the app",
        description:
          "The app aggregates measurements and entered clinical data for a unified reading.",
      },
      {
        title: "Score & indicators",
        description:
          "The in-house AI calculates a foot health score and monitoring indicators from available data.",
      },
      {
        title: "Visualization & history",
        description:
          "Clear visualization, history and monitoring guidance elements facilitate understanding over time (without diagnosis).",
      },
    ],
    features: [
      {
        title: "Embedded sensors",
        description:
          "Measurements collected as close as possible to daily life, with a device designed to be worn.",
      },
      {
        title: "App & dashboard",
        description:
          "Hierarchical views, quick reading and access to history for contextualization.",
      },
      {
        title: "In-house AI score",
        description:
          "An indicative score and trends over time to help with monitoring, without replacing clinical evaluation.",
      },
      {
        title: "Unified data",
        description:
          "Combination of sensor data and clinical information for a more complete view.",
      },
    ],
    audiences: [
      {
        title: "Patients",
        description:
          "To help track progress over time and promote better understanding of trends.",
      },
      {
        title: "Healthcare professionals",
        description:
          "To have structured monitoring elements, supporting dialogue and decision-making.",
      },
      {
        title: "Healthcare structures",
        description: "To deploy consistent monitoring and facilitate care pathway organization.",
      },
    ],
    security: {
      title: "Security & Privacy",
      description:
        "Data is processed with particular attention to confidentiality and security. The information presented is monitoring guidance indicators and does not constitute a diagnosis.",
    },
    faq: [
      {
        question: "Who is Digi'Feet for?",
        answer:
          "Digi'Feet is intended for foot health monitoring in people with diabetes, in connection with healthcare professionals and structures.",
      },
      {
        question: "What types of data are used?",
        answer:
          "Measurements from embedded sensors and entered clinical data, aggregated in a unified view.",
      },
      {
        question: "Is the score a diagnosis?",
        answer:
          "No. The score is a monitoring guidance and trend visualization indicator; it does not replace a clinical evaluation.",
      },
      {
        question: "How to request a demo?",
        answer:
          "Go to the Contact page to describe your context and schedule a demonstration.",
      },
    ],
    primaryCta: { label: "Request a Demo" },
    secondaryCta: { label: "View products" },
  },
};

export type Translations = (typeof translations)["fr"];
