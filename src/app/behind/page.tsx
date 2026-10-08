import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";
import { behind, site } from "@/lib/site";

export const metadata: Metadata = {
  title: behind.heading,
  description: behind.paragraphs[0],
  alternates: { canonical: behind.path },
  openGraph: {
    title: `${behind.heading} • Evergreen Reach`,
    description: behind.paragraphs[0],
    url: `${site.url}${behind.path}`,
    type: "website",
  },
};

export default function BehindPage() {
  return (
    <SiteShell>
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob top-[-10%] left-[-12%] h-[420px] w-[420px] bg-forest-800/35" />
          <div className="blob right-[-8%] top-[28%] h-[280px] w-[280px] bg-bark/15" />
        </div>

        <section className="relative mx-auto max-w-6xl px-5 pt-32 pb-28 sm:px-6 md:pt-40">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="glass-strong relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl lg:mx-0">
                <div
                  className="blob top-[18%] left-[12%] h-[220px] w-[220px] bg-forest-800/50"
                  aria-hidden
                />
                <div
                  className="blob right-[8%] bottom-[12%] h-[180px] w-[180px] bg-bark/20"
                  aria-hidden
                />
                <div className="relative flex h-full items-center justify-center p-10 sm:p-12">
                  <Image
                    src="/assets/logo-dark.png"
                    alt="Evergreen Reach"
                    width={280}
                    height={98}
                    className="h-auto w-full max-w-[220px] object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h1 className="font-display mb-6 text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
                {behind.heading}
              </h1>
              <div className="mb-8 h-px w-16 bg-gradient-to-r from-sage/60 to-transparent" />
              <div className="space-y-5 text-[1.0625rem] leading-relaxed text-cream-dim">
                {behind.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-10">
                <Link href="/#contact" className="btn-primary">
                  Request a Front Porch Report
                  <IconArrowRight />
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
