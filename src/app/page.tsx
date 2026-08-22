import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import EvolutionMark from "@/components/EvolutionMark";
import { capabilities, featuredCases, selectedArticles } from "@/data/site";

function SystemSketch() {
  return (
    <div className="system-sketch" aria-label="从项目推进到成果沉淀的工作流示意">
      <div className="sketch-heading">
        <span>FIELD NOTE / 026</span>
        <span className="live-dot">IN PROGRESS</span>
      </div>
      <div className="sketch-title">项目推进，需要形成可交付闭环。</div>
      <div className="sketch-flow">
        <div className="flow-node flow-node-primary">
          <span>01</span>
          <strong>计划</strong>
          <small>Project Space</small>
        </div>
        <div className="flow-line" />
        <div className="flow-node">
          <span>02</span>
          <strong>执行</strong>
          <small>Work Package</small>
        </div>
        <div className="flow-line" />
        <div className="flow-node">
          <span>03</span>
          <strong>证据</strong>
          <small>Evidence</small>
        </div>
        <div className="flow-line" />
        <div className="flow-node">
          <span>04</span>
          <strong>产物</strong>
          <small>Artifact</small>
        </div>
      </div>
      <div className="sketch-note">
        DSHOffice 正在把 Obsidian 规划、里程碑提醒、执行证据与内容输出连成一条可验证链路。
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">LEXLOOP / APPLIED AI · SYSTEMS · WRITING</p>
              <h1>
                让 AI 真正工作，
                <em>并且值得信任。</em>
              </h1>
              <p className="hero-lead">
                我是陆徐洲，也以 LexLoop 持续写作，是公众号「硅基鹿鸣」的作者。关注 Agent Engineering、企业数据智能，以及人和 AI 如何共同交付可靠结果。
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/projects">
                  查看代表性实践 <span>↗</span>
                </Link>
                <Link className="text-link" href="/articles">
                  阅读研究与写作 <span>→</span>
                </Link>
              </div>
              <div className="hero-facts" aria-label="个人成果摘要">
                <div>
                  <strong>10,000+</strong>
                  <span>「硅基鹿鸣」读者</span>
                </div>
                <div>
                  <strong>1–5 月</strong>
                  <span>持续日更实践</span>
                </div>
                <div>
                  <strong>1 本</strong>
                  <span>已出版技术图书</span>
                </div>
              </div>
            </div>
            <SystemSketch />
          </div>
        </section>

        <section className="lexloop-strip" aria-label="LexLoop 品牌理念">
          <div className="site-shell lexloop-grid">
            <p className="lexloop-wordmark"><span className="lexloop-label">LEXLOOP</span><EvolutionMark /></p>
            <p><strong>LexLoop</strong> 代表智能的持续进化：感知、行动、验证、学习，让每一轮协同更强。</p>
            <p className="lexloop-channel"><span>微信公众号</span><strong>硅基鹿鸣</strong></p>
          </div>
        </section>

        <section className="marquee" aria-label="关注方向">
          <div>
            <span>AGENT ENGINEERING</span>
            <i>◆</i>
            <span>TRUSTWORTHY AI</span>
            <i>◆</i>
            <span>ENTERPRISE INTELLIGENCE</span>
            <i>◆</i>
            <span>HUMAN–AI COLLABORATION</span>
          </div>
        </section>

        <section className="section-block" id="work">
          <div className="site-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">SELECTED WORK / 代表性实践</p>
                <h2>从关键问题出发，<br />展示解决问题的方式。</h2>
              </div>
              <p>
                核心案例保留问题、约束、关键判断和可验证结果。企业实践均采用重新绘制与不可逆脱敏，客户、源码与内部数据保持在授权边界内。
              </p>
            </div>

            <div className="case-list">
              {featuredCases.map((item) => (
                <Link className="case-row" href={`/projects/${item.slug}`} id={item.index === "01" ? "dshoffice" : undefined} key={item.index}>
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

            <div className="section-action">
              <Link className="text-link" href="/projects">打开完整能力项目库 <span>→</span></Link>
            </div>
          </div>
        </section>

        <section className="section-block section-ink">
          <div className="site-shell">
            <div className="section-heading split-heading light-heading">
              <div>
                <p className="eyebrow">CAPABILITY MAP / 能力地图</p>
                <h2>从模型能力，走到<br />可用的业务系统。</h2>
              </div>
              <p>不同项目承载具体问题，长期积累形成一套从算法、数据和 Agent，到产品判断、工程交付与验收的复合能力。</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => (
                <article key={item.code}>
                  <span>{item.code}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="site-shell works-grid">
            <article className="book-feature" id="book">
              <p className="eyebrow">PUBLISHED BOOK / 已出版</p>
              <figure className="book-media">
                <Image
                  className="book-promo-image"
                  src="/images/harness-engineering-book-promo.png"
                  width={916}
                  height={1528}
                  sizes="(max-width: 760px) 82vw, 270px"
                  alt="《Harness Engineering 实战：构建可靠的生产级 AI Agent》正式出版宣传图"
                  unoptimized
                />
                <figcaption>正式出版宣传图 · 电子工业出版社</figcaption>
              </figure>
              <div className="book-copy">
                <h2>《Harness Engineering 实战》</h2>
                <p>构建可靠的生产级 AI Agent。已于 2026 年 7 月完成正式出版。</p>
              </div>
            </article>

            <article className="writing-list">
              <div className="writing-heading">
                <div>
                  <p className="eyebrow">RECENT NOTES / 近期文章</p>
                  <h2>以实验、项目和判断<br />持续记录 AI 变化。</h2>
                </div>
                <Link className="text-link" href="/articles">全部文章 <span>→</span></Link>
              </div>
              <div>
                {selectedArticles.slice(0, 4).map((article) => (
                  <Link className="article-line" href={`/articles/${article.slug}`} key={article.title}>
                    <time>{article.date}</time>
                    <div>
                      <span>{article.category}</span>
                      <h3>{article.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="closing-section">
          <div className="site-shell closing-grid">
            <p className="eyebrow">NOW / 现在</p>
            <h2>正在构建 DSHOffice，<br />也在寻找下一段值得长期投入的工作。</h2>
            <p>
              希望和真正关心 AI 产品落地、工程可信度与组织协同的人交流。这里会持续公开实践、失败和可复用的方法。
            </p>
            <div>
              <Link className="button button-primary" href="/about">了解我的经历 <span>↗</span></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
