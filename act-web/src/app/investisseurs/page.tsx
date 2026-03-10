import type { Metadata } from "next";
import { InvestisseursContent } from "@/components/pages/InvestisseursContent";

export const metadata: Metadata = {
  title: "Investisseurs",
  description:
    "Une vision medtech orientée impact humain, validation clinique et intégration terrain. Découvrez l'approche d'Advanced Care Technologies.",
  openGraph: {
    title: "Investisseurs | Advanced Care Technologies",
    description:
      "Une vision medtech orientée impact humain, validation clinique et intégration terrain.",
    type: "website",
  },
};

export default function InvestisseursPage() {
  return <InvestisseursContent />;
}
