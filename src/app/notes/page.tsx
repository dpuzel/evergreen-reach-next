import type { Metadata } from "next";
import Link from "next/link";
import { NotesShelf } from "@/components/NotesShelf";
import { SiteShell } from "@/components/SiteShell";
import { fieldNotes, site } from "@/lib/site";
import { getNoteTopics, getShelfNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Field Notes",
  description: fieldNotes.intro,
  alternates: {
    canonical: fieldNotes.path,
    types: {
      "application/rss+xml": `${fieldNotes.path}/rss.xml`,
    },
  },
  openGraph: {
    title: "Field Notes • Evergreen Reach",
    description: fieldNotes.intro,
    url: `${site.url}${fieldNotes.path}`,
    type: "website",
  },
};

type FieldNotesPageProps = {
  searchParams: Promise<{ topic?: string }>;
};

export default async function FieldNotesPage({
  searchParams,
}: FieldNotesPageProps) {
  const notes = getShelfNotes();
  const topics = getNoteTopics();
  const { topic } = await searchParams;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Field Notes",
    description: fieldNotes.intro,
    url: `${site.url}${fieldNotes.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: notes.map((note, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${site.url}${fieldNotes.path}/${note.slug}`,
        name: note.title,
      })),
    },
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-sage/80">
            For a shop-by-shop walk of listings, hours, and the website, that
            lives on the{" "}
            <Link
              href="/porch"
              className="text-sage transition-colors hover:text-cream"
            >
              Front Porch Report
            </Link>
            .
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
            <NotesShelf notes={notes} topics={topics} selected={topic} />
          )}
        </section>
      </main>
    </SiteShell>
  );
}
