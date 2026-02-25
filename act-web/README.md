## Getting Started

### Prérequis
- Node.js 20+

### Installer

```bash
npm install
```

### Développer

```bash
npm run dev
```

Ouvrir `http://localhost:3000`.

### Qualité & build

```bash
npm run lint
npm run build
```

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Déploiement statique (GitHub Pages) via `output: "export"`

## Typographies
- Texte courant: **Lexend**
- Titres (H1–H3): **Montserrat Alternates**

## Navigation
- Navigation principale: `src/components/site/MainNavigation.tsx`
  - barre fixe semi-transparente + blur
  - onglet actif via `usePathname()`
  - dropdown “Produits” (Digi’Skin / Digi’Feet)
- Indicateur de progression vertical: `src/components/site/ScrollProgressBar.tsx`
  - basé sur `useEffect` + pourcentage de scroll
  - position fixe sur le bord droit, sous la nav

## Produits
- Données: `src/data/products.ts`
- Pages:
  - `src/app/produits/digi-skin/page.tsx`
  - `src/app/produits/digi-feet/page.tsx`
- Template partagé: `src/components/products/ProductPageTemplate.tsx`
- Sticky subnav (ancres + scroll-spy): `src/components/products/ProductStickySubnav.tsx`
- Galerie/carrousel: `src/components/products/ImageCarousel.tsx`
  - 1 visuel mobile / 2 visuels desktop
  - navigation clavier (flèches gauche/droite), boutons précédent/suivant
  - glissé tactile mobile et focus visible

## Animations (subtiles, accessibles)
- Reveal on view: `src/components/motion/Reveal.tsx`
- Parallax léger sur médias: `src/components/motion/ParallaxMedia.tsx`
- Respect de `prefers-reduced-motion`

## Design system minimal
- `src/components/ui/Button.tsx` (variants)
- `src/components/ui/Card.tsx`
- `src/components/ui/Section.tsx`

## SEO
- `src/app/sitemap.ts` + `src/app/robots.ts` (compatibles export statique)

## Accessibilité
- Focus visible sur les éléments interactifs (nav, carrousel, CTA).
- `aria-current` pour les onglets actifs dans la subnav produit.
- Navigation clavier pour le carrousel (`ArrowLeft` / `ArrowRight`).
- Respect de `prefers-reduced-motion` sur les animations.
