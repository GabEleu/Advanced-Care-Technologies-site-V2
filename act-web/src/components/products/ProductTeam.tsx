import Image from "next/image";


import { useRef, useEffect } from "react";

import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export type TeamMember = {
  name: string;
  role: string;
  qualifications: string;
  image?: { src: string; alt: string };
};

export type CollaborationLogo = {
  src: string;
  alt: string;
  href?: string;
};


export function ProductTeam({
  title,
  members,
  collaborations,
  compact = false,
}: {
  title: string;
  members: TeamMember[];
  collaborations?: { title: string; logos: CollaborationLogo[]; note?: string };
  compact?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let interval: NodeJS.Timeout;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!container) return;
        container.scrollBy({ left: 240, behavior: "smooth" });

        // reset si fin atteinte
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000);
    };

    const stopAutoScroll = () => clearInterval(interval);

    startAutoScroll();

    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  const content = (
    <>
      <div className="grid gap-5 md:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-sm">
              <div className="flex items-center gap-4">
                {m.image ? (
                  <div className="relative size-14 overflow-hidden rounded-2xl border bg-muted">
                    <Image
                      src={m.image.src}
                      alt={m.image.alt}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div className="flex size-14 items-center justify-center rounded-2xl border bg-muted text-sm font-extrabold text-foreground/80">
                    {m.name
                      .split(" ")
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((p) => p[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="text-base font-extrabold tracking-tight">{m.name}</div>
                  <div className="mt-1 text-xs font-bold text-muted-foreground">{m.role}</div>
                </div>
              </div>
              <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {m.qualifications}
              </div>
            </div>
          ))}
        </div>

        {collaborations ? (
          <div className="mt-12">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              Écosystème
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              {collaborations.title}
            </h3>

            
            <div className="mt-8 relative rounded-3xl border bg-card p-6 shadow-sm md:p-8">
  {/* Chevron gauche */}
  <button
    onClick={() =>
      scrollRef.current?.scrollBy({ left: -240, behavior: "smooth" })
    }
    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
  >
    ‹
  </button>

  {/* Carousel */}
<div
  ref={scrollRef}
  className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none"
>
  {collaborations.logos.map((logo) => (
    <div
      key={logo.src}
      className="snap-center shrink-0 rounded-2xl bg-muted/40 p-6 min-w-[200px]"
    >
      <div className="relative mx-auto h-16 w-full max-w-[240px]">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className="object-contain"
          sizes="240px"
        />
      </div>
    </div>
  ))}
</div>

  {/* Chevron droite */}
  <button
    onClick={() =>
      scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" })
    }
    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow hover:bg-background"
  >
    ›
  </button>
</div>
          </div>
        ) : null}
    </>
  );

  if (compact) {
    return content;
  }

  return (
    <section className="py-12 md:py-16">
      <ProductSectionHeader eyebrow="Équipe" title={title} />
      <Container className="mt-8">{content}</Container>
    </section>
  );
}

