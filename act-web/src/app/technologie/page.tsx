import type { Metadata } from "next";
import { TechnologieContent } from "@/components/pages/TechnologieContent";

export const metadata: Metadata = {
  title: "Technologie",
  description:
    "Découvrez l'approche technologique d'Advanced Care Technologies : capteurs, traitement des signaux, visualisation et IA interne, au service du suivi.",
  openGraph: {
    title: "Technologie | Advanced Care Technologies",
    description:
      "Capteurs, traitement des signaux, visualisation et IA interne : une plateforme orientée suivi, lisibilité et sécurité.",
    type: "website",
  },
};

export default function TechnologiePage() {
  return <TechnologieContent />;
}
