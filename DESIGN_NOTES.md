# DESIGN NOTES (UI/UX)

Objectif: une expérience premium “medtech”, lisible et orientée conversion, sans surcharger.

## Typographie
- **Texte courant**: Lexend (variable `--font-sans`)
- **Titres (H1–H3)**: Montserrat Alternates (variable `--font-display`)
- **Hiérarchie**:
  - H1: 4xl → 6xl (desktop), extra-bold, tracking-tight
  - H2: 3xl → 4xl, extra-bold
  - Eyebrow: xs, uppercase, tracking-widest, muted-foreground

## Spacing & layout
- **Container**: `max-w-6xl`, padding `px-6 md:px-8`
- **Rythme vertical**:
  - Sections: `py-16 md:py-20`
  - Cards: `p-7` ou `p-8` avec `rounded-3xl`
- **Grilles**:
  - 2 colonnes (md) pour les pages marketing
  - 12 colonnes (md) pour les sections “storytelling” (titre à gauche, contenu à droite)

## Composants (patterns)
- **CTA primaire**: bouton plein `bg-primary`, `rounded-full`, `font-extrabold`, hover `bg-primary/90`
- **CTA secondaire**: bouton bordé `border bg-card`, hover `bg-muted`
- **Cards**: `border bg-card shadow-sm`, hover léger sur les liens
- **Focus**: toujours `focus-visible:ring-2 ring-ring`
- **Sticky subnav** (pages produit + page /produits):
  - `sticky top-16`, `backdrop-blur`, chips cliquables vers ancres
  - Utiliser `scroll-mt-28` sur les sections ciblées

## Ton & crédibilité
- **Langage**: neutre, informatif, orienté suivi et usage
- **À éviter**: promesses cliniques non démontrées, formulation “diagnostic”
- **À inclure**: disclaimers courts (“aide au suivi”, “ne remplace pas l’évaluation clinique”)

## Responsive
- Mobile-first: boutons en colonne, sections compactes, navigation claire
- Grilles: `sm:grid-cols-2`, `md:grid-cols-2/3/12`, `lg:grid-cols-4` si nécessaire

## Performance
- Préférer des images optimisées (formats adaptés) et limiter les animations
- Micro-interactions: hover/transition seulement (pas de JS lourd)

