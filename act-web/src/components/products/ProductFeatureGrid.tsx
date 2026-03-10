import type { ProductFeature } from "@/data/products";
import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export function ProductFeatureGrid({
  title,
  description,
  features,
}: {
  title: string;
  description?: string;
  features: ProductFeature[];
}) {
  return (
    <section className="border-y bg-background/75 py-12 md:py-16">
      <ProductSectionHeader eyebrow="Fonctionnalités" title={title} description={description} />
      <Container className="mt-8">
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-xl font-bold tracking-tight">{f.title}</div>
              <p className="mt-3 min-h-0 flex-1 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

