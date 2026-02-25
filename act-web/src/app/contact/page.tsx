import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Advanced Care Technologies pour demander une démonstration de Digi’Skin ou Digi’Feet.",
  openGraph: {
    title: "Contact | Advanced Care Technologies",
    description:
      "Contactez Advanced Care Technologies pour demander une démonstration de Digi’Skin ou Digi’Feet.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              Contact
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              Demander une démo
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Décrivez brièvement votre contexte (patient, professionnel, structure) et l’objectif
              du suivi. Nous reviendrons vers vous pour organiser une démonstration.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
                <div className="text-sm font-extrabold text-foreground/80">
                  Coordonnées
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <span className="font-bold text-foreground/80">Email :</span>{" "}
                    <a
                      className="font-bold text-foreground/80 hover:text-foreground"
                      href="mailto:contact@advancedcaretechnologies.fr"
                    >
                      contact@advancedcaretechnologies.fr
                    </a>
                  </div>
                  <div className="text-xs leading-relaxed">
                    Nous privilégions des échanges structurés et prudents, sans promesse médicale
                    non justifiée.
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
                  Les informations partagées via ce formulaire (email) servent uniquement à
                  organiser une démonstration et à comprendre votre contexte.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

