import type { Metadata } from "next";
import { PatientsContent } from "@/components/pages/PatientsContent";

export const metadata: Metadata = {
  title: "Patients",
  description:
    "Des solutions conçues pour les patients : Digi'Skin et Digi'Feet pour améliorer le quotidien et soutenir l'autonomie.",
  openGraph: {
    title: "Patients | Advanced Care Technologies",
    description:
      "Des dispositifs conçus pour améliorer votre quotidien et soutenir votre autonomie, dans un cadre d'accompagnement adapté.",
    type: "website",
  },
};

export default function PatientsPage() {
  return <PatientsContent />;
}
