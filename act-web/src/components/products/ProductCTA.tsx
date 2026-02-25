import Link from "next/link";

import type { ProductCTA as ProductCTAT } from "@/data/products";
import { Container } from "@/components/site/Container";

export function ProductCTA({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: ProductCTAT;
  secondary?: ProductCTAT;
}) {
  return (
    <section className="border-t bg-secondary py-16 md:py-20">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                {title}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Link
                href={primary.href}
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90 md:w-auto"
              >
                {primary.label}
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground md:w-auto"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

