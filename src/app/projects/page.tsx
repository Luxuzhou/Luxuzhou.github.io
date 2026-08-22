import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { featuredCases, projectGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "项目实践",
  description: "陆徐洲在 Agent、数据智能、视觉算法、预测优化与工程交付方向的代表性实践。",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="page-main">
        <header className="page-intro">
          <div className="site-shell page-intro-grid">
            <div>
              <p className="eyebrow">PROJECTS / 项目实践</p>
              <h1>让项目成为能力证据，<br /><em>沉淀可讨论的实践。</em></h1>
            </div>
            <p className="page-intro-copy">
              这里将个人产品与脱敏后的企业实践放进同一套证据框架：问题是什么、约束在哪里、我做了什么判断、结果如何被验证。
            </p>
          </div>
        </header>

        <section className="project-feature-stack" id="dshoffice">
          <div className="site-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">FEATURED CASES / 核心案例</p>
                <h2>四个值得深入讲述的<br />系统级实践。</h2>
              </div>
              <p>DSHOffice 是持续构建的个人旗舰产品；其余三个案例来自企业实践，仅展示经过脱敏且可以由公开证据支撑的部分。</p>
            </div>

            <div>
              {featuredCases.map((item) => (
                <Link className="project-feature-card" href={`/projects/${item.slug}`} key={item.index}>
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="archive-section">
          <div className="site-shell">
            <div className="archive-heading">
              <div>
                <p className="eyebrow">CAPABILITY ARCHIVE / 能力项目库</p>
                <h2>更多小项目，按能力组织。</h2>
              </div>
              <p>核心案例呈现纵向深度，小项目补充能力覆盖面，并为后续面试、文章和专题案例提供可追溯入口。</p>
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
              保密说明：企业案例采用不可逆脱敏，仅呈现重新绘制的架构与流程；指标均经过公开权限确认。公司源码、客户名称、真实业务数据、内部接口、私有配置与未发布截图保持在授权边界内。
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
