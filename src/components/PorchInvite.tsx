import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function PorchInvite() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="soft-divider absolute top-0 right-0 left-0" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="max-w-md">
          <p className="leading-relaxed text-cream-dim">
            Want a quiet look at your digital front porch?
          </p>
          <p className="mb-3 leading-relaxed text-cream-dim">
            We can walk it with you and show you what we see.
          </p>
          <Link
            href="/porch"
            className="text-sm text-sage transition-colors hover:text-cream"
          >
            Front Porch Report →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
