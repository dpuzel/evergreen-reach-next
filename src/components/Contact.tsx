"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight, IconMail, IconPhone } from "@/components/Icons";
import { site } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(site.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="blob top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-forest-800/30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-5">Let&apos;s talk</p>
            <h2 className="font-display mb-6 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.75rem]">
              Ready to get your online presence working for you?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-cream-dim">
              You&apos;ve built something worth being proud of. Now let&apos;s
              make sure people can actually find it.
            </p>
            <p className="mb-8 leading-relaxed text-cream-dim">
              We&apos;re not here to sell you a big package or lock you into
              anything long-term. We just want to help good businesses show up
              better online — month after month, with honest work and steady
              results.
            </p>

            <div className="mb-10 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4"
              >
                <span className="icon-pill !h-11 !w-11">
                  <IconMail />
                </span>
                <span>
                  <span className="block font-medium text-cream transition-colors group-hover:text-sage-light">
                    {site.email}
                  </span>
                  <span className="block text-sm text-sage/70">
                    We usually reply within a few hours
                  </span>
                </span>
              </a>
              <a href={site.phoneHref} className="group flex items-center gap-4">
                <span className="icon-pill !h-11 !w-11">
                  <IconPhone />
                </span>
                <span>
                  <span className="block font-medium text-cream transition-colors group-hover:text-sage-light">
                    {site.phone}
                  </span>
                  <span className="block text-sm text-sage/70">{site.hours}</span>
                </span>
              </a>
            </div>

            <p className="text-sm text-sage/70">
              No hard sell. No obligation. Just two people figuring out if we
              can help each other.
            </p>
          </Reveal>

          <Reveal delay={1} className="glass-strong rounded-2xl p-7 sm:p-9">
            {status === "success" ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-sage/25 bg-forest-800/80">
                  <svg
                    className="h-7 w-7 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h4 className="font-display mb-2 text-xl font-semibold text-cream">
                  You&apos;re on the list.
                </h4>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-cream-dim">
                  We&apos;ll reach out within a few hours to schedule your free
                  discovery chat. Looking forward to it.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-sage underline underline-offset-4 transition-colors hover:text-cream"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display mb-2 text-xl font-semibold text-cream">
                  Book your free discovery chat
                </h3>
                <p className="mb-7 text-sm text-cream-dim">
                  Tell us a little about your business. We&apos;ll reach out
                  within a few hours to find a time that works.
                </p>

                <form onSubmit={onSubmit} className="space-y-5">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Website Lead — Evergreen Reach"
                  />
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold tracking-wider text-sage uppercase"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="form-field"
                        autoComplete="name"
                        placeholder="Alex"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="business"
                        className="mb-2 block text-xs font-semibold tracking-wider text-sage uppercase"
                      >
                        Business name
                      </label>
                      <input
                        id="business"
                        type="text"
                        name="business"
                        className="form-field"
                        autoComplete="organization"
                        placeholder="Main Street Garage"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold tracking-wider text-sage uppercase"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="form-field"
                        autoComplete="email"
                        placeholder="you@business.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-semibold tracking-wider text-sage uppercase"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="form-field"
                        autoComplete="tel"
                        placeholder="(208) 555-0100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold tracking-wider text-sage uppercase"
                    >
                      What&apos;s going on with your online presence right now?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="form-field min-h-[110px] resize-y"
                      placeholder="Tell us about your Google listing, website, or what kind of customers you're hoping to reach..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-300/90">
                      Something went wrong. Please email us at {site.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full !py-3.5 disabled:opacity-70"
                  >
                    {status === "sending"
                      ? "Sending…"
                      : "Request my discovery chat"}
                    {status !== "sending" && <IconArrowRight />}
                  </button>

                  <p className="text-center text-xs text-sage/60">
                    We&apos;ll get back to you within a few hours on business
                    days. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
