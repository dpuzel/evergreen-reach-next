import { fieldNotes, site } from "@/lib/site";
import { getNotes, xmlEscape } from "@/lib/notes";

export function GET() {
  const notes = getNotes();
  const feedUrl = `${site.url}${fieldNotes.path}/rss.xml`;

  const items = notes
    .map((note) => {
      const url = `${site.url}${fieldNotes.path}/${note.slug}`;
      return `    <item>
      <title>${xmlEscape(note.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${note.date}T00:00:00.000Z`).toUTCString()}</pubDate>
      <description>${xmlEscape(note.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(`${site.name} Field Notes`)}</title>
    <link>${site.url}${fieldNotes.path}</link>
    <description>${xmlEscape(fieldNotes.intro)}</description>
    <language>en-us</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
