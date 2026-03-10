"use client";

import Link from "next/link";
import { Container } from "@/components/site/Container";
import { ProductTeam } from "@/components/products/ProductTeam";
import { getProductBySlug } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

export function AProposContent() {
  const { t } = useLanguage();
  const ab = t.about;

  const digiSkin = getProductBySlug("digi-skin");
  const team = digiSkin?.team;

  return (
    <div>
      <section className="border-b">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              {ab.badge}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">{ab.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {ab.desc}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/produits/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                {ab.seeProducts}
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                {ab.contact}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {ab.valuesCards.map((card) => (
              <div key={card.title} className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-sm">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  {card.eyebrow}
                </div>
                <div className="mt-3 text-lg font-extrabold tracking-tight">{card.title}</div>
                <p className="mt-3 min-h-0 flex-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {team && (
        <section className="border-t py-12 md:py-16">
          <Container>
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              {ab.teamEyebrow}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              {ab.teamTitle}
            </h2>
            <div className="mt-6">
              <ProductTeam
                title={team.title}
                members={team.members}
                collaborations={team.collaborations}
                compact
              />
            </div>
          </Container>
        </section>
      )}

   
    </div>
  );
}
