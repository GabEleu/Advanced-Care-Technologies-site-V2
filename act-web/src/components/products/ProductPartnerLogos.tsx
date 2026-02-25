import Image from "next/image";

import type { ProductPartnerLogo } from "@/data/products";
import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export function ProductPartnerLogos({
  title,
  description,
  logos,
}: {
  title: string;
  description?: string;
  logos: ProductPartnerLogo[];
}) {
  if (logos.length === 0) return null;

  return (
    <section className="border-y bg-secondary py-16 md:py-20">
      <ProductSectionHeader eyebrow="Écosystème" title={title} description={description} />
      <Container className="mt-10">
        <div className="grid gap-4 rounded-3xl border bg-card p-6 shadow-sm md:grid-cols-3 md:gap-6 md:p-8">
          {logos.map((logo) => {
            const content = (
              <div className="relative mx-auto h-16 w-full max-w-[280px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="280px"
                />
              </div>
            );

            return (
              <div key={logo.src} className="flex items-center justify-center rounded-2xl bg-muted/40 p-4">
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noreferrer" className="w-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Logos affichés à titre indicatif. Ils reflètent un contexte projet/partenarial et ne
          constituent pas une allégation médicale.
        </div>
      </Container>
    </section>
  );
}

