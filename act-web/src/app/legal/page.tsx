
"use client";
import type { Metadata } from "next";

import { Container } from "@/components/site/Container";

import { useLanguage } from "@/context/LanguageContext";
import { productTranslationsEn } from "@/lib/i18n/translations";



export default function LegalPage() {
  const { t } = useLanguage();
  const l = t.legal;

  return (
    <div>
      <section className="border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              {l.badge}
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              {l.badge}
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              {l.effective}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          
          <div className="grid gap-6 md:grid-cols-1">
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight">
                {t.footer.legal}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {l.intro}
              </p>

              <div className="mt-8 space-y-8">
                {l.articles.map((article, index) => (
                  <div key={index}>
                    <h2 className="text-lg font-bold text-foreground">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {article.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold tracking-tight">
                {l.badgeconf}
              </h2>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  {t.lang === "fr"
                    ? "Nous appliquons des bonnes pratiques de minimisation et de sécurité des données. Les informations affichées sur ce site ont une vocation informative."
                    : "We apply data minimisation and security best practices. The information displayed on this website is provided for informational purposes only."}
                </p>

                <p>
                  <span className="font-bold text-foreground/80">
                    {t.lang === "fr" ? "Données de contact" : "Contact data"}
                  </span>{" "}
                  :
                  {t.lang === "fr"
                    ? " si vous nous écrivez, vos informations sont utilisées uniquement pour répondre à votre demande."
                    : " if you contact us, your information is used solely to respond to your request."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border bg-secondary p-8 shadow-sm">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              Important
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.lang === "fr"
                ? "Les contenus décrivent des indicateurs destinés à aider au suivi. Ils ne constituent pas un diagnostic et ne remplacent pas un avis médical."
                : "The content describes indicators intended to support monitoring. They do not constitute a diagnosis and do not replace medical advice."}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

