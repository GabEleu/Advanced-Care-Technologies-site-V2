import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
  secondary:
    "rounded-full border bg-card text-foreground/80 hover:bg-muted hover:text-foreground",
  ghost:
    "rounded-full bg-muted text-foreground hover:bg-muted/80",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}

