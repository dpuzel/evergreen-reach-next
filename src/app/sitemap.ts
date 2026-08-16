import type { MetadataRoute } from "next";
import { getNotes } from "@/lib/notes";
import { fieldNotes, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const notes = getNotes().map((note) => ({
    url: `${site.url}${fieldNotes.path}/${note.slug}`,
    lastModified: new Date(`${note.date}T00:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}${fieldNotes.path}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...notes,
  ];
}
