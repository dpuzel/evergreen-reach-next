import { Reveal } from "@/components/Reveal";
import { plans } from "@/lib/site";

export function Plans() {
  return (
    <section id="plans" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-forest-900/40 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="eyebrow mb-5">Pricing</p>
          <h2 className="font-display mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
            Monthly care. Simple pricing.
          </h2>
          <p className="text-lg leading-relaxed text-cream-dim">
            No hidden fees. No long contracts. Cancel or pause whenever life
            calls.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={(i as 0 | 1 | 2)}
              className={`plan-card relative flex flex-col rounded-2xl p-8 ${
                plan.popular ? "popular glass-strong" : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full border border-sage/25 bg-forest-800 px-3.5 py-1 text-[0.65rem] font-semibold tracking-wider text-cream uppercase shadow-glow-green">
                    Most popular
                  </span>
                </div>
              )}
              <p className={`mb-1 text-sm font-medium text-sage ${plan.popular ? "mt-1" : ""}`}>
                {plan.name}
              </p>
              <div className="mb-2 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-cream">
                  ${plan.price}
                </span>
                <span className="text-sm text-cream-dim">/mo</span>
              </div>
              <p className="mb-7 text-sm text-cream-dim">{plan.blurb}</p>
              <ul className="check-list mb-8 flex-grow space-y-3 text-sm text-cream-muted">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full text-center !py-3 ${
                  plan.popular ? "btn-primary" : "btn-ghost"
                }`}
              >
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-sage/80">
            All plans include a free discovery chat. Add-ons available for
            one-time projects.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
