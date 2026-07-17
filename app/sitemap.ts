import type { MetadataRoute } from "next";
import { company } from "@/content/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: company.website,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${company.website}/#sluzby`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${company.website}/#recenzie`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${company.website}/#kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}