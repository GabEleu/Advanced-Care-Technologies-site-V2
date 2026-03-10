import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export function ProductMission({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle?: string;
  cards: string[];
}) {
  return (
    <section className="py-12 md:py-16">
      <ProductSectionHeader eyebrow="Mission" title={title} description={subtitle} />
      <Container className="mt-8">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c} className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-lg font-extrabold tracking-tight">{c}</div>
              <div className="mt-3 min-h-0 flex-1 text-sm leading-relaxed text-muted-foreground">
                Objectif exprimé de façon prudente, à affiner selon le contexte patient et l’accompagnement.
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

