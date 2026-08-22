import fs from "node:fs";
import path from "node:path";

const contentRoot = process.env.PERSONAL_CONTENT_ROOT
  ? path.resolve(process.env.PERSONAL_CONTENT_ROOT)
  : path.resolve(process.cwd(), "..", "..", "Content");

const publicRoot = path.resolve(process.cwd(), "public", "images", "articles");

const articleAssets = [
  ["ai-efficiency-product-bottleneck", "Works/Articles/AI趋势与判断/2026-08-03_花三个月做10个没人用的App-AI提效之后真正的问题来了/assets"],
  ["deepseek-v4-flash-agent", "Works/Articles/AI趋势与判断/2026-07-31_DeepSeek-V4-Flash正式版发布-Agent能力继续变强/assets"],
  ["kimicode-vs-claudecode", "Works/Articles/工具与模型实测/2026-06-14_KimiCode-vs-ClaudeCode工程实测/assets"],
  ["claude-code-verify-loop", "Works/Articles/Agent工程实战/2026-04-29_Claude-Code+Verify-Loop-从40%到100%通过率的分层防御实测/assets"],
  ["agent-tool-selection-1200", "Works/Articles/Agent工程实战/2026-04-19_AI-Agent工具选择实战-DeepSeek上1200次对照找出Prompt和工具描述的真实杠杆/assets"],
];

for (const [slug, relativeSource] of articleAssets) {
  const source = path.join(contentRoot, relativeSource);
  if (!fs.existsSync(source)) continue;

  const destination = path.join(publicRoot, slug);
  fs.mkdirSync(destination, { recursive: true });
  fs.cpSync(source, destination, { recursive: true, force: true });
}

console.log(`Synced article assets from ${contentRoot}`);
