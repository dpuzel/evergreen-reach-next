import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-sage/10 py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link href="/" aria-label="Evergreen Reach home">
              <Image
                src="/assets/logo-dark.png"
                alt="Evergreen Reach"
                width={160}
                height={56}
                className="h-14 w-auto object-contain opacity-95"
              />
            </Link>
            <p className="text-sm text-sage/70">{site.tagline}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-cream-dim">
            <Link href="/#story" className="transition-colors hover:text-cream">
              Story
            </Link>
            <Link href="/#services" className="transition-colors hover:text-cream">
              Services
            </Link>
            <Link href="/#plans" className="transition-colors hover:text-cream">
              Plans
            </Link>
            <Link href="/notes" className="transition-colors hover:text-cream">
              Field Notes
            </Link>
            <Link href="/porch" className="transition-colors hover:text-cream">
              Front Porch Report
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-cream">
              Contact
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-cream"
            >
              Email
            </a>
          </div>
        </div>

        <div className="soft-divider my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-sage/50 sm:flex-row">
          <p>
            © {year} Evergreen Reach. Built with pine and trust.
          </p>
          <p>Serving small &amp; rural businesses with care that shows up.</p>
        </div>
      </div>
    </footer>
  );
}
