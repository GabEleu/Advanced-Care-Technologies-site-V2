"use client";

import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";
import { SlotCounter } from "@/components/ui/SlotCounter";

export type StatItem = {
  value?: string;
  line1: string;
  line2?: string;
};

export function StatsSection({
  id = "chiffres",
  eyebrow,
  title,
  description,
  stats,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  stats: StatItem[];
}) {
  return (
    <section id={id} className="scroll-mt-28 border-y bg-secondary py-12 md:py-16">
      <ProductSectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <Container className="mt-8">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={`${stat.value ?? ""}-${stat.line1}-${stat.line2 ?? ""}-${index}`}
              className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-sm"
              aria-label={stat.value ? `${stat.value}: ${stat.line1} ${stat.line2 ?? ""}` : `${stat.line1} ${stat.line2 ?? ""}`}
            >
              {stat.value ? (
                <div className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  <SlotCounter value={stat.value} />
                </div>
              ) : null}
              <div className="mt-3 text-base font-extrabold tracking-tight">
                {stat.line1}
              </div>
              {stat.line2 ? (
                <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {stat.line2}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
