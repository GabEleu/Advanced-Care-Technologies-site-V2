"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="text-sm font-bold">Advanced Care Technologies</div>
          <div className="text-sm text-muted-foreground">{t.footer.tagline}</div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
          <Link className="text-foreground/80 hover:text-foreground" href="/produits/">
            {t.nav.products}
          </Link>
          <Link className="text-foreground/80 hover:text-foreground" href="/technologie/">
            {t.nav.technology}
          </Link>
          <Link className="text-foreground/80 hover:text-foreground" href="/clinique-ou-validation/">
            {t.nav.evidence}
          </Link>
          <Link className="text-foreground/80 hover:text-foreground" href="/ressources/">
            {t.nav.resources}
          </Link>
          <Link className="text-foreground/80 hover:text-foreground" href="/a-propos/">
            {lang === "en" ? "About" : "À propos"}
          </Link>
          <Link className="text-foreground/80 hover:text-foreground" href="/contact/">
            {t.nav.contact}
          </Link>
          <Link className="text-foreground/80 hover:text-foreground" href="/legal/">
            {t.footer.legal}
          </Link>
          <a
            className="text-foreground/80 hover:text-foreground"
            href="mailto:contact@advancedcaretechnologies.fr"
          >
            contact@advancedcaretechnologies.fr
          </a>
        </div>
      </div>
    </footer>
  );
}
