import { Reveal } from "@/components/Reveal";
import { serviceIcon } from "@/components/Icons";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-forest-900/50 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 max-w-2xl md:mb-16">
          <p className="eyebrow mb-5">What we actually do</p>
          <h2 className="font-display mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
            Three things. Done right. Month after month.
          </h2>
          <p className="text-lg leading-relaxed text-cream-dim">
            No bloated packages. No mystery retainers. Just the online care that
            helps good local businesses get found — and stay found.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcon(service.icon);
            return (
              <Reveal
                key={service.title}
                as="article"
                delay={(i as 0 | 1 | 2)}
                className="service-card glass-strong flex flex-col rounded-2xl p-8"
              >
                <div className="icon-pill mb-6">
                  <Icon />
                </div>
                <h3 className="font-display mb-3 text-xl font-semibold text-cream sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-cream-dim">
                  {service.description}
                </p>
                <ul className="check-list space-y-3 text-sm text-cream-muted">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
