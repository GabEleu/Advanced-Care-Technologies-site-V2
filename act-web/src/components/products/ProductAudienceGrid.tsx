import type { ProductAudience } from "@/data/products";
import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export function ProductAudienceGrid({
  title,
  description,
  audiences,
}: {
  title: string;
  description?: string;
  audiences: ProductAudience[];
}) {
  return (
    <section className="py-12 md:py-16">
      <ProductSectionHeader eyebrow="Pour qui ?" title={title} description={description} />
      <Container className="mt-8">
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-lg font-extrabold tracking-tight">{a.title}</div>
              <p className="mt-3 min-h-0 flex-1 leading-relaxed text-muted-foreground">{a.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

