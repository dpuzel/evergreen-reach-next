import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type NoteMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  topic: string;
};

export type Note = NoteMeta & { content: string };

const NOTES_DIR = path.join(process.cwd(), "src/content/notes");

function isNoteFile(name: string) {
  return name.endsWith(".md") && !name.startsWith("_");
}

function parseNote(filename: string): Note | null {
  const raw = fs.readFileSync(path.join(NOTES_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  if (data.draft === true) return null;
  if (!data.title || !data.summary || !data.date || !data.topic) return null;

  return {
    slug: filename.replace(/\.md$/, ""),
    title: String(data.title),
    summary: String(data.summary),
    date: String(data.date),
    topic: String(data.topic),
    content: content.trim(),
  };
}

export function getNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return [];

  return fs
    .readdirSync(NOTES_DIR)
    .filter(isNoteFile)
    .map(parseNote)
    .filter((note): note is Note => note !== null)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return a.title.localeCompare(b.title);
    })
    .map((note) => ({
      slug: note.slug,
      title: note.title,
      summary: note.summary,
      date: note.date,
      topic: note.topic,
    }));
}

export function getNote(slug: string): Note | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;

  const filename = `${slug}.md`;
  if (!fs.existsSync(path.join(NOTES_DIR, filename))) return null;

  return parseNote(filename);
}

export function formatNoteDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;

  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
