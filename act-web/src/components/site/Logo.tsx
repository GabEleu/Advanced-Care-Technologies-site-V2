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
      <Image
        src="/images/act-logo.svg"
        alt="Advanced Care Technologies"
        width={150}
        height={50}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
}

