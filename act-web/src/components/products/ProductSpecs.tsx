import { Container } from "@/components/site/Container";

export type ProductSpecItem = {
  label: string;
  value: string;
};

export function ProductSpecs({
  id,
  title,
  description,
  items,
}: {
  id?: string;
  title: string;
  description?: string;
  items: ProductSpecItem[];
}) {
  if (!items.length) return null;

  return (
    <section id={id} className="scroll-mt-28 border-y bg-secondary/70 py-16 backdrop-blur-[1px] md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              Spécifications
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
              <div className="divide-y">
                {items.map((it) => (
                  <div key={it.label} className="grid gap-1 p-6 md:grid-cols-12 md:gap-6">
                    <div className="text-sm font-extrabold text-foreground/80 md:col-span-4">
                      {it.label}
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground md:col-span-8">
                      {it.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
              Informations descriptives fournies à titre marketing. Elles ne constituent pas une
              documentation réglementaire.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

