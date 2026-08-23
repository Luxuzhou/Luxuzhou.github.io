import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "研究与创新成果",
  description: "LexLoop 参与的基金申报、专利技术方案、论文与专家共识协作，以及已出版技术图书。",
};

const researchTracks = [
  {
    code: "01",
    status: "协作实践",
    title: "基金与科研项目申报",
    summary: "围绕临床检验、慢病管理、科研平台和医疗 AI 场景，参与研究问题拆解、技术路线、数据与算法方案及申报材料组织。",
    contribution: ["研究问题与产品场景映射", "数据、算法与系统技术路线", "可验证指标与阶段任务设计"],
    disclosure: "经公开授权并核实状态的立项、获批与合作信息将在页面中同步展示。",
  },
  {
    code: "02",
    status: "技术方案与交底",
    title: "临床检验智能体专利方案",
    summary: "围绕全过程室内质控与微生物分级报告，参与把业务规则、事件证据、算法判断和反馈学习整理为可审查的技术方案。",
    contribution: ["系统架构与方法流程", "规则、图谱与证据链设计", "权利要求支撑与专利附图"],
    disclosure: "申请号、受理或授权状态将在完成权属与公开性确认后展示。",
  },
  {
    code: "03",
    status: "撰写与修订",
    title: "论文与专家共识协作",
    summary: "参与医学实验室人工智能、智慧实验室、网络安全和检验报告智能解读等方向的论文、综述与专家共识材料。",
    contribution: ["文献证据整理", "AI 技术章节撰写", "系统方法与实验表达"],
    disclosure: "仅在发表、录用或获得公开许可后展示作者顺序、期刊与正式链接。",
  },
  {
    code: "04",
    status: "2026.07 已出版",
    title: "《Harness Engineering 实战》",
    summary: "围绕生产级 AI Agent 的架构、验证、工具治理、上下文工程与交付方法，形成图书、公开代码与配套视频课程。",
    contribution: ["独立作者", "工程体系与实验案例", "配套代码和课程设计"],
    disclosure: "正式书名：《Harness Engineering 实战：构建可靠的生产级 AI Agent》。",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="page-main">
        <header className="page-intro research-intro">
          <div className="site-shell page-intro-grid">
            <div>
              <p className="eyebrow">RESEARCH &amp; EVIDENCE / 研究与成果</p>
              <h1>让研究经历形成<br /><em>可以核实的成果记录。</em></h1>
            </div>
            <p className="page-intro-copy">这里区分参与、申报、受理、授权、录用和正式发表。每一条公开记录都需要明确个人角色、当前状态与可验证凭证。</p>
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
                <p className="research-disclosure">{track.disclosure}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="research-standard-section">
          <div className="site-shell research-standard-grid">
            <div>
              <p className="eyebrow">PUBLIC STANDARD / 公开标准</p>
              <h2>状态准确，<br />比数量更重要。</h2>
            </div>
            <div className="research-standard-list">
              <p><span>01</span>正式成果展示公开名称、时间、状态与个人角色。</p>
              <p><span>02</span>申报、受理、录用和授权使用各自准确表述。</p>
              <p><span>03</span>企业及合作研究遵守权属、保密和公开授权边界。</p>
              <p><span>04</span>公开链接、编号与证书作为成果的外部验证依据。</p>
            </div>
          </div>
        </section>

        <section className="research-writing-link">
          <div className="site-shell">
            <a href="/articles">继续阅读研究与写作 <span>→</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
