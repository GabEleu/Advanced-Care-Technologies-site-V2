import Link from "next/link";

import type { Product } from "@/data/products";
import { Container } from "@/components/site/Container";

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_60%_at_50%_10%,hsl(var(--accent)/0.22),transparent_60%),conic-gradient(from_180deg_at_50%_50%,hsl(var(--brand-purple)/0.16),transparent_35%,hsl(var(--accent)/0.12),transparent_65%,hsl(var(--primary)/0.16),transparent_85%)]" />
      <Container className="py-16 md:py-20">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              Produit
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-3 text-xl font-bold tracking-tight text-foreground/80 md:text-2xl">
              {product.tagline}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {product.pitch}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={product.primaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                {product.primaryCta.label}
              </Link>
              {product.secondaryCta ? (
                <Link
                  href={product.secondaryCta.href}
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
                >
                  {product.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border bg-card p-6 shadow-sm">
              <div className="text-sm font-extrabold text-foreground/80">
                Bénéfices clés
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-muted p-4 text-xs text-muted-foreground">
                Les informations présentées visent à aider au suivi. Elles ne constituent pas un
                diagnostic.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

