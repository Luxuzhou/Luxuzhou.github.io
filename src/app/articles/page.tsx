import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { selectedArticles } from "@/data/site";

export const metadata: Metadata = {
  title: "研究与写作",
  description: "LexLoop 在公众号“硅基鹿鸣”发布的 Agent Engineering、AI 工具、模型能力与产品判断。",
};

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main className="page-main">
        <header className="page-intro">
          <div className="site-shell page-intro-grid">
            <div>
              <p className="eyebrow">RESEARCH & WRITING / 研究与写作</p>
              <h1>围绕真实使用，<br /><em>记录经得起验证的判断。</em></h1>
            </div>
            <p className="page-intro-copy">
              从工程实验、模型观察到产品复盘。文章优先回答三个问题：发生了什么、我如何验证、它会改变什么实际工作。
            </p>
          </div>
        </header>

        <section className="article-index">
          <div className="site-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">SELECTED NOTES / 已确认发布</p>
                <h2>近期代表性文章。</h2>
              </div>
              <p>当前展示已核实的公众号标题和发布日期；后续内容同步流程将逐步接入全文与原始素材，所有条目都以真实发布记录为准。</p>
            </div>

            <div className="article-index-list">
              {selectedArticles.map((article) => (
                <a className="article-index-row" href={`/articles/${article.slug}`} key={article.title}>
                  <time>{article.date}</time>
                  <span>{article.category}</span>
                  <div>
                    <h2>{article.title}</h2>
                    <p>{article.note}</p>
                  </div>
                </a>
              ))}
            </div>

            <a className="research-gateway" href="/research">
              <span>RESEARCH &amp; EVIDENCE / 研究与成果</span>
              <div>
                <h2>基金申报、专利方案、论文协作与出版成果</h2>
                <p>按公开状态、个人角色和可验证证据组织，逐步补齐完整成果台账。</p>
              </div>
              <strong>查看研究成果 →</strong>
            </a>

            <div className="channel-note">
              <strong>硅基鹿鸣</strong>
              <p>以上文章均由 LexLoop 发布于公众号「硅基鹿鸣」。网站承担公开索引、专题整理和案例延伸，公众号保留完整正文与连续发布节奏。</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
