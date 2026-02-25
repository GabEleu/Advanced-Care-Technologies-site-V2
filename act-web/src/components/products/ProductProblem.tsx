import { Container } from "@/components/site/Container";

export function ProductProblem({
  id,
  eyebrow = "Problème",
  title,
  description,
  bullets,
  note,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  note?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
              {bullets?.length ? (
                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                  {bullets.map((b) => (
                    <li key={b} className="rounded-2xl bg-muted p-5">
                      <div className="text-base font-bold">{b}</div>
                    </li>
                  ))}
                </ul>
              ) : null}
              {note ? (
                <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
                  {note}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

