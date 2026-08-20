"use client";

export function PrintButton({ label = "Print this report" }: { label?: string }) {
  return (
    <button
      type="button"
      className="btn-primary !py-2.5 !text-sm"
      onClick={() => window.print()}
    >
      {label}
    </button>
  );
}
