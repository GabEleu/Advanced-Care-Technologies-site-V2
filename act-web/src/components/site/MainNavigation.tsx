"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { Container } from "@/components/site/Container";
import { Logo } from "@/components/site/Logo";
import { products } from "@/data/products";
import { productPath } from "@/lib/productPaths";
import { useLanguage } from "@/context/LanguageContext";
import { productTranslationsEn } from "@/lib/i18n/translations";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active && "text-foreground",
      )}
    >
      <span>{children}</span>
      {active ? (
        <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-foreground/70" />
      ) : null}
    </Link>
  );
}

export function MainNavigation() {
  const pathname = usePathname() || "/";
  const { lang, t, toggle } = useLanguage();

  function closeDetails(e: React.MouseEvent) {
    const details = (e.currentTarget as HTMLElement).closest("details");
    if (details) details.removeAttribute("open");
  }

  const localizedProducts = products.map((p) => ({
    ...p,
    tagline:
      lang === "en"
        ? productTranslationsEn[p.slug]?.tagline ?? p.tagline
        : p.tagline,
  }));

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/produits/", label: t.nav.products },
    { href: "/technologie/", label: t.nav.technology },
    { href: "/clinique-ou-validation/", label: t.nav.evidence },
    { href: "/ressources/", label: t.nav.resources },
    { href: "/contact/", label: t.nav.contact },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="/" active={isActive(pathname, "/")}>
              {t.nav.home}
            </NavLink>

            <details className="group relative">
              <summary
                className={cn(
                  "relative list-none rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden",
                  pathname.startsWith("/produits") && "text-foreground",
                )}
              >
                {t.nav.products}
                {pathname.startsWith("/produits") ? (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-foreground/70" />
                ) : null}
              </summary>
              <div className="absolute left-0 top-full mt-2 w-80 rounded-2xl border bg-card p-2 shadow-lg">
                <div className="px-3 py-2 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  {t.nav.range}
                </div>
                <div className="space-y-1">
                  {localizedProducts.map((p) => (
                    <Link
                      key={p.slug}
                      href={productPath(p.slug)}
                      onClick={closeDetails}
                      className="block rounded-xl px-3 py-3 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="text-sm font-extrabold tracking-tight">{p.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{p.tagline}</div>
                    </Link>
                  ))}
                </div>
                <div className="mt-2 border-t px-3 py-2">
                  <Link
                    href="/produits/"
                    onClick={closeDetails}
                    className="text-xs font-extrabold text-foreground/80 hover:text-foreground"
                  >
                    {t.nav.allProducts}
                  </Link>
                </div>
              </div>
            </details>

            {links
              .filter((l) => l.href !== "/" && l.href !== "/produits/")
              .map((l) => (
                <NavLink key={l.href} href={l.href} active={isActive(pathname, l.href)}>
                  {l.label}
                </NavLink>
              ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
            className="hidden h-8 items-center gap-1 rounded-full border bg-card px-3 text-xs font-extrabold text-foreground/70 shadow-sm transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex"
          >
            <span className={lang === "fr" ? "text-foreground" : "text-foreground/40"}>FR</span>
            <span className="text-foreground/30">|</span>
            <span className={lang === "en" ? "text-foreground" : "text-foreground/40"}>EN</span>
          </button>

          {/* Mobile menu */}
          <details className="relative md:hidden">
            <summary className="list-none rounded-full border bg-card px-4 py-2 text-sm font-extrabold text-foreground/80 shadow-sm transition hover:bg-muted hover:text-foreground [&::-webkit-details-marker]:hidden">
              {t.nav.menu}
            </summary>
            <div className="absolute right-0 top-full mt-2 w-[92vw] max-w-sm rounded-2xl border bg-card p-2 shadow-lg">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-extrabold transition hover:bg-muted",
                    isActive(pathname, l.href) && "bg-muted",
                  )}
                >
                  {l.label}
                </Link>
              ))}

              <div className="mt-2 border-t px-3 py-2 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                {t.nav.products}
              </div>
              {localizedProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={productPath(p.slug)}
                  className="block rounded-xl px-3 py-3 transition hover:bg-muted"
                >
                  <div className="text-sm font-extrabold tracking-tight">{p.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.tagline}</div>
                </Link>
              ))}

              <div className="mt-2 border-t p-2">
                {/* Language toggle in mobile menu */}
                <button
                  type="button"
                  onClick={toggle}
                  className="mb-2 flex h-10 w-full items-center justify-center gap-2 rounded-full border bg-card text-sm font-extrabold text-foreground/70 transition hover:bg-muted"
                >
                  <span className={lang === "fr" ? "text-foreground" : "text-foreground/40"}>
                    FR
                  </span>
                  <span className="text-foreground/30">|</span>
                  <span className={lang === "en" ? "text-foreground" : "text-foreground/40"}>
                    EN
                  </span>
                </button>
                <Link
                  href="/contact/"
                  className="inline-flex h-10 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  {t.nav.demo}
                </Link>
              </div>
            </div>
          </details>

          <Link
            href="/contact/"
            className="hidden h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
          >
            {t.nav.demo}
          </Link>
        </div>
      </Container>
    </header>
  );
}
