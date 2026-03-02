"use client";

import { Container } from "@/components/site/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export function ContactContent() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <div>
      <section className="border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              {c.badge}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">{c.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">{c.desc}</p>
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
                <div className="text-sm font-extrabold text-foreground/80">{c.coordTitle}</div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <span className="font-bold text-foreground/80">{c.emailLabel}</span>{" "}
                    <a
                      className="font-bold text-foreground/80 hover:text-foreground"
                      href="mailto:gabriel.eleuterio@digiskin-act.fr"
                    >
                      gabriel.eleuterio@digiskin-act.fr
                    </a>
                  </div>
                  <div className="text-xs leading-relaxed">{c.disclaimer}</div>
                </div>
                <div className="mt-6 rounded-2xl bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
                  {c.privacyNote}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
