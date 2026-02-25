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
  if (!items.length) return null;

  return (
    <div className={cn("sticky top-16 z-40 border-b bg-background/85 backdrop-blur", className)}>
      <Container className="flex items-center gap-2 overflow-x-auto py-3">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="whitespace-nowrap rounded-full border bg-card px-4 py-2 text-xs font-extrabold text-foreground/80 shadow-sm transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {it.label}
          </a>
        ))}
      </Container>
    </div>
  );
}

