import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NoteBody } from "@/components/NoteBody";
import { SiteShell } from "@/components/SiteShell";
import { fieldNotes, site } from "@/lib/site";
import { formatNoteDate, getNote, getNotes } from "@/lib/notes";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Note" };

  const url = `${site.url}${fieldNotes.path}/${note.slug}`;

  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: `${fieldNotes.path}/${note.slug}` },
    openGraph: {
      title: `${note.title} • Evergreen Reach`,
      description: note.summary,
      url,
      type: "article",
      publishedTime: note.date,
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.summary,
    datePublished: note.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}${fieldNotes.path}/${note.slug}`,
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob top-[-12%] left-[-14%] h-[380px] w-[380px] bg-forest-800/30" />
        </div>

        <article className="relative mx-auto max-w-2xl px-5 pt-32 pb-16 sm:px-6 md:pt-40">
          <p className="mb-8">
            <Link
              href={fieldNotes.path}
              className="text-sm text-sage transition-colors hover:text-cream"
            >
              ← Field Notes
            </Link>
          </p>

          <p className="eyebrow mb-5">{note.topic}</p>
          <h1 className="font-display mb-5 text-[2.15rem] font-semibold leading-[1.15] tracking-tight text-cream sm:text-5xl">
            {note.title}
          </h1>
          <time
            dateTime={note.date}
            className="mb-10 block text-sm text-sage/80"
          >
            {formatNoteDate(note.date)}
          </time>
          <div className="mb-10 h-px w-16 bg-gradient-to-r from-sage/60 to-transparent" />

          <NoteBody content={note.content} />
        </article>

        <section className="relative mx-auto max-w-2xl px-5 pb-28 sm:px-6">
          <div className="soft-divider mb-10" />
          <p className="mb-5 text-lg leading-relaxed text-cream-dim">
            If this is the kind of work you&apos;ve been putting off, we can
            take it from here.
          </p>
          <Link href="/#contact" className="btn-primary">
            Book a free discovery chat
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
