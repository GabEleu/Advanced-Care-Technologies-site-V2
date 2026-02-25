import type { ProductSlug } from "@/data/products";

export function productPath(slug: ProductSlug) {
  switch (slug) {
    case "digi-skin":
      return "/produits/digi-skin/";
    case "digi-feet":
      return "/produits/digi-feet/";
    default: {
      const _exhaustiveCheck: never = slug;
      return _exhaustiveCheck;
    }
  }
}

