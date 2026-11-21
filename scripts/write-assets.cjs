#!/usr/bin/env node
/**
 * Brand logos are committed in public/assets.
 * Fail the build when one is missing. Do not download a replacement.
 *
 * Square favicons are generated from logo-dark.png on forest-950
 * (#07150f) so /favicon.ico does not have to be committed as binary.
 */
const fs = require("fs");
const path = require("path");

const FOREST_950 = { r: 7, g: 21, b: 15, alpha: 1 };

const FILES = [
  "public/assets/logo-dark.png",
  "public/assets/logo-main.jpg",
];

function loadSharp() {
  const candidates = ["sharp", "next/node_modules/sharp"];
  for (const id of candidates) {
    try {
      return require(id);
    } catch {
      // keep looking
    }
  }
  return null;
}

function pngsToIco(images) {
  const count = images.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const entries = images.map((img) => {
    const entry = {
      width: img.width,
      height: img.height,
      size: img.data.length,
      offset,
    };
    offset += img.data.length;
    return entry;
  });

  const buf = Buffer.alloc(offset);
  buf.writeUInt16LE(0, 0);
  buf.writeUInt16LE(1, 2);
  buf.writeUInt16LE(count, 4);

  let cursor = 6;
  for (const entry of entries) {
    buf.writeUInt8(entry.width >= 256 ? 0 : entry.width, cursor);
    buf.writeUInt8(entry.height >= 256 ? 0 : entry.height, cursor + 1);
    buf.writeUInt8(0, cursor + 2);
    buf.writeUInt8(0, cursor + 3);
    buf.writeUInt16LE(1, cursor + 4);
    buf.writeUInt16LE(32, cursor + 6);
    buf.writeUInt32LE(entry.size, cursor + 8);
    buf.writeUInt32LE(entry.offset, cursor + 12);
    cursor += 16;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].data.copy(buf, entries[i].offset);
  }
  return buf;
}

async function squarePng(sharp, input, size) {
  return sharp(input)
    .flatten({ background: FOREST_950 })
    .resize(size, size, { fit: "contain", background: FOREST_950 })
    .png()
    .toBuffer();
}

async function writeIcons() {
  const sharp = loadSharp();
  if (!sharp) {
    console.error(
      "sharp is required to generate favicons. It ships with Next.js.",
    );
    process.exit(1);
  }

  const logoPath = path.join(process.cwd(), "public/assets/logo-dark.png");
  const png16 = await squarePng(sharp, logoPath, 16);
  const png32 = await squarePng(sharp, logoPath, 32);
  const png180 = await squarePng(sharp, logoPath, 180);
  const ico = pngsToIco([
    { width: 16, height: 16, data: png16 },
    { width: 32, height: 32, data: png32 },
  ]);

  const out = [
    ["public/favicon.ico", ico],
    ["public/icon-32.png", png32],
    ["public/apple-touch-icon.png", png180],
  ];

  for (const [rel, data] of out) {
    fs.writeFileSync(path.join(process.cwd(), rel), data);
    console.log("ok", rel, data.length, "bytes");
  }
}

function checkLogos() {
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

checkLogos();
writeIcons().catch((err) => {
  console.error(err);
  process.exit(1);
});
