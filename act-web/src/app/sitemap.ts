import type { MetadataRoute } from "next";

import { products } from "@/data/products";
import { productPath } from "@/lib/productPaths";

export const dynamic = "force-static";

const defaultSiteUrl =
  "https://gabeleu.github.io/Advanced-Care-Technologies-site-V2";

function normalizeBasePath(pathname: string | undefined) {
  if (!pathname) return "";
  if (pathname === "/") return "";
  return pathname.startsWith("/") ? pathname.replace(/\/$/, "") : `/${pathname.replace(/\/$/, "")}`;
}

function joinUrl(base: string, path: string) {
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? "" : "/"}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
  const root = joinUrl(siteUrl, basePath || "/");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: joinUrl(root, "/"), lastModified: new Date() },
    { url: joinUrl(root, "/produits/"), lastModified: new Date() },
    { url: joinUrl(root, "/technologie/"), lastModified: new Date() },
    { url: joinUrl(root, "/clinique-ou-validation/"), lastModified: new Date() },
    { url: joinUrl(root, "/ressources/"), lastModified: new Date() },
    { url: joinUrl(root, "/a-propos/"), lastModified: new Date() },
    { url: joinUrl(root, "/contact/"), lastModified: new Date() },
    { url: joinUrl(root, "/legal/"), lastModified: new Date() },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: joinUrl(root, productPath(p.slug)),
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}

