import { Reveal } from "@/components/Reveal";
import { steps } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="soft-divider absolute top-0 right-0 left-0" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 max-w-2xl md:mb-16">
          <p className="eyebrow mb-5">How we work</p>
          <h2 className="font-display mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
            Simple. Honest. Effective.
          </h2>
          <p className="text-lg leading-relaxed text-cream-dim">
            No mystery process. Here&apos;s exactly what working with us looks
            like.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={(i as 0 | 1 | 2 | 3)}>
              <span className="step-num">{step.num}</span>
              <h3 className="font-display mt-4 mb-2.5 text-lg font-semibold text-cream">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream-dim">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-sm font-medium text-sage">
            No long contracts. No surprises. Just steady care from people who
            show up.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
