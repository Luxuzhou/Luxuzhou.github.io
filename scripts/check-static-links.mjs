import fs from "node:fs";
import path from "node:path";

const outputRoot = path.resolve(process.cwd(), "out");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function resolvePublicTarget(reference) {
  const clean = decodeURIComponent(reference.split(/[?#]/, 1)[0]).replace(/^\//, "");
  if (!clean) return path.join(outputRoot, "index.html");

  const direct = path.join(outputRoot, clean);
  if (path.extname(clean)) return direct;
  return path.join(direct, "index.html");
}

const missing = [];
const htmlFiles = walk(outputRoot).filter((file) => file.endsWith(".html"));

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, "utf8");
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);

  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(reference)) continue;
    const target = resolvePublicTarget(reference);
    if (!fs.existsSync(target)) {
      missing.push(`${path.relative(outputRoot, htmlFile)} -> ${reference}`);
    }
  }
}

if (missing.length > 0) {
  console.error(`Missing ${missing.length} static targets:\n${missing.join("\n")}`);
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML files with no missing local targets.`);
