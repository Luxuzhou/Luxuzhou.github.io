import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { getArticleBySlug, getProjectBySlug, selectedArticles } from "@/data/site";
import { loadArticleContent } from "@/lib/articleContent";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return selectedArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.note,
    openGraph: { title: article.title, description: article.note, images: [] },
    twitter: { title: article.title, description: article.note, images: [] },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const content = loadArticleContent(article);
  const relatedProjects = article.relatedProjectSlugs
    .flatMap((projectSlug) => {
      const project = getProjectBySlug(projectSlug);
      return project ? [project] : [];
    });
  const relatedArticles = selectedArticles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 2);

  return (
    <>
      <Navbar current="articles" />
      <main className="page-main">
        <header className="article-detail-hero">
          <div className="site-shell article-title-shell">
            <a className="detail-back" href="/articles">← 返回研究与写作</a>
            <p className="eyebrow">{article.category} / PUBLISHED NOTE</p>
            <h1>{article.title}</h1>
            <div className="article-meta-row">
              <time>{article.date}</time>
              <span>{article.readingTime}</span>
              <span>公众号「硅基鹿鸣」首发</span>
            </div>
            <p className="article-deck">{article.note}</p>
          </div>
        </header>

        <section className="article-reading-section">
          <div className="site-shell article-reading-grid">
            <aside className="article-context">
              <p className="eyebrow">CONNECTED WORK / 关联实践</p>
              {relatedProjects.map((project) => (
                <a href={`/projects/${project.slug}`} key={project.slug}>
                  <span>{project.index}</span>
                  <strong>{project.title}</strong>
                </a>
              ))}
              <div className="article-source-note">
                本页由个人内容库中的公众号正式稿生成，保留原文结构并移除发布后台备注。
              </div>
            </aside>
            <article className="article-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ href, children }) => (
                    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined}>
                      {children}
                    </a>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          </div>
        </section>

        <section className="article-end-section">
          <div className="site-shell article-end-grid">
            <div>
              <p className="eyebrow">LEXLOOP / 持续进化</p>
              <h2>从一次实验，进入下一轮实践。</h2>
              <p>公众号「硅基鹿鸣」持续发布完整实验、工具实测和行业判断。</p>
              <a className="button button-primary" href="/about#wechat">关注公众号 <span>↗</span></a>
            </div>
            {relatedArticles.length > 0 && (
              <div className="article-next-list">
                <span>继续阅读</span>
                {relatedArticles.map((item) => (
                  <a href={`/articles/${item.slug}`} key={item.slug}>{item.title} <i>→</i></a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
