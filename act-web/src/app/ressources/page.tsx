import type { Metadata } from "next";
import { RessourcesContent } from "@/components/pages/RessourcesContent";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Ressources et liens utiles : pages produits, technologie, preuves & validation, et contact.",
  openGraph: {
    title: "Ressources | Advanced Care Technologies",
    description:
      "Pages produits, technologie, preuves & validation, et moyens de contact.",
    type: "website",
  },
};

export default function RessourcesPage() {
  return <RessourcesContent />;
}
