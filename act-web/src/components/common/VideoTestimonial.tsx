"use client";

import { Container } from "@/components/site/Container";
import { ProductSectionHeader } from "@/components/products/ProductSectionHeader";

export type VideoTrack = {
  src: string;
  lang: string;
  label: string;
};

export function VideoTestimonial({
  eyebrow,
  title,
  src,
  poster,
  tracks,
  transcriptLabel,
  transcript,
}: {
  eyebrow: string;
  title: string;
  src: string;
  poster?: string;
  tracks?: VideoTrack[];
  transcriptLabel: string;
  transcript: string;
}) {
  return (
    <section id="temoignage" className="scroll-mt-28 py-12 md:py-16">
      <ProductSectionHeader eyebrow={eyebrow} title={title} />
      <Container className="mt-8">
        <div className="mx-auto max-w-3xl">
          <div
            className="overflow-hidden rounded-2xl border bg-card shadow-sm"
            aria-describedby="video-transcript"
          >
            <video
              controls
              preload="metadata"
              className="aspect-video w-full"
              title={title}
              aria-label={title}
              poster={poster}
            >
              <source src={src} type="video/mp4" />
              {tracks?.map((track) => (
                <track
                  key={track.lang}
                  kind="subtitles"
                  src={track.src}
                  srcLang={track.lang}
                  label={track.label}
                  default={track.lang === "en"}
                />
              ))}
            </video>
          </div>
          <details className="mt-6 rounded-2xl border bg-card p-6" id="video-transcript">
            <summary className="cursor-pointer list-none text-sm font-extrabold text-foreground/90">
              {transcriptLabel}
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {transcript}
            </p>
          </details>
        </div>
      </Container>
    </section>
  );
}
