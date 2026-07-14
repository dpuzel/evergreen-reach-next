import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-sage/10 py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Image
              src="/assets/logo-dark.png"
              alt="Evergreen Reach"
              width={160}
              height={56}
              className="h-14 w-auto object-contain opacity-95"
            />
            <p className="text-sm text-sage/70">{site.tagline}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-cream-dim">
            <a href="#story" className="transition-colors hover:text-cream">
              Story
            </a>
            <a href="#services" className="transition-colors hover:text-cream">
              Services
            </a>
            <a href="#plans" className="transition-colors hover:text-cream">
              Plans
            </a>
            <a href="#contact" className="transition-colors hover:text-cream">
              Contact
            </a>
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
