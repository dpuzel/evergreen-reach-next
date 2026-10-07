import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight } from "@/components/Icons";
import { plans, plansHome, plansPath } from "@/lib/site";

export function Plans() {
  return (
    <section id="plans" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-forest-900/40 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="eyebrow mb-5">Monthly care</p>
          <h2 className="font-display mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
            {plansHome.heading}
          </h2>
          <p className="text-lg leading-relaxed text-cream-dim">
            {plansHome.intro}
          </p>
        </Reveal>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={(i as 0 | 1 | 2)}
              className="plan-card glass relative flex flex-col rounded-2xl p-7 md:p-8"
            >
              <p className="mb-1 text-sm font-medium text-sage">{plan.name}</p>
              <div className="mb-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-cream">
                  ${plan.price}
                </span>
                <span className="text-sm text-cream-dim">/mo</span>
              </div>
              <p className="text-sm leading-relaxed text-cream-dim">
                {plan.blurb}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center">
            <Link
              href={plansPath}
              className="inline-flex items-center gap-2 text-sm font-medium text-sage underline decoration-sage/30 underline-offset-4 transition-colors hover:text-cream"
            >
              {plansHome.more}
              <IconArrowRight />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
