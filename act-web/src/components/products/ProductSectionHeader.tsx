import { Container } from "@/components/site/Container";

export function ProductSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Container>
      {eyebrow ? (
        <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Container>
  );
}

