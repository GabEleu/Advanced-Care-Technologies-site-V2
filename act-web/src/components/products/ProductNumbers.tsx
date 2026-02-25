import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export type ProductNumberStat = {
  value?: string;
  line1: string;
  line2?: string;
};

export function ProductNumbers({
  title,
  stats,
  note,
}: {
  title: string;
  stats: ProductNumberStat[];
  note?: string;
}) {
  return (
    <section className="border-y bg-secondary py-16 md:py-20">
      <ProductSectionHeader eyebrow="Contexte" title={title} />
      <Container className="mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={`${s.value || ""}-${s.line1}-${s.line2 || ""}`}
              className="rounded-3xl border bg-card p-7 shadow-sm"
            >
              {s.value ? (
                <div className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  {s.value}
                </div>
              ) : null}
              <div className="mt-3 text-base font-extrabold tracking-tight">
                {s.line1}
              </div>
              {s.line2 ? (
                <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.line2}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        {note ? (
          <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
            {note}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

