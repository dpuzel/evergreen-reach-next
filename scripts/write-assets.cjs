#!/usr/bin/env node
/**
 * Brand logos are committed in public/assets.
 * Fail the build when one is missing. Do not download a replacement.
 */
const fs = require("fs");
const path = require("path");

const FILES = [
  "public/assets/logo-dark.png",
  "public/assets/logo-main.jpg",
];

function main() {
  const missing = [];
  for (const rel of FILES) {
    const file = path.join(process.cwd(), rel);
    if (!fs.existsSync(file) || fs.statSync(file).size === 0) {
      missing.push(rel);
      continue;
    }
    console.log("ok", rel, fs.statSync(file).size, "bytes");
  }
  if (missing.length === 0) return;
  const noun = missing.length === 1 ? "file" : "files";
  const pronoun = missing.length === 1 ? "it" : "them";
  console.error(
    `Missing logo ${noun}: ${missing.join(", ")}.\n` +
      `These logos are committed in public/assets. Add the missing ${noun} to the repo and commit ${pronoun}.\n` +
      "This script does not download a replacement.",
  );
  process.exit(1);
}

main();
