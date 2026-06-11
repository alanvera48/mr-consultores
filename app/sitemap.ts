import type { MetadataRoute } from "next";
import { units } from "./lib/units";

const SITE_URL = "https://www.mrconsultores.com"; // TODO: dominio real

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...units.map((u) => ({
      url: `${SITE_URL}/unidades/${u.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
