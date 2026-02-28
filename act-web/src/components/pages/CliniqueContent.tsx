"use client";

import Link from "next/link";
import { Container } from "@/components/site/Container";
import { useLanguage } from "@/context/LanguageContext";
import { getProductBySlug } from "@/data/products";
import Image from "next/image";

export function CliniqueContent() {
  const { t } = useLanguage();
  const ev = t.evidence;

  const digiSkin = getProductBySlug("digi-skin");
  const partnerLogos = digiSkin?.media?.partnerLogos ?? [];

  return (
    <div>
      <section className="border-b">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center rounded-full border bg-card px-3 py-1 text-xs font-extrabold text-foreground/80 shadow-sm">
              {ev.badge}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">{ev.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {ev.desc}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/produits/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                {ev.seeProducts}
              </Link>
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-card px-5 text-sm font-extrabold text-foreground/80 transition hover:bg-muted hover:text-foreground"
              >
                {ev.demo}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {ev.methodEyebrow}
              </div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                {ev.methodTitle}
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {ev.methodItems.map((item) => (
                    <li key={item.label}>
                      <span className="font-bold text-foreground/80">{item.label}</span>{" "}
                      : {item.desc}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border bg-background p-5 text-xs leading-relaxed text-muted-foreground">
                  {ev.disclaimer}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {partnerLogos.length > 0 && (
        <section className="border-y bg-secondary py-16 md:py-20">
          <Container>
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  {ev.partnersEyebrow}
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  {ev.partnersTitle}
                </h2>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {ev.partnersDesc}
                </p>
              </div>
              <div className="md:col-span-7">
                <div className="flex flex-wrap items-center gap-6">
                  {partnerLogos.map((logo) => (
                    <div key={logo.src} className="relative h-10 w-32">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain opacity-70 transition hover:opacity-100"
                        sizes="128px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <div className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {ev.ethicsEyebrow}
              </div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                {ev.ethicsTitle}
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4">
                {ev.ethicsItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border bg-card p-6 shadow-sm">
                    <div className="text-sm font-extrabold">{item.label}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
