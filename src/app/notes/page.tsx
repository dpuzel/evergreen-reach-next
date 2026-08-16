import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { fieldNotes, site } from "@/lib/site";
import { formatNoteDate, getNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Field Notes",
  description: fieldNotes.intro,
  alternates: { canonical: fieldNotes.path },
  openGraph: {
    title: "Field Notes • Evergreen Reach",
    description: fieldNotes.intro,
    url: `${site.url}${fieldNotes.path}`,
    type: "website",
  },
};

export default function FieldNotesPage() {
  const notes = getNotes();

  return (
    <SiteShell>
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob top-[-8%] left-[-10%] h-[420px] w-[420px] bg-forest-800/35" />
          <div className="blob right-[-8%] top-[20%] h-[320px] w-[320px] bg-huckleberry/10" />
        </div>

        <section className="relative mx-auto max-w-3xl px-5 pt-32 pb-12 sm:px-6 md:pt-40">
          <p className="eyebrow mb-5">{fieldNotes.eyebrow}</p>
          <h1 className="font-display mb-6 text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            {fieldNotes.title}
          </h1>
          <div className="mb-8 h-px w-16 bg-gradient-to-r from-sage/60 to-transparent" />
          <p className="max-w-xl text-lg leading-relaxed text-cream-dim">
            {fieldNotes.intro}
          </p>
        </section>

        <section className="relative mx-auto max-w-3xl px-5 pb-28 sm:px-6">
          {notes.length === 0 ? (
            <div className="border-t border-sage/10 pt-10">
              <p className="text-cream-dim">
                First notes are on the way. We&apos;ll put them on this shelf as
                soon as they&apos;re ready.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-sage/10 border-y border-sage/10">
              {notes.map((note) => (
                <li key={note.slug}>
                  <Link
                    href={`${fieldNotes.path}/${note.slug}`}
                    className="group block py-8 transition-colors"
                  >
                    <p className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-wide text-sage">
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
        </section>
      </main>
    </SiteShell>
  );
}
