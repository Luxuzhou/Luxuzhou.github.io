import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageConnections from "@/components/PageConnections";
import PageSummary from "@/components/PageSummary";
import SiteFooter from "@/components/SiteFooter";
import { selectedArticles } from "@/data/site";

export const metadata: Metadata = {
  title: "研究与写作",
  description: "LexLoop 在公众号“硅基鹿鸣”发布的 Agent Engineering、AI 工具、模型能力与产品判断。",
};

export default function ArticlesPage() {
  return (
    <>
      <Navbar current="articles" />
      <main className="page-main">
        <header className="page-intro">
          <div className="site-shell">
            <div className="page-intro-grid">
              <div>
                <p className="eyebrow">RESEARCH & WRITING / 研究与写作</p>
                <h1>从工程实验到产品判断，<br /><em>记录可复现的 AI 实践。</em></h1>
              </div>
              <p className="page-intro-copy">
                这里收录 6 篇代表文章，覆盖 1200 次工具对照、Coding Agent 横评、模型能力追踪与产品复盘。每篇均可阅读全文。
              </p>
            </div>
            <PageSummary items={[
              { value: "6 篇", label: "代表文章" },
              { value: "1200 次", label: "单项对照实验" },
              { value: "全文", label: "站内直接阅读" },
            ]} />
          </div>
        </header>

        <section className="article-index">
          <div className="site-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">SELECTED NOTES / 已确认发布</p>
                <h2>近期代表性文章。</h2>
              </div>
              <p>按发布日期浏览，文章保留实验条件、关键结论与原始论证，并连接到对应的项目案例。</p>
            </div>

            <div className="article-index-list">
              {selectedArticles.map((article) => (
                <a className="article-index-row" href={`/articles/${article.slug}`} key={article.title}>
                  <time>{article.date}</time>
                  <div className="article-index-meta">
                    <span>{article.category}</span>
                    <small>{article.readingTime}</small>
                  </div>
                  <div>
                    <h2>{article.title}</h2>
                    <p>{article.note}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>
        <PageConnections items={[
          {
            eyebrow: "RESEARCH & EVIDENCE / 研究成果",
            title: "查看基金、专利、论文与出版成果",
            description: "了解我在医疗 AI 研究设计、技术方案、工程写作与知识出版中的具体工作。",
            href: "/research",
            action: "查看研究成果",
          },
          {
            eyebrow: "WECHAT / 公众号",
            title: "在「硅基鹿鸣」继续阅读",
            description: "持续获取 Agent 工程实验、工具实测、模型观察与行业判断。",
            href: "/about#wechat",
            action: "查看关注方式",
          },
        ]} />
      </main>
      <SiteFooter />
    </>
  );
}
