import { Container } from "@/components/site/Container";

export function ProductValueProps({
  title,
  description,
  items,
  eyebrow = "Bénéfices",
  id,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: string[];
}) {
  if (!items.length) return null;

  return (
    <section id={id} className="scroll-mt-28 bg-background/75 py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              {eyebrow}
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
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <div key={it} className="rounded-3xl border bg-card p-7 shadow-sm">
                  <div className="text-xl font-bold tracking-tight">{it}</div>
                  <div className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Présentation informative, à contextualiser selon l’usage et l’accompagnement.
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
              Les bénéfices décrivent des objectifs d’usage et d’expérience. Ils ne constituent pas
              une promesse clinique.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

