import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageConnections from "@/components/PageConnections";
import PageSummary from "@/components/PageSummary";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "研究与创新成果",
  description: "LexLoop 参与的基金申报、专利技术方案、论文与专家共识协作，以及已出版技术图书。",
};

const researchTracks = [
  {
    code: "01",
    status: "研究设计与申报协作",
    title: "基金与科研项目申报",
    summary: "围绕临床检验、慢病管理、科研平台和医疗 AI 场景，参与研究问题拆解、技术路线、数据与算法方案及申报材料组织。",
    contribution: ["研究问题与产品场景映射", "数据、算法与系统技术路线", "可验证指标与阶段任务设计"],
    detail: "代表工作：医疗数据治理、慢病风险评估、科研平台与智能检验场景的技术路线、验证指标和阶段任务设计。",
  },
  {
    code: "02",
    status: "技术方案与交底",
    title: "临床检验智能体专利方案",
    summary: "围绕全过程室内质控与微生物分级报告，参与把业务规则、事件证据、算法判断和反馈学习整理为可审查的技术方案。",
    contribution: ["系统架构与方法流程", "规则、图谱与证据链设计", "权利要求支撑与专利附图"],
    detail: "代表方案：全过程室内质控智能体、微生物分级报告，以及规则、证据链与反馈学习机制。",
  },
  {
    code: "03",
    status: "技术写作与修订",
    title: "论文与专家共识协作",
    summary: "参与医学实验室人工智能、智慧实验室、网络安全和检验报告智能解读等方向的论文、综述与专家共识材料。",
    contribution: ["文献证据整理", "AI 技术章节撰写", "系统方法与实验表达"],
    detail: "协作方向：医学实验室人工智能、智慧实验室、网络安全和检验报告智能解读。",
  },
  {
    code: "04",
    status: "2026.07 已出版",
    title: "《Harness Engineering 实战》",
    summary: "围绕生产级 AI Agent 的架构、验证、工具治理、上下文工程与交付方法，形成图书、公开代码与配套视频课程。",
    contribution: ["独立作者", "工程体系与实验案例", "配套代码和课程设计"],
    detail: "电子工业出版社出版，配套公开代码与视频课程；本人独立完成工程体系、实验案例和内容设计。",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Navbar current="research" />
      <main className="page-main">
        <header className="page-intro research-intro">
          <div className="site-shell">
            <div className="page-intro-grid">
              <div>
                <p className="eyebrow">RESEARCH &amp; EVIDENCE / 研究与成果</p>
                <h1>把工程实践，转化为<br /><em>可复用的研究成果。</em></h1>
              </div>
              <p className="page-intro-copy">成果覆盖基金技术路线、专利方案、论文协作与技术出版，重点集中在医疗 AI 与生产级 Agent。以下内容说明我实际承担的工作和已公开成果。</p>
            </div>
            <PageSummary items={[
              { value: "4 类", label: "研究与知识成果" },
              { value: "医疗 AI", label: "核心研究场景" },
              { value: "2026.07", label: "技术图书正式出版" },
            ]} />
          </div>
        </header>

        <section className="research-ledger-section">
          <div className="site-shell research-ledger">
            {researchTracks.map((track) => (
              <article key={track.code}>
                <div className="research-ledger-index">
                  <span>{track.code}</span>
                  <strong>{track.status}</strong>
                </div>
                <div className="research-ledger-main">
                  <h2>{track.title}</h2>
                  <p>{track.summary}</p>
                  <div className="research-contribution-list">
                    {track.contribution.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <p className="research-detail">{track.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <PageConnections items={[
          {
            eyebrow: "PROJECTS / 项目实践",
            title: "查看研究方法如何进入真实系统",
            description: "从 DSHOffice 到医疗 AI 平台，继续了解产品架构、工程约束与验证结果。",
            href: "/projects",
            action: "查看项目实践",
          },
          {
            eyebrow: "WRITING / 研究与写作",
            title: "阅读实验、工具与行业判断",
            description: "通过完整文章了解实验设计、关键结论和方法演进。",
            href: "/articles",
            action: "阅读代表文章",
          },
        ]} />
      </main>
      <SiteFooter />
    </>
  );
}
