"use client";

import { useEffect, useRef, useState } from "react";

/** Parse a value string into typed parts: digit or static char */
function parseParts(raw: string): Array<{ char: string; isDigit: boolean }> {
  return raw.split("").map((char) => ({
    char,
    isDigit: /[0-9]/.test(char),
  }));
}

/** Single digit column that rolls from 0 down to the target digit */
function SlotDigit({
  char,
  triggered,
  delay,
  reducedMotion,
}: {
  char: string;
  triggered: boolean;
  delay: number;
  reducedMotion: boolean;
}) {
  const target = parseInt(char, 10);

  if (reducedMotion) return <span>{char}</span>;

  return (
    /* Clipping window — height matches one digit line-height */
    <span
      className="inline-block overflow-hidden"
      style={{ height: "1.1em", verticalAlign: "bottom" }}
      aria-hidden
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          /* Start at 0 (top of the strip), animate to target digit */
          transform: triggered ? `translateY(calc(-${target} * 1.1em))` : "translateY(0)",
          transition: triggered
            ? `transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
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

/**
 * SlotCounter — affiche une valeur avec un effet "compteur mécanique"
 * qui défile les chiffres au scroll (IntersectionObserver).
 *
 * Usage: <SlotCounter value="50%" />
 */
export function SlotCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const parts = parseParts(value);

  // Pre-compute a delay per digit position (left → right, 80 ms stagger)
  let digitIdx = 0;
  const enriched = parts.map(({ char, isDigit }) => ({
    char,
    isDigit,
    delay: isDigit ? (digitIdx++) * 80 : 0,
  }));

  return (
    <span ref={ref} aria-label={value}>
      {enriched.map(({ char, isDigit, delay }, i) =>
        isDigit ? (
          <SlotDigit
            key={i}
            char={char}
            triggered={triggered}
            delay={delay}
            reducedMotion={reducedMotion}
          />
        ) : (
          <span key={i}>{char}</span>
        ),
      )}
    </span>
  );
}
