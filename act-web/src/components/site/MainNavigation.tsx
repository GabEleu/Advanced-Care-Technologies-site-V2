"use client";

import { useState } from "react";
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
        "relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  const profileLinks = [
    { href: "/patients", label: t.nav.patients },
    { href: "/professionnels", label: t.nav.professionnels },
    { href: "/investisseurs", label: t.nav.investisseurs },
  ] as const;

  const isProfileActive =
    pathname.startsWith("/patients") ||
    pathname.startsWith("/professionnels") ||
    pathname.startsWith("/investisseurs");

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/produits/", label: t.nav.products },
    { href: "/clinique-ou-validation/", label: t.nav.evidence },
    { href: "/contact/", label: t.nav.contact },
    { href: "/a-propos/", label: t.about.badge }
  ] as const;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center gap-4">
        <Logo />
          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
            <NavLink href="/" active={isActive(pathname, "/")}>
              {t.nav.home}
            </NavLink>

            <div className="group relative">
              <Link
                href="/produits/"
                className={cn(
                  "relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-muted hover:text-foreground",
                  pathname.startsWith("/produits") && "text-foreground",
                )}
              >
                {t.nav.products}
                {pathname.startsWith("/produits") ? (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-foreground/70" />
                ) : null}
              </Link>
              <div className="absolute left-0 top-full mt-2 w-80 rounded-2xl border bg-card p-2 shadow-lg opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
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
            </div>

            <div className="group relative">
              <div
                className={cn(
                  "relative whitespace-nowrap cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-muted hover:text-foreground",
                  isProfileActive && "text-foreground",
                )}
              >
                {t.nav.profiles}
                {isProfileActive ? (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-foreground/70" />
                ) : null}
              </div>
              <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border bg-card p-2 shadow-lg opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                <div className="space-y-1">
                  {profileLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={closeDetails}
                      className={cn(
                        "block rounded-xl px-3 py-3 text-sm font-extrabold transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isActive(pathname, l.href) && "bg-muted",
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {links
              .filter((l) => l.href !== "/" && l.href !== "/produits/")
              .map((l) => (
                <NavLink key={l.href} href={l.href} active={isActive(pathname, l.href)}>
                  {l.label}
                </NavLink>
              ))}
          </nav>

        <div className="flex items-center justify-end gap-2">
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

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-full border bg-card px-4 py-2 text-sm font-extrabold text-foreground/80 shadow-sm transition hover:bg-muted hover:text-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? t.nav.close ?? "Fermer" : t.nav.menu}
          </button>

          <Link
            href="/contact/"
            className="hidden h-10 items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
          >
            {t.nav.demo}
          </Link>
        </div>
      </Container>
      </header>

      {/* Overlay menu mobile — plein écran sous le header */}
      {menuOpen && (
        <div
          className="fixed inset-x-0 z-40 overflow-y-auto bg-card shadow-xl md:hidden"
          style={{ top: "64px", bottom: 0 }}
        >
          <div className="p-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 transition hover:bg-muted"
              >
                <div className="text-sm font-extrabold tracking-tight">{p.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.tagline}</div>
              </Link>
            ))}

            <div className="mt-2 border-t px-3 py-2 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
              {t.nav.profiles}
            </div>
            {profileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "block rounded-xl px-3 py-3 text-sm font-extrabold transition hover:bg-muted",
                  isActive(pathname, l.href) && "bg-muted",
                )}
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-2 border-t p-2">
              <button
                type="button"
                onClick={toggle}
                className="mb-2 flex h-10 w-full items-center justify-center gap-2 rounded-full border bg-card text-sm font-extrabold text-foreground/70 transition hover:bg-muted"
              >
                <span className={lang === "fr" ? "text-foreground" : "text-foreground/40"}>FR</span>
                <span className="text-foreground/30">|</span>
                <span className={lang === "en" ? "text-foreground" : "text-foreground/40"}>EN</span>
              </button>
              <Link
                href="/contact/"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-10 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-extrabold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                {t.nav.demo}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
