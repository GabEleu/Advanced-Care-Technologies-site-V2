import Link from "next/link";
import Image from "next/image";

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
      <span className="relative size-8 shrink-0 overflow-hidden rounded-md bg-card shadow-sm">
        <Image
          src="/legacy/brand/act-logo.png"
          alt=""
          fill
          className="object-contain"
          priority
          sizes="32px"
        />
      </span>
      <span className="hidden text-sm font-semibold text-muted-foreground md:inline">
        Advanced Care Technologies
      </span>
    </Link>
  );
}

