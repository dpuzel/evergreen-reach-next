"use client";

import { useMemo, useState } from "react";
import { PorchSheet } from "@/components/PorchSheet";
import {
  LAMP_COPY,
  SIGNAL_COPY,
  emptyReport,
  hccNoteFromReport,
  slugifyBusiness,
  type Lamp,
  type PorchReport,
  type SignalId,
} from "@/lib/porch-core";

const LAMPS: Lamp[] = ["lit", "dim", "out"];

export function PorchComposer() {
  const [report, setReport] = useState<PorchReport>(emptyReport);
  const [copied, setCopied] = useState<"hcc" | "json" | null>(null);

  const preview = useMemo(
    () => ({
      ...report,
      slug: report.slug || slugifyBusiness(report.business),
      headline:
        report.headline ||
        "Six lamps. Plain English. One next move each.",
      summary:
        report.summary ||
        "Fill in what you actually saw. This preview is the page you can print and hand over.",
    }),
    [report],
  );

  function patch(partial: Partial<PorchReport>) {
    setReport((current) => ({ ...current, ...partial }));
  }

  function patchSignal(
    id: SignalId,
    partial: Partial<PorchReport["signals"][number]>,
  ) {
    setReport((current) => ({
      ...current,
      signals: current.signals.map((signal) =>
        signal.id === id ? { ...signal, ...partial } : signal,
      ),
    }));
  }

  async function copy(kind: "hcc" | "json") {
    const text =
      kind === "hcc"
        ? hccNoteFromReport(preview)
        : JSON.stringify(preview, null, 2);
    await navigator.clipboard.writeText(text);
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
      <form
        className="no-print space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <Field
          label="Business"
          value={report.business}
          onChange={(business) => patch({ business })}
        />
        <Field
          label="Town"
          value={report.town}
          onChange={(town) => patch({ town })}
        />
        <Field
          label="Phone"
          value={report.phone ?? ""}
          onChange={(phone) => patch({ phone })}
        />
        <Field
          label="Website"
          value={report.website ?? ""}
          onChange={(website) => patch({ website })}
        />
        <Field
          label="Headline"
          value={report.headline}
          onChange={(headline) => patch({ headline })}
        />
        <label className="block">
          <span className="mb-1.5 block text-xs tracking-wide text-sage">
            Opening note
          </span>
          <textarea
            className="form-field min-h-[6rem] resize-y"
            value={report.summary}
            onChange={(e) => patch({ summary: e.target.value })}
          />
        </label>

        {report.signals.map((signal) => (
          <fieldset
            key={signal.id}
            className="rounded-xl border border-sage/12 p-4"
          >
            <legend className="px-1 text-sm font-medium text-cream">
              {SIGNAL_COPY[signal.id].label}
            </legend>
            <div className="mt-2 mb-3 flex gap-2">
              {LAMPS.map((lamp) => (
                <button
                  key={lamp}
                  type="button"
                  className={`rounded-full px-3 py-1 text-xs tracking-wide uppercase ${
                    signal.lamp === lamp
                      ? "bg-forest-800 text-cream"
                      : "border border-sage/20 text-sage hover:text-cream"
                  }`}
                  onClick={() => patchSignal(signal.id, { lamp })}
                >
                  {LAMP_COPY[lamp].label}
                </button>
              ))}
            </div>
            <textarea
              className="form-field mb-2 min-h-[4.5rem] resize-y text-sm"
              placeholder="What you saw"
              value={signal.note}
              onChange={(e) =>
                patchSignal(signal.id, { note: e.target.value })
              }
            />
            <textarea
              className="form-field min-h-[3.5rem] resize-y text-sm"
              placeholder="One next move"
              value={signal.next}
              onChange={(e) =>
                patchSignal(signal.id, { next: e.target.value })
              }
            />
          </fieldset>
        ))}

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            className="btn-primary !py-2.5 !text-sm"
            onClick={() => window.print()}
          >
            Print this report
          </button>
          <button
            type="button"
            className="btn-ghost !py-2.5 !text-sm"
            onClick={() => copy("hcc")}
          >
            {copied === "hcc" ? "Copied" : "Copy HCC note"}
          </button>
          <button
            type="button"
            className="btn-ghost !py-2.5 !text-sm"
            onClick={() => copy("json")}
          >
            {copied === "json" ? "Copied" : "Copy JSON"}
          </button>
        </div>
        <p className="text-xs leading-relaxed text-sage/60">
          Print hands it to someone. Copy HCC note drops the scores into the
          prospect. Copy JSON is how we publish a shareable page later.
        </p>
      </form>

      <div className="porch-preview">
        <PorchSheet report={preview} />
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs tracking-wide text-sage">
        {label}
      </span>
      <input
        className="form-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
