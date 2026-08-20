import type { Metadata } from "next";
import Link from "next/link";
import { PorchComposer } from "@/components/PorchComposer";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Write a Front Porch Report",
  description:
    "Draft a caretaker-voiced visibility scan. Print it, copy a prospect note, or save the JSON to publish later.",
  robots: { index: false, follow: false },
};

export default function NewPorchReportPage() {
  return (
    <SiteShell>
      <main className="relative mx-auto max-w-6xl px-5 pt-28 pb-24 sm:px-6 md:pt-36">
        <p className="no-print mb-8">
          <Link
            href="/porch"
            className="text-sm text-sage transition-colors hover:text-cream"
          >
            ← Front Porch Report
          </Link>
        </p>
        <div className="no-print mb-10 max-w-2xl">
          <p className="eyebrow mb-4">Field notebook</p>
          <h1 className="font-display mb-4 text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Write a report
          </h1>
          <p className="leading-relaxed text-cream-dim">
            Fill what you actually saw. The page on the right is what they get.
            Nothing here is live Google scraping. That is the point. A person
            looked.
          </p>
        </div>
        <PorchComposer />
      </main>
    </SiteShell>
  );
}
