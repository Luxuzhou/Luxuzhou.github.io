import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageConnections from "@/components/PageConnections";
import PageSummary from "@/components/PageSummary";
import SiteFooter from "@/components/SiteFooter";
import { featuredCases, projectGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "项目实践",
  description: "陆徐洲在 Agent、数据智能、视觉算法、预测优化与工程交付方向的代表性实践。",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar current="projects" />
      <main className="page-main">
        <header className="page-intro">
          <div className="site-shell">
            <div className="page-intro-grid">
              <div>
                <p className="eyebrow">PROJECTS / 项目实践</p>
                <h1>从 AI Agent 到医疗智能，<br /><em>呈现系统级交付能力。</em></h1>
              </div>
              <p className="page-intro-copy">
                四个核心案例展示产品架构、算法方案与工程验证；22 项专题实践补充视觉、预测和数据治理等能力覆盖。企业案例均已完成脱敏。
              </p>
            </div>
            <PageSummary items={[
              { value: "4 个", label: "核心系统案例" },
              { value: "22 项", label: "专题工程实践" },
              { value: "1 个", label: "个人旗舰产品" },
            ]} />
          </div>
        </header>

        <section className="project-feature-stack" id="dshoffice">
          <div className="site-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">FEATURED CASES / 核心案例</p>
                <h2>四个系统级案例，展示<br />从问题定义到结果验证。</h2>
              </div>
              <p>DSHOffice 是持续构建的个人旗舰产品；其余三个案例来自企业实践，仅展示经过脱敏且可以由公开证据支撑的部分。</p>
            </div>

            <div>
              {featuredCases.map((item) => (
                <a className="project-feature-card" href={`/projects/${item.slug}`} key={item.index}>
                  <div className="case-index">{item.index}</div>
                  <div className="case-main">
                    <p className="case-eyebrow">{item.eyebrow}</p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <div className="tag-row">
                      {item.capabilities.map((capability) => <span key={capability}>{capability}</span>)}
                    </div>
                  </div>
                  <div className="case-meta">
                    <span className={`status status-${item.statusType}`}>{item.status}</span>
                    <p>{item.signal}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="archive-section">
          <div className="site-shell">
            <div className="archive-heading">
              <div>
                <p className="eyebrow">EXTENDED PRACTICE / 专题实践</p>
                <h2>22 项专题实践，补充算法与行业覆盖。</h2>
              </div>
              <p>这些专题覆盖 Agent、视觉识别、预测优化和医疗数据治理，展示工程方法如何在不同业务约束下形成可交付结果。</p>
            </div>

            <div className="project-group-grid">
              {projectGroups.map((group) => (
                <article className="project-group" key={group.number}>
                  <span>{group.number}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="project-chip-list">
                    {group.projects.map((project) => <span key={project}>{project}</span>)}
                  </div>
                </article>
              ))}
            </div>

            <p className="confidential-note">
              企业案例已完成不可逆脱敏，公开内容限于重绘架构、方法与经授权的结果；客户、源码、业务数据与内部配置不对外展示。
            </p>
          </div>
        </section>
        <PageConnections items={[
          {
            eyebrow: "RESEARCH / 研究成果",
            title: "查看实践沉淀出的研究与知识成果",
            description: "覆盖医疗 AI 基金技术路线、专利方案、论文协作与 Agent 工程出版。",
            href: "/research",
            action: "查看研究成果",
          },
          {
            eyebrow: "WRITING / 研究与写作",
            title: "阅读项目背后的实验与判断",
            description: "从工具对照、验证实验和产品复盘中了解方法如何形成。",
            href: "/articles",
            action: "阅读代表文章",
          },
        ]} />
      </main>
      <SiteFooter />
    </>
  );
}
