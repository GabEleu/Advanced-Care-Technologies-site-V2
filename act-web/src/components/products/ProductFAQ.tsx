import type { ProductFAQItem } from "@/data/products";
import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export function ProductFAQ({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: ProductFAQItem[];
}) {
  return (
    <section className="py-16 md:py-20">
      <ProductSectionHeader eyebrow="FAQ" title={title} description={description} />
      <Container className="mt-10">
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border bg-card px-6 py-4 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none text-base font-extrabold tracking-tight text-foreground/90">
                <span className="mr-2 inline-block align-middle text-accent">+</span>
                {item.question}
              </summary>
              <div className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

