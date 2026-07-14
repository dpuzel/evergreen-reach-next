#!/usr/bin/env node
/**
 * Materializes brand assets for builds.
 * Prefers local files if present; otherwise downloads from the live preview
 * (or override with ASSET_BASE_URL).
 */
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const BASE =
  process.env.ASSET_BASE_URL ||
  "https://evergreen-reach-next.vercel.app";

const FILES = [
  "public/assets/logo-dark.png",
  "public/assets/logo-main.jpg",
];

function download(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

async function main() {
  for (const rel of FILES) {
    const out = path.join(process.cwd(), rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    if (fs.existsSync(out) && fs.statSync(out).size > 1000) {
      console.log("keep", rel, fs.statSync(out).size, "bytes");
      continue;
    }
    const url = `${BASE}/${rel.replace(/^public\//, "")}`;
    try {
      const buf = await download(url);
      fs.writeFileSync(out, buf);
      console.log("fetched", rel, buf.length, "bytes");
    } catch (err) {
      console.warn("warn: could not fetch", rel, String(err.message || err));
      // Don't fail the build if assets already exist on Vercel from a prior deploy
      if (!fs.existsSync(out)) {
        // write a 1x1 transparent png placeholder so next/image doesn't crash hard
        throw err;
      }
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
