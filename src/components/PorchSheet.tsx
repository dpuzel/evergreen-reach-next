import type { ReactNode } from "react";
import { PorchLamps } from "@/components/PorchLamps";
import { site } from "@/lib/site";
import {
  LAMP_COPY,
  SIGNAL_COPY,
  formatPorchDate,
  scoreLine,
  type PorchReport,
} from "@/lib/porch-core";

export function PorchSheet({
  report,
  actions,
}: {
  report: PorchReport;
  actions?: ReactNode;
}) {
  return (
    <article className="porch-sheet relative overflow-hidden rounded-2xl border border-sage/15 px-5 py-8 sm:px-10 sm:py-12">
      <div className="porch-ruled pointer-events-none absolute inset-0" aria-hidden />

      <header className="relative">
        <p className="eyebrow mb-4">Front Porch Report</p>
        <h1 className="font-display mb-3 text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          {report.business || "Unnamed shop"}
        </h1>
        <p className="text-sm text-sage">
          Generated for {report.business || "this business"}
          {report.town ? ` · ${report.town}` : ""} on{" "}
          <time dateTime={report.generated}>
            {formatPorchDate(report.generated)}
          </time>
        </p>
        {(report.phone || report.website) && (
          <p className="mt-2 text-sm text-sage/70">
            {report.phone}
            {report.phone && report.website ? " · " : ""}
            {report.website ? (
              <a
                href={report.website}
                className="underline decoration-sage/30 underline-offset-4 hover:text-cream"
              >
                {report.website.replace(/^https?:\/\//, "")}
              </a>
            ) : null}
          </p>
        )}

        <div className="my-8">
          <PorchLamps signals={report.signals} />
        </div>

        <p className="font-display mb-3 text-xl leading-snug text-cream sm:text-2xl">
          {report.headline || "Six lamps. Plain English. One next move each."}
        </p>
        <p className="max-w-xl text-[1.0625rem] leading-relaxed text-cream-dim">
          {report.summary}
        </p>
        <p className="mt-4 text-sm tracking-wide text-sage">{scoreLine(report)}</p>
      </header>

      <ol className="relative mt-10 space-y-8">
        {report.signals.map((signal, index) => (
          <li
            key={signal.id}
            className="border-t border-sage/10 pt-6"
          >
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-xl font-semibold text-cream">
                <span className="mr-2 text-sage/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {SIGNAL_COPY[signal.id].label}
              </h2>
              <span
                className={`text-xs font-semibold tracking-[0.16em] uppercase ${
                  signal.lamp === "lit"
                    ? "text-sage"
                    : signal.lamp === "dim"
                      ? "text-bark-warm"
                      : "text-sage/45"
                }`}
              >
                {LAMP_COPY[signal.lamp].label}
              </span>
            </div>
            <p className="mb-3 text-sm text-sage/70">
              {SIGNAL_COPY[signal.id].question}
            </p>
            <p className="mb-3 leading-relaxed text-cream-dim">
              {signal.note || "Not scored yet."}
            </p>
            <p className="text-sm leading-relaxed text-cream">
              <span className="text-sage">Next move. </span>
              {signal.next || "Not yet."}
            </p>
          </li>
        ))}
      </ol>

      <footer className="relative mt-12 border-t border-sage/10 pt-8">
        <p className="mb-4 max-w-xl leading-relaxed text-cream-dim">
          We put this together as a neighbor would. No contract attached. If you
          want a hand tending the porch,{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-cream underline decoration-sage/40 underline-offset-4 hover:text-sage-light"
          >
            say hello
          </a>
          .
        </p>
        <p className="text-xs tracking-wide text-sage/50">
          Evergreen Reach · Field notebook, not a pitch deck.
        </p>
        {actions ? <div className="no-print mt-8">{actions}</div> : null}
      </footer>
    </article>
  );
}
