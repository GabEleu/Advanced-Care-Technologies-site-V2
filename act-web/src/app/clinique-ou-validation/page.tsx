import type { Metadata } from "next";
import { CliniqueContent } from "@/components/pages/CliniqueContent";

export const metadata: Metadata = {
  title: "Preuves & validation",
  description:
    "Notre approche clinique et de validation : méthodologie, partenaires, éthique et transparence, sans allégations non démontrées.",
  openGraph: {
    title: "Preuves & validation | Advanced Care Technologies",
    description:
      "Méthodologie, partenaires et principes d'éthique : une approche prudente, orientée preuve et intégration terrain.",
    type: "website",
  },
};

export default function CliniqueOuValidationPage() {
  return <CliniqueContent />;
}
