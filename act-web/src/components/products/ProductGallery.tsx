import Image from "next/image";

import type { ProductImage } from "@/data/products";
import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export function ProductGallery({
  title,
  description,
  images,
}: {
  title: string;
  description?: string;
  images: ProductImage[];
}) {
  if (images.length === 0) return null;

  return (
    <section className="py-16 md:py-20">
      <ProductSectionHeader eyebrow="Visuels" title={title} description={description} />
      <Container className="mt-10">
        <div className="grid gap-6 md:grid-cols-2">
          {images.map((img) => (
            <Reveal key={img.src}>
              <a
                href={img.src}
                className="group block rounded-3xl border bg-card p-4 shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 520px, 92vw"
                  />
                </div>
                <div className="mt-3 text-sm font-bold text-foreground/80">{img.alt}</div>
                <div className="mt-1 text-xs text-muted-foreground">Ouvrir en grand →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

