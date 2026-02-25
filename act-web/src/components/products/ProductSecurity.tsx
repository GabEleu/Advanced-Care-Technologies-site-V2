import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export function ProductSecurity({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="border-y bg-secondary py-16 md:py-20">
      <ProductSectionHeader eyebrow="Sécurité" title={title} description={description} />
      <Container className="mt-8">
        <div className="rounded-3xl border bg-card p-5 text-xs leading-relaxed text-muted-foreground shadow-sm">
          Les informations présentées décrivent une approche de confidentialité et de sécurité,
          sans constituer une documentation réglementaire exhaustive.
        </div>
      </Container>
    </section>
  );
}

