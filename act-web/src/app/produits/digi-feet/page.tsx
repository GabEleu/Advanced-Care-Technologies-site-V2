import type { Metadata } from "next";

import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { getProductBySlug } from "@/data/products";

const product = getProductBySlug("digi-feet");

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

export default function DigiFeetPage() {
  if (!product) return null;
  return <ProductPageTemplate product={product} />;
}

