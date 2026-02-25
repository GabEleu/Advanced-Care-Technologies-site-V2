"use client";

import { useEffect, useMemo, useState } from "react";

import { Container } from "@/components/site/Container";
import { cn } from "@/lib/cn";

export type StickyNavItem = {
  id: string;
  label: string;
};

export function ProductStickySubnav({
  items,
  className,
}: {
  items: StickyNavItem[];
  className?: string;
}) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    setActiveId(items[0]?.id ?? "");
  }, [items]);

  useEffect(() => {
    if (ids.length === 0) return;

    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    const visible = new Map<string, number>();

    const pickActive = () => {
      let bestId = activeId;
      let bestRatio = -1;
      for (const [id, ratio] of visible.entries()) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }
      if (bestId && bestId !== activeId) setActiveId(bestId);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          if (!id) continue;
          if (e.isIntersecting) visible.set(id, e.intersectionRatio);
          else visible.delete(id);
        }
        if (!reduced) requestAnimationFrame(pickActive);
        else pickActive();
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.15, 0.3, 0.6, 0.9],
      },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);

  if (!items.length) return null;

  return (
    <div className={cn("sticky top-16 z-40 border-b bg-background/85 backdrop-blur", className)}>
      <Container
        className="flex items-center gap-2 overflow-x-auto py-3"
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          const target = event.target as HTMLElement;
          if (target.tagName !== "A") return;
          const links = Array.from(target.parentElement?.querySelectorAll("a") ?? []);
          const index = links.findIndex((link) => link === target);
          if (index < 0) return;
          const nextIndex =
            event.key === "ArrowRight"
              ? Math.min(index + 1, links.length - 1)
              : Math.max(index - 1, 0);
          const nextLink = links[nextIndex] as HTMLAnchorElement | undefined;
          if (!nextLink) return;
          event.preventDefault();
          nextLink.focus();
        }}
      >
        <nav className="flex items-center gap-2" aria-label="Navigation des sections produit">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            aria-current={activeId === it.id ? "location" : undefined}
            className={cn(
              "whitespace-nowrap rounded-full border bg-card px-4 py-2 text-xs font-extrabold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              activeId === it.id
                ? "border-foreground/30 bg-muted text-foreground"
                : "text-foreground/80 hover:bg-muted hover:text-foreground",
            )}
          >
            {it.label}
          </a>
        ))}
        </nav>
      </Container>
    </div>
  );
}

