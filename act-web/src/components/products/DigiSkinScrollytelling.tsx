"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Product } from "@/data/products";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/LanguageContext";
import { productTranslationsEn } from "@/lib/i18n/translations";

/* ─────────────────────────────────────────────
   Beat images (one per beat)
───────────────────────────────────────────── */
const SCROLL_HEIGHT = 1200; // vh
const BEAT_COUNT = 8;
const WHEEL_THRESHOLD = 40;

const BEAT_IMAGES = [
  "/images/digi-skin/beat-05-tactile.jpeg",
  "/images/digi-skin/beat-02-the-challenge.jpeg",
  "/images/digi-skin/beat-03-sensors.jpeg",
  "/images/digi-skin/beat-04-ia-processing.jpeg",
  null, // beat 05 — vidéo
  "/images/digi-skin/beat-06-numbers.jpeg",
  "/images/digi-skin/beat-07-designed-for-you.jpeg",
  "/images/digi-skin/beat-08-beyond-limb.jpeg",
];
const BEAT_VIDEO_INDEX = 4;
const BEAT_VIDEO_SRC = "/images/digi-skin/beat-05-tactile.mp4";

/* ─────────────────────────────────────────────
   Scroll-triggered slot counter
───────────────────────────────────────────── */
function SlotDigit({
  char,
  triggered,
}: {
  char: string;
  triggered: boolean;
}) {
  const target = parseInt(char, 10);
  return (
    <span
      className="inline-block overflow-hidden"
      style={{ height: "1.1em", verticalAlign: "bottom" }}
      aria-hidden
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          transform: triggered ? `translateY(calc(-${target} * 1.1em))` : "translateY(0)",
          transition: triggered
            ? "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
          willChange: "transform",
        }}
      >
        {Array.from({ length: 10 }, (_, d) => (
          <span
            key={d}
            style={{ display: "block", height: "1.1em", lineHeight: "1.1em" }}
          >
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

function StatCounter({
  value,
  triggered,
}: {
  value: string;
  triggered: boolean;
}) {
  const parts = value.split("").map((char) => ({
    char,
    isDigit: /[0-9]/.test(char),
  }));
  return (
    <span aria-label={value}>
      {parts.map(({ char, isDigit }, i) =>
        isDigit ? (
          <SlotDigit key={i} char={char} triggered={triggered} />
        ) : (
          <span key={i}>{char}</span>
        ),
      )}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Beat definitions
───────────────────────────────────────────── */
type BeatVariant = "default" | "bullets" | "stats" | "audiences";

interface Beat {
  range: [number, number];
  label: string;
  title: string;
  subtitle: string;
  variant?: BeatVariant;
  bullets?: string[];
  stats?: { value: string; line1: string; line2?: string }[];
  audiences?: { title: string; description: string }[];
}

function buildBeats(
  product: Product,
  lang: "fr" | "en",
  titles: readonly string[],
  b02: { subtitle: string; bullets: string[] },
  b06Subtitle: string,
  b08: { subtitle: string; bullets: string[] },
  forWho: string,
): Beat[] {
  const en = lang === "en" ? productTranslationsEn["digi-skin"] : null;
  const tagline = en?.tagline ?? product.tagline;
  const pitch = en?.pitch ?? product.pitch;
  const features = en?.features ?? product.features;
  const audiences = en?.audiences ?? product.audiences;
  const numbers = en?.numbers ?? product.numbers;
  const mission = en?.mission ?? product.mission;

  return [
    {
      range: [0, 0.1],
      label: "01 / 08",
      title: titles[0] ?? "SENSORY FEEDBACK",
      subtitle: tagline,
      variant: "default",
      bullets: [pitch.split(".")[0] + "."],
    },
    {
      range: [0.12, 0.23],
      label: "02 / 08",
      title: titles[1] ?? "THE CHALLENGE",
      subtitle: b02.subtitle,
      variant: "bullets",
      bullets: b02.bullets,
    },
    {
      range: [0.25, 0.36],
      label: "03 / 08",
      title: titles[2] ?? "CUTTING EDGE SENSORS",
      subtitle: features[0]?.title ?? "Capteur haptique",
      variant: "default",
      bullets: [features[0]?.description ?? ""],
    },
    {
      range: [0.38, 0.5],
      label: "04 / 08",
      title: titles[3] ?? "REAL-TIME IA PROCESSING",
      subtitle: features[1]?.title ?? "Algorithmes IA",
      variant: "default",
      bullets: [features[1]?.description ?? ""],
    },
    {
      range: [0.52, 0.63],
      label: "05 / 08",
      title: titles[4] ?? "TACTILE SENSATION",
      subtitle: features[2]?.title ?? "Brassard de stimulation",
      variant: "default",
      bullets: [features[2]?.description ?? ""],
    },
    {
      range: [0.65, 0.75],
      label: "06 / 08",
      title: titles[5] ?? "BY THE NUMBERS",
      subtitle: b06Subtitle,
      variant: "stats",
      stats: (numbers?.stats ?? []).filter(
        (s): s is { value: string; line1: string; line2?: string } => !!s.value,
      ),
    },
    {
      range: [0.77, 0.87],
      label: "07 / 08",
      title: titles[6] ?? "DESIGNED FOR YOU",
      subtitle: forWho,
      variant: "audiences",
      audiences: audiences,
    },
    {
      range: [0.89, 1.0],
      label: "08 / 08",
      title: titles[7] ?? "BEYOND THE LIMB",
      subtitle: mission?.title ?? "Notre mission",
      variant: "bullets",
      bullets: b08.bullets,
    },
  ];
}

/* ─────────────────────────────────────────────
   Beat overlay
───────────────────────────────────────────── */
function BeatOverlay({
  beat,
  active,
  beatIndex,
}: {
  beat: Beat;
  active: boolean;
  beatIndex: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex items-end pb-14 pl-8 pr-8 transition-all duration-700 md:pb-20 md:pl-20",
        active ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
      )}
      style={{ zIndex: 4 }}
    >
      <div className="relative max-w-2xl">
        {/* Frosted backdrop — wraps only the text block */}
        <div className="absolute -inset-x-5 -inset-y-4 rounded-2xl bg-primary-dark/30" />

        <div className="relative z-10">
        <p className="mb-4 text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase">
          {beat.label}
        </p>
        <h2
          className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-6xl"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {beat.title}
        </h2>
        <p className="mb-5 text-sm font-semibold tracking-wide text-white/60 uppercase md:text-base">
          {beat.subtitle}
        </p>

        {/* Bullets */}
        {(beat.variant === "default" || beat.variant === "bullets") &&
          beat.bullets?.length ? (
          <ul className="space-y-2">
            {beat.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                {beat.variant === "bullets" && (
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                )}
                {b}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Stats */}
        {beat.variant === "stats" && beat.stats?.length ? (
          <div className="flex flex-wrap gap-8">
            {beat.stats.map((stat) => (
              <div key={stat.value}>
                <div className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  <StatCounter value={stat.value} triggered={active} />
                </div>
                <div className="mt-1 text-xs text-white/50 leading-relaxed">
                  <div>{stat.line1}</div>
                  {stat.line2 ? <div>{stat.line2}</div> : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Audiences */}
        {beat.variant === "audiences" && beat.audiences?.length ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {beat.audiences.map((a) => (
              <div key={a.title} className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 min-h-[2.5rem] text-sm font-bold text-white">{a.title}</div>
                <div className="text-xs leading-relaxed text-white/55">{a.description}</div>
              </div>
            ))}
          </div>
        ) : null}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Dark FAQ accordion
───────────────────────────────────────────── */
function DarkFAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-white transition hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:text-base"
          >
            <span>{item.question}</span>
            <span className="shrink-0 text-white/40 transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "300px" : "0px" }}
          >
            <p className="pb-5 text-sm text-white/55 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function DigiSkinScrollytelling({ product }: { product: Product }) {
  const { lang, t } = useLanguage();
  const st = t.scrollytelling;
  const ds = t.digiSkinBeats;

  const containerRef = useRef<HTMLDivElement>(null);

  const [beatIndex, setBeatIndex] = useState(0);
  const [activationKeys, setActivationKeys] = useState<number[]>(() => Array(BEAT_COUNT).fill(0));

  const enData = lang === "en" ? productTranslationsEn["digi-skin"] : null;
  const localSecurity = enData?.security ?? product.security;
  const localFaq = enData?.faq ?? product.faq;
  const localPrimaryCta = enData?.primaryCta ?? product.primaryCta;
  const localSecondaryCta = enData?.secondaryCta
    ? { ...product.secondaryCta, label: enData.secondaryCta.label }
    : product.secondaryCta;

  const beats = buildBeats(
    product,
    lang,
    ds.titles,
    { subtitle: ds.b02Subtitle, bullets: [...ds.b02Bullets] },
    ds.b06Subtitle,
    { subtitle: ds.b08Subtitle, bullets: [...ds.b08Bullets] },
    ds.forWho,
  );

  /* ── activationKeys: restart Ken Burns when beat becomes active ── */
  useEffect(() => {
    setActivationKeys((prev) => {
      const next = [...prev];
      next[beatIndex] = prev[beatIndex] + 1;
      return next;
    });
  }, [beatIndex]);

  const isWheelControlledRef = useRef(false);
  const beatIndexRef = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* ── keep beatIndexRef in sync ── */
  useEffect(() => {
    beatIndexRef.current = beatIndex;
  }, [beatIndex]);

  /* ── contrôle explicite de la vidéo sur mobile ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (beatIndex === BEAT_VIDEO_INDEX) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [beatIndex]);

  /* ── wheel: discrete steps ── */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const inZone = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!inZone) return;

      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

      // At last beat scrolling down, or first beat scrolling up → let native scroll take over
      if (e.deltaY > 0 && beatIndexRef.current === BEAT_COUNT - 1) return;
      if (e.deltaY < 0 && beatIndexRef.current === 0) return;

      e.preventDefault();
      isWheelControlledRef.current = true;

      if (e.deltaY > 0) {
        setBeatIndex((i) => Math.min(i + 1, BEAT_COUNT - 1));
      } else {
        setBeatIndex((i) => Math.max(i - 1, 0));
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  /* ── sync scroll position when beatIndex changes (from wheel) ── */
  useEffect(() => {
    if (!isWheelControlledRef.current) return;
    const container = containerRef.current;
    if (!container) return;
    const total = container.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const scrollTarget = container.offsetTop + (beatIndex / (BEAT_COUNT - 1)) * total;
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
    isWheelControlledRef.current = false;
  }, [beatIndex]);

  /* ── scroll listener: sync beatIndex from native scroll (touch, trackpad) ── */
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const total = container.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      const index = Math.round(p * (BEAT_COUNT - 1));
      setBeatIndex(index);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeBeat = beatIndex;

  const gallery = product.media?.gallery ?? [];
  const partnerLogos = product.media?.partnerLogos ?? [];
  const ecosystemLogos = product.team?.collaborations?.logos ?? [];

  return (
    /* -mt-16 to extend behind the fixed nav */
    <div className="-mt-16">

      {/* ══════════════════════════════════════
          PART 1 — Sticky image scrollytelling
      ══════════════════════════════════════ */}
      <div
        ref={containerRef}
        style={{ height: `${SCROLL_HEIGHT}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-[100dvh] overflow-hidden bg-primary-dark">

          {/* Beat images/video with cross-dissolve + Ken Burns */}
          {BEAT_IMAGES.map((src, i) => {
            const isActive = activeBeat === i;
            const isVideo = i === BEAT_VIDEO_INDEX;
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 700ms ease-out",
                  zIndex: isActive ? 1 : 0,
                }}
              >
                {isVideo ? (
                  <video
                    ref={videoRef}
                    src={BEAT_VIDEO_SRC}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full portrait:object-contain landscape:object-cover"
                  />
                ) : (
                  <div
                    key={activationKeys[i]}
                    className="absolute inset-0"
                    style={isActive ? { animation: "kenBurns 10s ease-out forwards" } : undefined}
                  >
                    <Image
                      src={src!}
                      alt=""
                      fill
                      className="portrait:object-contain landscape:object-cover"
                      priority={i === 0}
                      sizes="100vw"
                    />
                  </div>
                )}
              </div>
            );
          })}

          {/* Top fade gradient (hides nav boundary) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary-dark to-transparent" style={{ zIndex: 3 }} />

          {/* Beat overlays */}
          {beats.map((beat, i) => (
            <BeatOverlay
              key={beat.label}
              beat={beat}
              active={activeBeat === i}
              beatIndex={i}
            />
          ))}

          {/* Vertical beat dots */}
          <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 md:right-10" style={{ zIndex: 5 }}>
            {beats.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-px rounded-full bg-white transition-all duration-500",
                  activeBeat === i ? "h-8 opacity-100" : "h-2 opacity-20",
                )}
              />
            ))}
          </div>

          {/* Scroll cue */}
          {beatIndex === 0 && (
            <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2" style={{ zIndex: 5 }}>
              <span className="text-[9px] font-bold tracking-[0.4em] text-white/25 uppercase">
                {st.scroll}
              </span>
              <div className="h-4 w-px bg-white/20" />
            </div>
          )}

          {/* Progress fraction */}
          <div className="absolute right-6 bottom-8 text-[10px] font-mono tracking-widest text-white/20 md:right-10" style={{ zIndex: 5 }}>
            {String(Math.min(activeBeat + 1, beats.length)).padStart(2, "0")} / {String(beats.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PART 2 — Dark sections (normal scroll)
      ══════════════════════════════════════ */}
      <div className="bg-primary-dark text-white">

        {/* ── Gallery ── */}
        {gallery.length > 0 && (
          <section className="border-t border-white/8 py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <p className="mb-2 text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">
                {st.gallery}
              </p>
              <h2 className="mb-12 text-3xl font-extrabold tracking-tight md:text-4xl">
                {st.galleryTitle}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {gallery.map((img) => (
                  <a
                    key={img.src}
                    href={img.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-2xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 45vw, (min-width: 640px) 45vw, 92vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/70 to-transparent px-4 pb-3 pt-10">
                        <p className="text-sm font-semibold text-white">{img.alt}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* ── FAQ ── */}
        {localFaq?.length ? (
          <section className="border-t border-white/8 py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <div className="grid gap-12 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="mb-2 text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">
                    {st.faqEyebrow}
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    {st.faqTitle}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <DarkFAQ items={localFaq} />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* ── Security note ── */}
        <section className="border-t border-white/8 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="rounded-2xl border border-white/8 bg-white/4 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">
                {localSecurity.title}
              </p>
              <p className="text-sm text-white/45 leading-relaxed max-w-3xl">
                {localSecurity.description}
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/8 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
            <p className="mb-4 text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">
              {st.contactEyebrow}
            </p>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              {st.contactTitle}
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base text-white/50 leading-relaxed">
              {st.contactDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={product.primaryCta.href}
                className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-bold text-primary-dark transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {localPrimaryCta.label}
              </Link>
              {localSecondaryCta && (
                <Link
                  href={localSecondaryCta.href ?? "/produits/"}
                  className="inline-flex h-12 items-center rounded-full border border-white/20 px-8 text-sm font-bold text-white/70 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {localSecondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ── Bottom gradient transition back to site ── */}
        <div className="h-16 bg-gradient-to-b from-primary-dark to-background" />
      </div>
    </div>
  );
}
