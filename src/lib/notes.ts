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
  updated?: string;
  image?: string;
};

export type Note = NoteMeta & { content: string };

const NOTES_DIR = path.join(process.cwd(), "src/content/notes");

function isNoteFile(name: string) {
  return name.endsWith(".md") && !name.startsWith("_");
}

function isIsoDate(value: unknown): value is string {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function parseShareImage(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (trimmed.startsWith("/") || /^https:\/\//i.test(trimmed)) return trimmed;
  return undefined;
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
    updated: isIsoDate(data.updated) ? data.updated : undefined,
    image: parseShareImage(data.image),
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
    updated: note.updated,
    image: note.image,
  };
}

export function noteLastmod(note: Pick<NoteMeta, "date" | "updated">) {
  return note.updated || note.date;
}

export function noteShareImage(note: Pick<NoteMeta, "image">) {
  return note.image || "/og-image.jpg";
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

const RELATED_BOOST = new Set([
  "what-to-do-when-google-shows-the-wrong-hours",
  "how-to-stop-missing-local-calls-and-leads",
]);

function relatedRank(a: NoteMeta, b: NoteMeta) {
  const boost = Number(RELATED_BOOST.has(b.slug)) - Number(RELATED_BOOST.has(a.slug));
  if (boost) return boost;
  return byDateThenTitle(a, b);
}

/** Same topic first, boosted hours/calls notes, then newest. */
export function getRelatedNotes(slug: string, limit = 3): NoteMeta[] {
  const all = getNotes();
  const current = all.find((note) => note.slug === slug);
  const rest = all.filter((note) => note.slug !== slug);
  const picked: NoteMeta[] = [];
  const used = new Set<string>();

  const take = (list: NoteMeta[], max = limit) => {
    for (const note of list) {
      if (picked.length >= max || picked.length >= limit) return;
      if (used.has(note.slug)) continue;
      used.add(note.slug);
      picked.push(note);
    }
  };

  const same = current
    ? rest.filter((note) => note.topic === current.topic).sort(relatedRank)
    : [];
  const others = (current
    ? rest.filter((note) => note.topic !== current.topic)
    : rest
  ).sort(relatedRank);

  take(same, Math.min(2, limit));
  take(others.filter((note) => RELATED_BOOST.has(note.slug)));
  take(same);
  take(others);
  return picked;
}

export function topicSlug(topic: string) {
  return topic
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Unique topics from published notes, A–Z by label. */
export function getNoteTopics(): string[] {
  const seen = new Set<string>();
  for (const note of getNotes()) seen.add(note.topic);
  return [...seen].sort((a, b) => a.localeCompare(b));
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
