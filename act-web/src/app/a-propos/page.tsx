import type { Metadata } from "next";
import { AProposContent } from "@/components/pages/AProposContent";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Advanced Care Technologies : mission, valeurs et équipe. Une approche medtech orientée suivi, clarté et intégration terrain.",
  openGraph: {
    title: "À propos | Advanced Care Technologies",
    description:
      "Mission, valeurs et équipe d'Advanced Care Technologies. Une approche prudente, orientée suivi et crédibilité clinique.",
    type: "website",
  },
};

export default function AProposPage() {
  return <AProposContent />;
}
