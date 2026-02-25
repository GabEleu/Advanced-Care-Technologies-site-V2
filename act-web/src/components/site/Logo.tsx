import Link from "next/link";

import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-extrabold tracking-tight text-foreground",
        className,
      )}
      aria-label="Advanced Care Technologies"
    >
      <span className="text-lg md:text-xl">ACT</span>
      <span className="hidden text-sm font-semibold text-muted-foreground md:inline">
        Advanced Care Technologies
      </span>
    </Link>
  );
}

