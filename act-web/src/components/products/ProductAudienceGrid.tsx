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
    <section className="py-16 md:py-20">
      <ProductSectionHeader eyebrow="Pour qui ?" title={title} description={description} />
      <Container className="mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-lg font-extrabold tracking-tight">{a.title}</div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

