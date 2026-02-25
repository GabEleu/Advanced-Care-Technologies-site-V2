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
    <section className="border-y bg-secondary/60 py-16 md:py-20">
      <ProductSectionHeader eyebrow="Visuels" title={title} description={description} />
      <Container className="mt-10">
        <Reveal>
          <ImageCarousel images={images} label={`Carrousel visuel: ${title}`} />
        </Reveal>
      </Container>
    </section>
  );
}

