import type { MetadataRoute } from "next";
import { getNotes } from "@/lib/notes";
import { fieldNotes, site } from "@/lib/site";

export const dynamic = "force-static";

function safeDate(value?: string) {
  if (!value) return new Date();
  const parsed = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? new Date(`${value}T00:00:00.000Z`)
    : new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const core: MetadataRoute.Sitemap = [
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
    {
      url: `${site.url}/porch`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  try {
    const notes = getNotes().map((note) => ({
      url: `${site.url}${fieldNotes.path}/${note.slug}`,
      lastModified: safeDate(note.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
    return [...core, ...notes];
  } catch {
    return core;
  }
}
