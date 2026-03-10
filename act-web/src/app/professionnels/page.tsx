import type { Metadata } from "next";
import { ProfessionnelsContent } from "@/components/pages/ProfessionnelsContent";

export const metadata: Metadata = {
  title: "Professionnels de santé",
  description:
    "Des outils de suivi et d'aide à la décision pour intégrer dans vos parcours de soins : Digi'Skin et Digi'Feet.",
  openGraph: {
    title: "Professionnels de santé | Advanced Care Technologies",
    description:
      "Des outils de suivi et d'aide à la décision pour intégrer dans vos parcours de soins, sans promesse de diagnostic.",
    type: "website",
  },
};

export default function ProfessionnelsPage() {
  return <ProfessionnelsContent />;
}
