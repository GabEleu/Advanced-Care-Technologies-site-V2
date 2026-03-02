import Image from "next/image";

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

export function ProductTeamforhome({
  title,
  members,
  collaborations,
}: {
  title: string;
  members: TeamMember[];
  collaborations?: { title: string; logos: CollaborationLogo[]; note?: string };
}) {
  return (
    <section className="py-16 md:py-20">
      <ProductSectionHeader eyebrow="Équipe" title={title} />
      <Container className="mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="rounded-3xl border bg-card p-7 shadow-sm">
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


      </Container>
    </section>
  );
}

