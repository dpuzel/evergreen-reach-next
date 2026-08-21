import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { fieldNotes } from "@/lib/site";
import { formatNoteDate, getNotes } from "@/lib/notes";

export function FieldNotesTeaser() {
  const notes = getNotes().slice(0, 3);
  if (notes.length === 0) return null;

  return (
    <section className="relative py-24 md:py-32">
      <div className="soft-divider absolute top-0 right-0 left-0" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow mb-5">{fieldNotes.eyebrow}</p>
          <h2 className="font-display mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
            {fieldNotes.title}
          </h2>
          <p className="text-lg leading-relaxed text-cream-dim">
            {fieldNotes.teaser}
          </p>
        </Reveal>

        <ul className="max-w-2xl divide-y divide-sage/10 border-y border-sage/10">
          {notes.map((note, i) => (
            <li key={note.slug}>
              <Reveal delay={(Math.min(i, 2) as 0 | 1 | 2)}>
                <Link
                  href={`${fieldNotes.path}/${note.slug}`}
                  className="group block py-6 transition-colors"
                >
                  <p className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-wide text-sage">
                    <time dateTime={note.date}>{formatNoteDate(note.date)}</time>
                    <span aria-hidden className="text-sage/40">
                      ·
                    </span>
                    <span>{note.topic}</span>
                  </p>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-cream transition-colors group-hover:text-sage-light sm:text-[1.35rem]">
                    {note.title}
                  </h3>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={3} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href={fieldNotes.path}
            className="text-sm text-sage transition-colors hover:text-cream"
          >
            The rest of the shelf →
          </Link>
          <Link
            href="/porch"
            className="text-sm text-sage/70 transition-colors hover:text-cream"
          >
            Front Porch Report →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
