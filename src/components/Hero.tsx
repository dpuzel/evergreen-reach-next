import { IconArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <header className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20">
      <div className="hero-silhouette absolute inset-0" aria-hidden />
      <div
        className="blob top-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse-soft bg-forest-800/40"
        aria-hidden
      />
      <div
        className="blob right-[-5%] bottom-[10%] h-[400px] w-[400px] animate-pulse-soft bg-bark/20"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div
        className="blob top-[40%] right-[20%] h-[300px] w-[300px] animate-pulse-soft bg-huckleberry/15"
        style={{ animationDelay: "1s" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <Reveal immediate>
            <p className="eyebrow mb-6">
              For small &amp; rural businesses who take pride in their craft
            </p>
          </Reveal>

          <Reveal immediate delay={1}>
            <h1 className="font-display mb-7 text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.04em] text-cream sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
              We&apos;re not another marketing agency.
              <br />
              <span className="text-gradient">
                We&apos;re the digital caretaker who shows up.
              </span>
            </h1>
          </Reveal>

          <Reveal immediate delay={2}>
            <p className="mb-4 max-w-xl text-lg leading-relaxed text-cream-dim sm:text-xl">
              Google listing. Website upkeep. Getting more local eyes on your
              business. We handle the online stuff so you can keep building what
              you built.
            </p>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-sage sm:text-[1.0625rem]">
              Practical help from real people who give a damn — not ads, jargon,
              and a disappearing act.
            </p>
          </Reveal>

          <Reveal immediate delay={3}>
            <div className="flex flex-col gap-3.5 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Book a free discovery chat
                <IconArrowRight />
              </a>
              <a href="#services" className="btn-ghost">
                See what we actually do
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={4}>
            <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm text-sage/90">
              {[
                "No long contracts",
                "No jargon",
                "Cancel anytime",
                "Real humans who show up",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest-600" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sage/60 transition-colors hover:text-sage"
        aria-label="Scroll to story"
      >
        <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase">
          Scroll
        </span>
        <svg
          className="h-4 w-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </header>
  );
}
