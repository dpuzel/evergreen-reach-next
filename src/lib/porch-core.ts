export const SIGNAL_IDS = [
  "found",
  "call",
  "hours",
  "photos",
  "site",
  "nap",
] as const;

export type SignalId = (typeof SIGNAL_IDS)[number];
export type Lamp = "lit" | "dim" | "out";

export type PorchSignal = {
  id: SignalId;
  lamp: Lamp;
  note: string;
  next: string;
};

export type PorchReport = {
  slug: string;
  business: string;
  town: string;
  website?: string;
  phone?: string;
  generated: string;
  prospectId?: string;
  headline: string;
  summary: string;
  signals: PorchSignal[];
};

export const SIGNAL_COPY: Record<
  SignalId,
  { label: string; question: string }
> = {
  found: {
    label: "Found nearby",
    question: "When someone nearby searches for what you do, do you show up?",
  },
  call: {
    label: "Call-ready",
    question: "Does the public number ring a human who can actually pick up?",
  },
  hours: {
    label: "Hours honest",
    question: "Do the hours on Google match the door?",
  },
  photos: {
    label: "Photos alive",
    question: "Do the pictures still look like the place this month?",
  },
  site: {
    label: "Site not rotting",
    question: "Does the website load, tell the truth, and belong to you?",
  },
  nap: {
    label: "Name, address, phone",
    question: "Do Google, the site, and the door all say the same thing?",
  },
};

export const LAMP_COPY: Record<Lamp, { label: string; hint: string }> = {
  lit: { label: "Lit", hint: "Tended. Keep it that way." },
  dim: { label: "Low", hint: "Showing, but it needs a pass." },
  out: { label: "Out", hint: "This is costing you calls." },
};

export function emptySignals(): PorchSignal[] {
  return SIGNAL_IDS.map((id) => ({
    id,
    lamp: "dim",
    note: "",
    next: "",
  }));
}

export function emptyReport(): PorchReport {
  return {
    slug: "",
    business: "",
    town: "",
    generated: new Date().toISOString().slice(0, 10),
    headline: "",
    summary: "",
    signals: emptySignals(),
  };
}

export function lampScore(lamp: Lamp) {
  if (lamp === "lit") return 1;
  if (lamp === "dim") return 0.5;
  return 0;
}

export function reportScore(report: PorchReport) {
  const lit = report.signals.filter((s) => s.lamp === "lit").length;
  const dim = report.signals.filter((s) => s.lamp === "dim").length;
  const out = report.signals.filter((s) => s.lamp === "out").length;
  const total = report.signals.reduce((sum, s) => sum + lampScore(s.lamp), 0);
  return { lit, dim, out, total, max: report.signals.length };
}

export function scoreLine(report: PorchReport) {
  const { lit, dim, out } = reportScore(report);
  const parts: string[] = [];
  if (lit) parts.push(`${lit} lit`);
  if (dim) parts.push(`${dim} low`);
  if (out) parts.push(`${out} out`);
  return parts.join(" · ") || "Not scored yet";
}

export function formatPorchDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function slugifyBusiness(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export function hccNoteFromReport(report: PorchReport) {
  const { lit, dim, out } = reportScore(report);
  const lines = [
    `Front Porch Report · ${report.business} · ${report.generated}`,
    `${lit} lit / ${dim} low / ${out} out. ${report.headline}`,
    `Share: ${report.slug ? `/porch/${report.slug}` : "(draft, not published)"}`,
    "",
    ...report.signals.map((signal) => {
      const label = SIGNAL_COPY[signal.id].label;
      return `• ${label} (${signal.lamp}): ${signal.note} Next: ${signal.next}`;
    }),
  ];
  return lines.join("\n");
}
