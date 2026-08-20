import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PorchSheet } from "@/components/PorchSheet";
import { PrintButton } from "@/components/PrintButton";
import { SiteShell } from "@/components/SiteShell";
import { getPorchReport, getPorchReports } from "@/lib/porch";
import { site } from "@/lib/site";

type PorchPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPorchReports().map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
  params,
}: PorchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = getPorchReport(slug);
  if (!report) return { title: "Front Porch Report", robots: { index: false } };

  return {
    title: `${report.business} · Front Porch Report`,
    description: report.headline,
    robots: { index: false, follow: false },
    alternates: { canonical: `/porch/${report.slug}` },
    openGraph: {
      title: `${report.business} · Front Porch Report`,
      description: report.headline,
      url: `${site.url}/porch/${report.slug}`,
      type: "article",
    },
  };
}

export default async function PorchReportPage({ params }: PorchPageProps) {
  const { slug } = await params;
  const report = getPorchReport(slug);
  if (!report) notFound();

  return (
    <SiteShell>
      <main className="relative mx-auto max-w-3xl px-5 pt-28 pb-24 sm:px-6 md:pt-36">
        <p className="no-print mb-8">
          <Link
            href="/porch"
            className="text-sm text-sage transition-colors hover:text-cream"
          >
            ← Front Porch Report
          </Link>
        </p>
        <PorchSheet report={report} actions={<PrintButton />} />
      </main>
    </SiteShell>
  );
}
