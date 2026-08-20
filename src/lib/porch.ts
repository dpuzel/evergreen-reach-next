import fs from "node:fs";
import path from "node:path";
import type { PorchReport } from "@/lib/porch-core";

export * from "@/lib/porch-core";

const PORCH_DIR = path.join(process.cwd(), "src/content/porch");

export function getPorchReports(): PorchReport[] {
  if (!fs.existsSync(PORCH_DIR)) return [];
  return fs
    .readdirSync(PORCH_DIR)
    .filter((name) => name.endsWith(".json"))
    .map((name) =>
      JSON.parse(fs.readFileSync(path.join(PORCH_DIR, name), "utf8")),
    ) as PorchReport[];
}

export function getPorchReport(slug: string): PorchReport | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  const file = path.join(PORCH_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as PorchReport;
}
