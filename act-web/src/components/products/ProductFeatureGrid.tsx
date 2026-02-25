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
    <section className="py-16 md:py-20">
      <ProductSectionHeader eyebrow="Fonctionnalités" title={title} description={description} />
      <Container className="mt-10">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-lg font-extrabold tracking-tight">{f.title}</div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

