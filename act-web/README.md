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

## Produits
- Données: `src/data/products.ts`
- Pages:
  - `src/app/produits/digi-skin/page.tsx`
  - `src/app/produits/digi-feet/page.tsx`
- Template partagé: `src/components/products/ProductPageTemplate.tsx`
- Sticky subnav (ancres + scroll-spy): `src/components/products/ProductStickySubnav.tsx`

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

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
