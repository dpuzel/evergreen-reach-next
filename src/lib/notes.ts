import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type NoteMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  topic: string;
  pinned: boolean;
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
    pinned: data.pinned === true,
    content: content.trim(),
  };
}

function toMeta(note: Note): NoteMeta {
  return {
    slug: note.slug,
    title: note.title,
    summary: note.summary,
    date: note.date,
    topic: note.topic,
    pinned: note.pinned,
  };
}

function byDateThenTitle(a: NoteMeta, b: NoteMeta) {
  if (a.date !== b.date) return a.date < b.date ? 1 : -1;
  return a.title.localeCompare(b.title);
}

export function getNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return [];

  return fs
    .readdirSync(NOTES_DIR)
    .filter(isNoteFile)
    .map(parseNote)
    .filter((note): note is Note => note !== null)
    .map(toMeta)
    .sort(byDateThenTitle);
}

/** Pinned note first (newest pin wins). Everyone else stays newest-first. */
export function getShelfNotes(): NoteMeta[] {
  const notes = getNotes();
  const winner = notes.find((note) => note.pinned);
  if (!winner) return notes;

  return [
    { ...winner, pinned: true },
    ...notes
      .filter((note) => note.slug !== winner.slug)
      .map((note) => ({ ...note, pinned: false })),
  ];
}

export function getRelatedNotes(slug: string, limit = 2): NoteMeta[] {
  return getNotes()
    .filter((note) => note.slug !== slug)
    .slice(0, limit);
}

export function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
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
