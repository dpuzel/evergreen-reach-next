import Link from "next/link";
import { fieldNotes } from "@/lib/site";
import { formatNoteDate, topicSlug, type NoteMeta } from "@/lib/notes";

export function NotesShelf({
  notes,
  topics,
  selected,
}: {
  notes: NoteMeta[];
  topics: string[];
  selected?: string;
}) {
  const active =
    selected && topics.some((topic) => topicSlug(topic) === selected)
      ? selected
      : undefined;
  const visible = active
    ? notes.filter((note) => topicSlug(note.topic) === active)
    : notes;

  return (
    <>
      {topics.length > 1 ? (
        <nav
          aria-label="Note topics"
          className="mb-8 flex flex-wrap gap-2"
        >
          <TopicChip href={fieldNotes.path} current={!active}>
            All
          </TopicChip>
          {topics.map((topic) => {
            const slug = topicSlug(topic);
            const current = active === slug;
            return (
              <TopicChip
                key={slug}
                href={current ? fieldNotes.path : `${fieldNotes.path}?topic=${slug}`}
                current={current}
              >
                {topic}
              </TopicChip>
            );
          })}
        </nav>
      ) : null}

      {visible.length === 0 ? (
        <div className="border-t border-sage/10 pt-10">
          <p className="text-cream-dim">
            Nothing on this part of the shelf yet.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-sage/10 border-y border-sage/10">
          {visible.map((note) => (
            <li key={note.slug}>
              <Link
                href={`${fieldNotes.path}/${note.slug}`}
                className="group block py-8 transition-colors"
              >
                <p className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-wide text-sage">
                  {note.pinned ? (
                    <>
                      <span>Start here</span>
                      <span aria-hidden className="text-sage/40">
                        ·
                      </span>
                    </>
                  ) : null}
                  <time dateTime={note.date}>{formatNoteDate(note.date)}</time>
                  <span aria-hidden className="text-sage/40">
                    ·
                  </span>
                  <span>{note.topic}</span>
                </p>
                <h2 className="font-display mb-2 text-2xl font-semibold tracking-tight text-cream transition-colors group-hover:text-sage-light sm:text-[1.65rem]">
                  {note.title}
                </h2>
                <p className="max-w-xl text-[1.0625rem] leading-relaxed text-cream-dim">
                  {note.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function TopicChip({
  href,
  current,
  children,
}: {
  href: string;
  current: boolean;
  children: string;
}) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={current ? "page" : undefined}
      className={`rounded-full border px-3 py-1.5 text-xs tracking-wide transition-colors ${
        current
          ? "border-sage/40 bg-sage/15 text-cream"
          : "border-sage/20 text-sage hover:border-sage/40 hover:text-cream"
      }`}
    >
      {children}
    </Link>
  );
}
