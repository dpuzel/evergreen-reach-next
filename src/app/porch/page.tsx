import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PorchSheet } from "@/components/PorchSheet";
import { SiteShell } from "@/components/SiteShell";
import { getPorchReport } from "@/lib/porch";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Front Porch Report",
  description:
    "A quiet look at how a local business shows up online. Six lamps. Plain English. One next move each.",
  alternates: { canonical: "/porch" },
  openGraph: {
    title: "Front Porch Report • Evergreen Reach",
    description:
      "A caretaker-voiced visibility scan we can put in someone's hand. No jargon. No dashboard.",
    url: `${site.url}/porch`,
    type: "website",
  },
};

const SAMPLE_SLUG = "cedar-gate-welding";

export default function PorchLandingPage() {
  const sample = getPorchReport(SAMPLE_SLUG);
  if (!sample?.demo) notFound();

  return (
    <SiteShell>
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob top-[-10%] left-[-12%] h-[420px] w-[420px] bg-forest-800/35" />
          <div className="blob right-[-8%] top-[30%] h-[280px] w-[280px] bg-bark/15" />
        </div>

        <section className="relative mx-auto max-w-3xl px-5 pt-32 pb-16 sm:px-6 md:pt-40">
          <p className="eyebrow mb-5">From the caretaker bench</p>
          <h1 className="font-display mb-6 text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            Front Porch Report
          </h1>
          <div className="mb-8 h-px w-16 bg-gradient-to-r from-sage/60 to-transparent" />
          <p className="mb-6 max-w-xl text-lg leading-relaxed text-cream-dim">
            When someone nearby looks you up, that listing is the front porch.
            This report is a quiet walk around it. Six lamps. What we saw. One
            next move each.
          </p>
          <p className="max-w-xl leading-relaxed text-cream-dim">
            No scores out of a hundred. No agency words. Something you can print,
            email, or set on the counter.
          </p>
        </section>

        <section className="relative mx-auto max-w-3xl px-5 pb-16 sm:px-6">
          <PorchSheet report={sample} embedded />
        </section>

        <section className="relative mx-auto max-w-3xl px-5 pb-28 sm:px-6">
          <div className="soft-divider mb-10" />
          <p className="max-w-xl leading-relaxed text-cream-dim">
            Reports are written for one shop at a time, then handed over. They
            are not a public directory. If we made one for you, you already have
            the link.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
