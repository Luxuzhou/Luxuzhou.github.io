import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageConnections from "@/components/PageConnections";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "关于我",
  description: "关于算法工程师、技术作者与 AI 产品构建者陆徐洲（LexLoop），以及公众号“硅基鹿鸣”。",
};

export default function AboutPage() {
  return (
    <>
      <Navbar current="about" />
      <main className="page-main">
        <header className="page-intro page-intro-about">
          <div className="site-shell page-intro-grid">
            <div>
              <p className="eyebrow">ABOUT / 关于我</p>
              <h1>算法、工程与产品协同，<br /><em>交付可靠 AI 系统。</em></h1>
            </div>
            <p className="page-intro-copy">
              我是陆徐洲，也以 LexLoop 持续写作。八年实践覆盖医疗信息化、企业软件与生产级 AI 应用。
            </p>
          </div>
        </header>

        <section className="about-section">
          <div className="site-shell profile-layout">
            <figure className="profile-photo-card">
              <Image
                className="profile-photo"
                src="/images/lexloop-portrait.webp"
                width={1023}
                height={1537}
                sizes="(max-width: 760px) 92vw, 380px"
                alt="陆徐洲 LexLoop 个人照片"
                priority
                unoptimized
              />
              <figcaption>
                <strong>陆徐洲</strong>
                <span>LexLoop · 算法工程师 / 技术作者</span>
              </figcaption>
            </figure>

            <div className="profile-content">
              <p className="eyebrow">PROFILE / 经历</p>
              <h2>八年算法工程实践，持续走向可靠 AI 系统。</h2>
              <p>
                北京化工大学控制工程专业硕士，现任医疗信息化行业 AI 算法负责人、AI 算法高级工程师。长期参与 LIS、疾控信息系统和企业级 AI 应用建设，实践覆盖算法研发、数据系统、Agent 工程和产品交付。
              </p>
              <p>
                当前研究聚焦 Harness Engineering、Coding Agent、多 Agent 编排、上下文工程和生产级 AI 系统治理。我关心模型如何进入真实业务：数据来源、工具治理、过程观测、结果验收与人工决策边界。
              </p>
              <p>
                工作之外，我以 LexLoop 为笔名运营公众号「硅基鹿鸣」，持续发布 AI Agent 工程实践与工具实测。2026 年 7 月正式出版《Harness Engineering 实战：构建可靠的生产级 AI Agent》及配套代码与视频课程。
              </p>

              <div className="profile-facts" aria-label="个人经历摘要">
                <div><strong>8 年</strong><span>AI 算法研发与工程落地</span></div>
                <div><strong>10,000+</strong><span>「硅基鹿鸣」读者</span></div>
                <div><strong>1 本</strong><span>已出版 Agent 工程图书</span></div>
              </div>

              <p className="availability">当前持续构建 DSHOffice，也欢迎围绕 Agent 平台、企业智能与 AI 产品工程化展开交流与合作。</p>
            </div>
          </div>
        </section>

        <section className="about-connect-section">
          <div className="site-shell about-connect-grid">
            <div className="current-focus-panel">
              <p className="eyebrow">NOW / 当前投入</p>
              <h2>当前工作聚焦两个方向。</h2>
              <div className="current-focus-list">
                <article>
                  <span>BUILDING</span>
                  <h3>DSHOffice</h3>
                  <p>构建可验证的 AI 协同办公平台，连接 Obsidian 规划、项目节奏、执行证据和正式产物。</p>
                </article>
                <article>
                  <span>RESEARCH & WRITING</span>
                  <h3>《深入理解 DeepHarness》</h3>
                  <p>围绕开源 Agent Harness 的架构、机制与生产实践持续研究和写作，目前处于写作阶段。</p>
                </article>
              </div>
            </div>

            <div className="wechat-card" id="wechat">
                <div>
                  <p className="eyebrow">WECHAT / 继续阅读</p>
                  <h3>硅基鹿鸣</h3>
                  <p>持续发布完整实验、工具实测和行业判断，欢迎扫码关注并继续阅读。</p>
                </div>
                <div className="wechat-search" aria-label="微信公众号搜索提示">
                  <a
                    className="wechat-qr-link"
                    href="https://weixin.qq.com/r/mp/6SjH39HEeIwHrZW89337"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="打开微信公众号硅基鹿鸣"
                  >
                    <Image
                      className="wechat-qr"
                      src="/images/silicon-deer-wechat-qr.jpg"
                      width={430}
                      height={430}
                      sizes="230px"
                      alt="微信公众号硅基鹿鸣二维码"
                      unoptimized
                    />
                  </a>
                  <span>微信扫码关注</span>
                  <strong>硅基鹿鸣</strong>
                  <small>作者 · LexLoop</small>
                </div>
              </div>
          </div>
        </section>
        <PageConnections items={[
          {
            eyebrow: "PROJECTS / 项目实践",
            title: "从核心案例了解我的系统能力",
            description: "查看个人产品与脱敏企业案例中的问题、方案、关键判断和验证结果。",
            href: "/projects",
            action: "查看项目实践",
          },
          {
            eyebrow: "RESEARCH & WRITING / 研究与写作",
            title: "从文章和成果了解长期研究方向",
            description: "继续阅读 Agent 工程实验、医疗 AI 研究与技术出版成果。",
            href: "/articles",
            action: "继续阅读",
          },
        ]} />
      </main>
      <SiteFooter />
    </>
  );
}
