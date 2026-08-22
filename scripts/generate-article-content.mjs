import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentRoot = process.env.PERSONAL_CONTENT_ROOT
  ? path.resolve(process.env.PERSONAL_CONTENT_ROOT)
  : path.resolve(process.cwd(), "..", "..", "Content");

const outputPath = path.resolve(
  process.cwd(),
  "src",
  "generated",
  "articleContent.ts",
);

const articleSources = [
  ["ai-efficiency-product-bottleneck", "Works/Articles/AI趋势与判断/2026-08-03_花三个月做10个没人用的App-AI提效之后真正的问题来了/article.md"],
  ["deepseek-v4-flash-agent", "Works/Articles/AI趋势与判断/2026-07-31_DeepSeek-V4-Flash正式版发布-Agent能力继续变强/article.md"],
  ["kimicode-vs-claudecode", "Works/Articles/工具与模型实测/2026-06-14_KimiCode-vs-ClaudeCode工程实测/article.md"],
  ["claude-code-verify-loop", "Works/Articles/Agent工程实战/2026-04-29_Claude-Code+Verify-Loop-从40%到100%通过率的分层防御实测/article.md"],
  ["agent-tool-selection-1200", "Works/Articles/Agent工程实战/2026-04-19_AI-Agent工具选择实战-DeepSeek上1200次对照找出Prompt和工具描述的真实杠杆/article.md"],
  ["openclaw-ai-linux", "Works/Articles/AI趋势与判断/2026-03-09_271K-star的OpenClaw正在成为AI时代的Linux/article.md"],
];

const missingSources = articleSources.filter(([, relativePath]) =>
  !fs.existsSync(path.join(contentRoot, relativePath)),
);

if (missingSources.length > 0) {
  if (fs.existsSync(outputPath)) {
    console.log("Canonical article vault unavailable; using committed website snapshot.");
    process.exit(0);
  }
  throw new Error(`Missing article sources: ${missingSources.map(([slug]) => slug).join(", ")}`);
}

const entries = articleSources.map(([slug, relativePath]) => {
  const raw = fs.readFileSync(path.join(contentRoot, relativePath), "utf8");
  let content = matter(raw).content.trim();
  content = content.replace(/^#\s+.+?(?:\r?\n)+/, "");
  if (slug === "ai-efficiency-product-bottleneck") {
    content = content.split(/^##\s+发布备注/m)[0].trim();
  }
  content = content.replace(
    /\]\(assets\/([^)]+)\)/g,
    `](/images/articles/${slug}/$1)`,
  );
  return `  ${JSON.stringify(slug)}: ${JSON.stringify(content)},`;
});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  `// Generated from the canonical personal content vault.\n// Run npm run sync:articles after updating a published source article.\n\nexport const articleContentBySlug: Record<string, string> = {\n${entries.join("\n")}\n};\n`,
  "utf8",
);

console.log(`Generated article snapshot at ${outputPath}`);
