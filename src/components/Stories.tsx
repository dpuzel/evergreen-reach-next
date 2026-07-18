import { Reveal } from "@/components/Reveal";
import { quotes } from "@/lib/site";

export function Stories() {
  return (
    <section id="stories" className="relative py-24 md:py-32">
      <div className="soft-divider absolute top-0 right-0 left-0" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-5">Early conversations</p>
          <h2 className="font-display mb-5 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
            What we&apos;re hearing
          </h2>
          <p className="text-lg leading-relaxed text-cream-dim">
            We&apos;re still early. These are real chats with business owners,
            not polished case studies. When we have hard results to share, they
            go right here.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal
              key={q.text.slice(0, 24)}
              as="blockquote"
              delay={(i as 0 | 1 | 2)}
              className="glass rounded-2xl p-7"
            >
              <span className="quote-mark" aria-hidden>
                &ldquo;
              </span>
              <p className="-mt-4 mb-6 text-[0.95rem] leading-relaxed text-cream-muted">
                {q.text}
              </p>
              <footer className="text-sm text-sage">
                — Business owner{" "}
                <span className="text-sage/50">(early conversation)</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
