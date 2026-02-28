import type { Metadata } from "next";
import { ProductsContent } from "@/components/pages/ProductsContent";

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Découvrez Digi'Skin et Digi'Feet, les produits Advanced Care Technologies : solutions medtech orientées suivi, données et indicateurs.",
  openGraph: {
    title: "Produits | Advanced Care Technologies",
    description:
      "Découvrez Digi'Skin et Digi'Feet : deux produits pour structurer le suivi et la visualisation d'indicateurs.",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
