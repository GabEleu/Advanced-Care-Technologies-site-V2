import { Container } from "@/components/site/Container";
import { cn } from "@/lib/cn";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-16 md:py-20", className)}>
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            {eyebrow ? (
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {eyebrow}
              </div>
            ) : null}
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
          <div className="md:col-span-7">{children}</div>
        </div>
      </Container>
    </section>
  );
}

