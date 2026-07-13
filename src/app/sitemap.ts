import type { MetadataRoute } from "next";
import { SEO_PAGES } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://goldcalculatoruk.net";
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...SEO_PAGES.map((page) => ({
      url: `${base}/${page.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: page.priority,
    })),
    {
      url: `${base}/karat-guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
