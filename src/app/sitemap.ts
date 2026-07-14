import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.evergreen-reach.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
