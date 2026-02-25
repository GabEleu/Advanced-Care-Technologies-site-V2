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

export function ProductTeam({
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

        {collaborations ? (
          <div className="mt-12">
            <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              Écosystème
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              {collaborations.title}
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-3xl border bg-card p-6 shadow-sm sm:grid-cols-3 md:gap-6 md:p-8 lg:grid-cols-4">
              {collaborations.logos.map((logo) => (
                <div
                  key={logo.src}
                  className="flex items-center justify-center rounded-2xl bg-muted/40 p-4"
                >
                  <div className="relative mx-auto h-16 w-full max-w-[280px]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="280px"
                    />
                  </div>
                </div>
              ))}
            </div>
            {collaborations.note ? (
              <div className="mt-6 text-xs leading-relaxed text-muted-foreground">
                {collaborations.note}
              </div>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

