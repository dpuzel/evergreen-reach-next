import { Reveal } from "@/components/Reveal";
import { valueIcon } from "@/components/Icons";
import { values } from "@/lib/site";

export function Story() {
  return (
    <section id="story" className="relative py-24 md:py-32">
      <div className="soft-divider absolute top-0 right-0 left-0" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Our roots</p>
            <h2 className="font-display mb-6 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
              We&apos;re here for the businesses that build communities.
            </h2>
            <div className="mb-8 h-px w-16 bg-gradient-to-r from-sage/60 to-transparent" />
          </Reveal>

          <Reveal
            delay={1}
            className="space-y-6 text-[1.0625rem] leading-relaxed text-cream-dim lg:col-span-7"
          >
            <p>
              Too many good, hardworking small and rural businesses get
              overlooked online. You pour everything into your craft, your
              customers, and your community — but the digital side often falls
              through the cracks.
            </p>
            <p className="border-l-2 border-forest-800 py-1 pl-5 text-lg leading-relaxed text-cream/90">
              Here&apos;s the thing: we&apos;re not trying to be another
              marketing agency. That&apos;s not the vision. Evergreen Reach is
              about being the reliable digital caretaker for businesses who
              don&apos;t have time or know-how to handle their Google Business
              Profile, basic website upkeep, and getting more local eyes on
              them.
            </p>
            <p>
              It&apos;s practical help from people who show up — not just running
              ads and calling it a day.
            </p>
            <p className="pt-2 font-medium text-sage">
              No complicated contracts. No over-promising. No ghosting.
              <br />
              Just reliable monthly care from people who treat your business
              like it&apos;s our own neighbor&apos;s.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-3 md:mt-28">
          {values.map((v, i) => {
            const Icon = valueIcon(v.icon);
            return (
              <Reveal key={v.title} delay={(i + 0) as 0 | 1 | 2} className="glass rounded-2xl p-7">
                <div className="icon-pill mb-5">
                  <Icon />
                </div>
                <h3 className="font-display mb-2.5 text-xl font-semibold text-cream">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream-dim">{v.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
