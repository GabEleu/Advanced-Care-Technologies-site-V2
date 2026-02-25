import Link from "next/link";

import { Container } from "@/components/site/Container";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="text-sm font-bold">Advanced Care Technologies</div>
          <div className="text-sm text-muted-foreground">
            Solutions medtech de suivi et d’aide à la décision (sans diagnostic).
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
          <Link className="text-foreground/80 hover:text-foreground" href="/produits">
            Produits
          </Link>
          <Link className="text-foreground/80 hover:text-foreground" href="/contact">
            Contact
          </Link>
          <a
            className="text-foreground/80 hover:text-foreground"
            href="mailto:contact@advancedcaretechnologies.fr"
          >
            contact@advancedcaretechnologies.fr
          </a>
        </div>
      </Container>
    </footer>
  );
}

