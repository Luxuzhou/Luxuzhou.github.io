import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { featuredCases, getProjectBySlug, selectedArticles } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredCases.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: [] },
    twitter: { title: project.title, description: project.summary, images: [] },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedArticles = selectedArticles.filter((article) =>
    project.relatedArticleSlugs.includes(article.slug),
  );

  return (
    <>
      <Navbar current="projects" />
      <main className="page-main">
        <header className="detail-hero project-detail-hero">
          <div className="site-shell">
            <a className="detail-back" href="/projects">← 返回项目实践</a>
            <div className="detail-hero-grid">
              <div>
                <p className="eyebrow">CASE {project.index} / {project.eyebrow}</p>
                <h1>{project.title}</h1>
              </div>
              <div className="detail-hero-summary">
                <p>{project.summary}</p>
                <div className="detail-meta-row">
                  <span className={`status status-${project.statusType}`}>{project.status}</span>
                  <span>{project.role}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="detail-section">
          <div className="site-shell detail-two-column">
            <aside className="detail-sidebar">
              <p className="eyebrow">CAPABILITIES / 能力</p>
              <div className="detail-tag-stack">
                {project.capabilities.map((capability) => <span key={capability}>{capability}</span>)}
              </div>
              <p className="detail-signal">{project.signal}</p>
            </aside>
            <article className="detail-narrative">
              <p className="eyebrow">PROBLEM / 问题</p>
              <h2>真正需要解决的问题</h2>
              <p className="detail-lead">{project.problem}</p>
              <h3>关键约束</h3>
              <ul className="detail-list">
                {project.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="detail-section detail-section-ink">
          <div className="site-shell">
            <div className="detail-section-heading">
              <p className="eyebrow">DECISIONS / 关键判断</p>
              <h2>把复杂系统拆成<br />可治理的工程对象。</h2>
            </div>
            <div className="decision-grid">
              {project.decisions.map((decision, index) => (
                <article key={decision.title}>
                  <span>0{index + 1}</span>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-section">
          <div className="site-shell evidence-grid">
            <div>
              <p className="eyebrow">EVIDENCE / 验证证据</p>
              <h2>结果通过工程事实表达。</h2>
            </div>
            <div>
              <ol className="evidence-list">
                {project.evidence.map((item) => <li key={item}>{item}</li>)}
              </ol>
              <div className="outcome-panel">
                <div><span>当前结果</span><p>{project.outcome}</p></div>
                <div><span>下一步</span><p>{project.nextStep}</p></div>
              </div>
            </div>
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className="related-section">
            <div className="site-shell">
              <p className="eyebrow">RELATED WRITING / 相关写作</p>
              <div className="related-link-list">
                {relatedArticles.map((article) => (
                  <a href={`/articles/${article.slug}`} key={article.slug}>
                    <span>{article.date} · {article.category}</span>
                    <strong>{article.title}</strong>
                    <i>→</i>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.statusType !== "active" && (
          <div className="site-shell public-boundary-note">
            企业案例采用不可逆脱敏。页面仅呈现可公开的职责、系统判断与验证方法，不包含客户名称、源码、内部接口、业务数据及未发布材料。
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
