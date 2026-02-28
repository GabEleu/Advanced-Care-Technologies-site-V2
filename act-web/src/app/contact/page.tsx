import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Advanced Care Technologies pour demander une démonstration de Digi'Skin ou Digi'Feet.",
  openGraph: {
    title: "Contact | Advanced Care Technologies",
    description:
      "Contactez Advanced Care Technologies pour demander une démonstration de Digi'Skin ou Digi'Feet.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
