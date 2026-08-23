import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lexloop-ai.lexloop619.chatgpt.site"),
  title: {
    default: "LexLoop（陆徐洲）｜可靠 AI 系统的实践与写作",
    template: "%s｜LexLoop",
  },
  description:
    "陆徐洲，笔名 LexLoop，公众号“硅基鹿鸣”作者。关注 Agent Engineering、企业数据智能、可信评测与 AI 协同办公。",
  authors: [{ name: "陆徐洲（LexLoop）" }],
  openGraph: {
    title: "LexLoop｜在实践、验证与复盘中持续进化",
    description: "可靠 AI 系统 · Agent Engineering · 硅基鹿鸣",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LexLoop 个人网站" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LexLoop｜在实践、验证与复盘中持续进化",
    description: "可靠 AI 系统 · Agent Engineering · 硅基鹿鸣",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
