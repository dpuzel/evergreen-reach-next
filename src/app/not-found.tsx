import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto flex min-h-[70svh] max-w-2xl flex-col justify-center px-5 pt-28 pb-20 sm:px-6">
        <p className="eyebrow mb-5">Lost in the woods</p>
        <h1 className="font-display mb-5 text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
          That page isn&apos;t here.
        </h1>
        <p className="mb-8 max-w-md text-lg leading-relaxed text-cream-dim">
          It may have moved, or it never got planted. Head home, or sit with a
          Field Note instead.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back home
          </Link>
          <Link href="/notes" className="btn-ghost">
            Field Notes
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
