"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/site/Container";
import { ProfileCard } from "@/components/home/ProfileCard";
import { useLanguage } from "@/context/LanguageContext";

const PROFILE_IMAGES: Record<string, string> = {
  "/patients":      "/images/accroche.jpeg",
  "/professionnels": "/images/illustration-professionnels.png",
  "/investisseurs":  "/images/illustration-investisseurs.png",
};

export function ProfilNavigation() {
  const { t } = useLanguage();
  const h = t.home;
  const profiles = h.profileCards;

  return (
    <section id="profils" className="scroll-mt-28 border-y bg-secondary py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            {h.profileNavigation.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            {h.profileNavigation.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {h.profileNavigation.desc}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {profiles.map((profile, index) => (
            <Reveal key={profile.href} delay={0.08 * (index + 1)} className="h-full">
              <ProfileCard
                title={profile.title}
                description={profile.desc}
                href={profile.href}
                discoverLabel={h.discoverBtn}
                imageSrc={PROFILE_IMAGES[profile.href]}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
