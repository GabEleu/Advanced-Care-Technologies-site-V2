import type { Metadata } from "next";

import { DigiSkinScrollytelling } from "@/components/products/DigiSkinScrollytelling";
import { getProductBySlug } from "@/data/products";

const product = getProductBySlug("digi-skin");

export const metadata: Metadata = product
  ? {
      title: product.seo.title,
      description: product.seo.description,
      openGraph: {
        title: product.seo.title,
        description: product.seo.description,
        type: "website",
      },
    }
  : {};

export default function DigiSkinPage() {
  if (!product) return null;
  return <DigiSkinScrollytelling product={product} />;
}
