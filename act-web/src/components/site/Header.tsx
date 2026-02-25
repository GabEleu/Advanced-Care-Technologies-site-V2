import Link from "next/link";

import { cn } from "@/lib/cn";
import { Container } from "@/components/site/Container";
import { Logo } from "@/components/site/Logo";
import { products } from "@/data/products";

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="/">Accueil</NavLink>
            <details className="group relative">
              <summary className="list-none rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                Produits
              </summary>
              <div className="absolute left-0 top-full mt-2 w-80 rounded-2xl border bg-card p-2 shadow-lg">
                <div className="px-3 py-2 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  Gamme
                </div>
                <div className="space-y-1">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/produits/${p.slug}/`}
                      className="block rounded-xl px-3 py-3 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="text-sm font-extrabold tracking-tight">
                        {p.name}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {p.tagline}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-2 border-t px-3 py-2">
                  <Link
                    href="/produits/"
                    className="text-xs font-extrabold text-foreground/80 hover:text-foreground"
                  >
                    Voir tous les produits →
                  </Link>
                </div>
              </div>
            </details>
            <NavLink href="/contact/">Contact</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <details className="relative md:hidden">
            <summary className="list-none rounded-full border bg-card px-4 py-2 text-sm font-extrabold text-foreground/80 shadow-sm transition hover:bg-muted hover:text-foreground [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 top-full mt-2 w-[92vw] max-w-sm rounded-2xl border bg-card p-2 shadow-lg">
              <Link
                href="/"
                className="block rounded-xl px-3 py-3 text-sm font-extrabold transition hover:bg-muted"
              >
                Accueil
              </Link>
              <div className="px-3 py-2 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                Produits
              </div>
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/produits/${p.slug}/`}
                  className="block rounded-xl px-3 py-3 transition hover:bg-muted"
                >
                  <div className="text-sm font-extrabold tracking-tight">{p.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.tagline}</div>
                </Link>
              ))}
              <Link
                href="/contact/"
                className="mt-1 block rounded-xl px-3 py-3 text-sm font-extrabold transition hover:bg-muted"
              >
                Contact
              </Link>
              <div className="mt-2 border-t p-2">
                <Link
                  href="/contact/"
                  className="inline-flex h-10 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Demander une démo
                </Link>
              </div>
            </div>
          </details>
          <Link
            href="/contact/"
            className="hidden h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
          >
            Demander une démo
          </Link>
        </div>
      </Container>
    </header>
  );
}

