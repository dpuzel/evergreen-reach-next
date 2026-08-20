import type { Lamp, PorchSignal } from "@/lib/porch-core";
import { SIGNAL_COPY } from "@/lib/porch-core";

function LampDot({ lamp, label }: { lamp: Lamp; label: string }) {
  const glow =
    lamp === "lit"
      ? "bg-sage shadow-[0_0_14px_2px_rgba(168,181,162,0.45)]"
      : lamp === "dim"
        ? "bg-bark-warm/80 shadow-[0_0_10px_1px_rgba(139,107,85,0.35)]"
        : "bg-forest-900 border border-sage/20";

  return (
    <span className="flex flex-col items-center gap-1.5">
      <span
        className={`h-3.5 w-3.5 rounded-full ${glow}`}
        aria-hidden
      />
      <span className="max-w-[4.5rem] text-center text-[0.62rem] leading-tight tracking-wide text-sage/70">
        {label}
      </span>
    </span>
  );
}

export function PorchLamps({ signals }: { signals: PorchSignal[] }) {
  return (
    <div
      className="flex flex-wrap items-start justify-center gap-x-5 gap-y-4 sm:justify-between"
      role="img"
      aria-label="Porch lamps for each signal"
    >
      {signals.map((signal) => (
        <LampDot
          key={signal.id}
          lamp={signal.lamp}
          label={SIGNAL_COPY[signal.id].label}
        />
      ))}
    </div>
  );
}
