import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://gabeleu.github.io/Advanced-Care-Technologies-site-V2";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const root = `${siteUrl.replace(/\/$/, "")}${basePath === "/" ? "" : basePath}`.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${root}/sitemap.xml`,
  };
}

