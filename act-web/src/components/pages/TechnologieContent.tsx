"use client";

import Link from "next/link";
import { Container } from "@/components/site/Container";
import { useLanguage } from "@/context/LanguageContext";

export function TechnologieContent() {
  const { t } = useLanguage();
  const tech = t.technology;

  return (
    <div>
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_60%_at_50%_10%,hsl(var(--accent)/0.18),transparent_60%),conic-gradient(from_180deg_at_50%_50%,hsl(var(--brand-purple)/0.14),transparent_35%,hsl(var(--accent)/0.10),transparent_65%,hsl(var(--primary)/0.14),transparent_85%)]" />
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              {tech.badge}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              {tech.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {tech.desc}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/produits/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                {tech.seeProducts}
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                {tech.talkTeam}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {tech.cards.map((card) => (
              <div key={card.title} className="rounded-3xl border bg-card p-7 shadow-sm">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  {card.eyebrow}
                </div>
                <div className="mt-3 text-lg font-extrabold tracking-tight">{card.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y bg-secondary py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {tech.principlesEyebrow}
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {tech.principlesTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tech.principlesDesc}
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4">
                {tech.principles.map((item) => (
                  <div key={item.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                    <div className="text-sm font-extrabold">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{tech.ctaTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{tech.ctaDesc}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                {tech.ctaPrimary}
              </Link>
              <Link
                href="/produits/"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                {tech.ctaSecondary}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
