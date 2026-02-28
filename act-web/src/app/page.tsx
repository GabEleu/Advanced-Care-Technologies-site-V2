import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Advanced Care Technologies conçoit des solutions medtech combinant capteurs, logiciel et indicateurs, pour aider au suivi dans un cadre prudent et professionnel.",
  openGraph: {
    title: "Advanced Care Technologies",
    description:
      "Tech au service de la santé : capteurs, logiciel et indicateurs pour aider au suivi, avec une communication prudente.",
    type: "website",
  },
};

export default function Home() {
  return <HomeContent />;
}
