import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";
import { addOns, plans, plansPage, plansPath, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plans",
  description: plansPage.intro,
  alternates: { canonical: plansPath },
  openGraph: {
    title: "Plans • Evergreen Reach",
    description: plansPage.intro,
    url: `${site.url}${plansPath}`,
    type: "website",
  },
};

export default function PlansPage() {
  return (
    <SiteShell>
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob top-[-10%] left-[-12%] h-[420px] w-[420px] bg-forest-800/35" />
          <div className="blob right-[-8%] top-[28%] h-[280px] w-[280px] bg-bark/15" />
        </div>

        <section className="relative mx-auto max-w-3xl px-5 pt-32 pb-12 sm:px-6 md:pt-40">
          <p className="eyebrow mb-5">Plans</p>
          <h1 className="font-display mb-6 text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            {plansPage.heading}
          </h1>
          <div className="mb-8 h-px w-16 bg-gradient-to-r from-sage/60 to-transparent" />
          <p className="max-w-xl text-lg leading-relaxed text-cream-dim">
            {plansPage.intro}
          </p>
        </section>

        <section className="relative mx-auto max-w-6xl px-5 pb-8 sm:px-6">
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={(i as 0 | 1 | 2)}
                className="plan-card glass relative flex flex-col rounded-2xl p-8"
              >
                <div id={plan.slug} className="scroll-mt-28">
                  <p className="mb-1 text-sm font-medium text-sage">
                    {plan.name}
                  </p>
                  <div className="mb-2 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-semibold text-cream">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-cream-dim">/mo</span>
                  </div>
                  <p className="mb-7 text-sm leading-relaxed text-cream-dim">
                    {plan.blurb}
                  </p>
                  <ul className="check-list flex-grow space-y-3 text-sm leading-relaxed text-cream-muted">
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-sage/80">
              {plansPage.underCards}
            </p>
            <p className="mt-8 text-center">
              <Link href="/#contact" className="btn-primary">
                Request a Front Porch Report
                <IconArrowRight />
              </Link>
            </p>
          </Reveal>
        </section>

        <section
          id="add-ons"
          className="relative mx-auto max-w-6xl scroll-mt-28 px-5 pt-16 pb-28 sm:px-6"
        >
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display mb-5 text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              {plansPage.addOnsHeading}
            </h2>
            <p className="text-lg leading-relaxed text-cream-dim">
              {plansPage.addOnsIntro}
            </p>
          </Reveal>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {addOns.map((addOn, i) => (
              <Reveal
                key={addOn.name}
                delay={(i as 0 | 1 | 2)}
                className="plan-card glass relative flex flex-col rounded-2xl p-8"
              >
                <p className="mb-1 text-sm font-medium text-sage">
                  {addOn.name}
                </p>
                <div className="mb-2 flex items-baseline gap-1.5">
                  <span className="text-sm text-cream-dim">from</span>
                  <span className="font-display text-4xl font-semibold text-cream">
                    ${addOn.priceFrom}
                  </span>
                </div>
                <p className="mb-7 text-sm leading-relaxed text-cream-dim">
                  {addOn.blurb}
                </p>
                <ul className="check-list mb-6 flex-grow space-y-3 text-sm leading-relaxed text-cream-muted">
                  {addOn.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed text-sage/80">
                  {addOn.after}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-sage/80">
              {plansPage.addOnsUnder}
            </p>
          </Reveal>
        </section>
      </main>
    </SiteShell>
  );
}
