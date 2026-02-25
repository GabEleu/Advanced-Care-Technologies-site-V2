import Link from "next/link";

import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export type ProductDownloadItem = {
  label: string;
  href: string;
};

export function ProductDownloads({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: ProductDownloadItem[];
}) {
  if (!items.length) return null;

  return (
    <section className="border-y bg-secondary py-16 md:py-20">
      <ProductSectionHeader eyebrow="Ressources" title={title} description={description} />
      <Container className="mt-10">
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.href} className="rounded-3xl border bg-card p-7 shadow-sm">
              <div className="text-base font-extrabold tracking-tight">{it.label}</div>
              <div className="mt-4">
                <Link
                  href={it.href}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Télécharger
                </Link>
              </div>
              <div className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Ressource fournie à titre informatif (modèle 3D). L’usage et l’interprétation doivent
                rester prudents.
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

