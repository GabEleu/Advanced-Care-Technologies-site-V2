import type { ProductImage } from "@/data/products";
import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ImageCarousel } from "@/components/products/ImageCarousel";

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
    <section className="border-y bg-secondary/60 py-12 md:py-16">
      <ProductSectionHeader eyebrow="Visuels" title={title} description={description} />
      <Container className="mt-8">
        <Reveal>
          <ImageCarousel images={images} label={`Carrousel visuel: ${title}`} />
        </Reveal>
      </Container>
    </section>
  );
}

