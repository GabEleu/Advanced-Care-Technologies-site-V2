import type { ProductStep } from "@/data/products";
import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export function ProductHowItWorks({
  title,
  description,
  steps,
}: {
  title: string;
  description?: string;
  steps: ProductStep[];
}) {
  return (
    <section className="border-y bg-secondary/70 py-12 backdrop-blur-[1px] md:py-16">
      <ProductSectionHeader eyebrow="Comment ça marche" title={title} description={description} />
      <Container className="mt-8">
        <ol className="grid gap-5 md:grid-cols-2">
          {steps.map((s, idx) => (
            <li key={s.title} className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-muted text-sm font-extrabold text-foreground">
                  {idx + 1}
                </div>
                <div className="text-xl font-bold tracking-tight">{s.title}</div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

