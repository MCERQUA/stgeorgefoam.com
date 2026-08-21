import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { POSTS } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-31");

  const staticPages = ["", "/services", "/service-areas", "/about", "/contact", "/quote", "/faq", "/blog"].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const servicePages = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogPages = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
