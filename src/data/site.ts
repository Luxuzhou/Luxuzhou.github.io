export type ProjectStatus = "active" | "delivered" | "research";

export interface FeaturedCase {
  index: string;
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  status: string;
  statusType: ProjectStatus;
  capabilities: string[];
  signal: string;
  role: string;
  problem: string;
  constraints: string[];
  decisions: { title: string; description: string }[];
  evidence: string[];
  outcome: string;
  nextStep: string;
  relatedArticleSlugs: string[];
}

export interface ArticleEntry {
  slug: string;
  date: string;
  title: string;
  category: string;
  note: string;
  readingTime: string;
  sourceRelativePath: string;
  relatedProjectSlugs: string[];
}

export const featuredCases: FeaturedCase[] = [
  {
    index: "01",
    slug: "dshoffice",
    eyebrow: "Personal product",
    title: "DSHOffice",
    summary:
      "面向知识工作者的可验证 AI 协同办公平台。把人员、AI、资料、证据、审批与正式产物组织进同一项工作空间。",
    status: "构建中 · v0.1",
    statusType: "active",
    capabilities: ["Agent Runtime", "Evidence", "Human Approval", "Evaluation"],
    signal: "从真实办公任务中沉淀可复用工作流",
    role: "个人产品负责人、产品架构与核心工程实现",
    problem: "知识工作大量停留在聊天、零散文档与人工催办中。任务目标、来源证据、审批责任和最终产物缺少统一对象，AI 生成速度提高后，交付可信度仍然难以验证。",
    constraints: [
      "产品需要同时适配个人研究、内容生产与正式办公文档场景。",
      "Agent Runtime 必须可替换，上层领域对象不能绑定单一模型或框架。",
      "外部发布、源文档修改和高风险动作必须保留人工审批。",
      "迁入的历史工具需要记录来源、边界与集成状态。",
    ],
    decisions: [
      { title: "稳定领域对象", description: "以 ProjectSpace、WorkPackage、EvidenceItem、Artifact、Approval 和 EvaluationCase 表达工作，而非暴露底层 Agent 内部事件。" },
      { title: "运行时端口", description: "通过 AgentRuntimePort 隔离 DSH 与未来运行时，让产品能力围绕任务和证据持续演进。" },
      { title: "工作流包", description: "把内容研究、文档对比、知识检索和行业计算沉淀为可验收、可复用的场景能力包。" },
      { title: "人机责任边界", description: "审批与完成定义进入任务模型，正式发布和高风险动作由人确认。" },
    ],
    evidence: [
      "核心领域对象与 Runtime Port 已建立，并通过契约测试持续验证。",
      "历史 SOP、内容研究和文档处理能力正在按工作流包迁入。",
      "首批产品链路聚焦内容研究—证据卡—文章草稿，以及 Word/PDF 对比—审批—正式产物。",
    ],
    outcome: "当前处于 v0.1 工程收敛阶段，已经形成清晰的产品边界、领域模型和可验证工作流方向。",
    nextStep: "完成第一条端到端内容链路、桌面提醒与 Obsidian 同步体验，并用真实个人工作持续校正产品。",
    relatedArticleSlugs: ["ai-efficiency-product-bottleneck", "claude-code-verify-loop"],
  },
  {
    index: "02",
    slug: "enterprise-agent-platform",
    eyebrow: "Enterprise case · de-identified",
    title: "企业级 Agent 平台与治理",
    summary:
      "围绕技能、工具、工作台、可观测性、评测与人工审批建立 Agent 控制面，处理长任务、发布门禁与持续演进问题。",
    status: "生产实践 · 已脱敏",
    statusType: "delivered",
    capabilities: ["Agent Platform", "Tool Governance", "Observability", "Release Gates"],
    signal: "证明复杂 Agent 系统的工程化与治理能力",
    role: "Agent 平台方案设计、运行时治理与工程落地",
    problem: "企业引入多个 Agent、技能和工具后，任务入口、运行轨迹、权限、评测与发布门禁容易分散，业务人员也很难从底层技术概念直接完成任务。",
    constraints: [
      "需要连接既有 Java 业务平台、React 前端与 Python Agent Runtime。",
      "医疗业务包含高风险解释流程，必须区分探索型 Agent 与受控工作流。",
      "技能、工具和 Agent 的发布需要权限、契约、评测与人工复核。",
      "运行记录需要支持追踪、复盘、回放和持续改进。",
    ],
    decisions: [
      { title: "三层控制面", description: "前端提供任务工作台，Java 承担应用与持久化注册，Python Runtime 管理技能清单、执行和事件。" },
      { title: "任务优先体验", description: "以任务编辑器、专家、技能、连接器、知识和自动化为入口，把 Trace 与治理信息放在执行后的证据层。" },
      { title: "治理型工具中心", description: "把输入契约、权限、风险、审计、绑定关系和验证结果组织为可发布的工具定义。" },
      { title: "验证闭环", description: "运行轨迹可以转为评测样例，进入离线实验、人工复核、回归和发布门禁。" },
    ],
    evidence: [
      "形成 Agent Workbench、Skill Registry、Tool Center、Observability 与 Evaluation 等连续产品界面。",
      "建立异步运行、事件回放、产物预览、多轮上下文和评测样例沉淀链路。",
      "探索型任务采用 Agent loop，高风险医疗解释保留确定性流程与人工复核。",
    ],
    outcome: "平台从分散 Agent 能力逐步收敛为面向业务任务的控制面，并具备可观测、可评测、可审核的持续改进路径。",
    nextStep: "继续用真实业务场景完善工具治理、评测门禁和任务级交付体验。",
    relatedArticleSlugs: ["agent-tool-selection-1200", "claude-code-verify-loop", "openclaw-ai-linux"],
  },
  {
    index: "03",
    slug: "governed-data-agent",
    eyebrow: "Enterprise case · de-identified",
    title: "治理型企业数据智能体",
    summary:
      "在受控数据、语义约束和可审计查询规范下，让自然语言分析具备确定性边界，并通过成体系的验收矩阵验证结果。",
    status: "企业实践 · 已脱敏",
    statusType: "delivered",
    capabilities: ["Data Agent", "Semantic Governance", "Query Spec", "Acceptance"],
    signal: "证明数据治理、语义系统与大模型结合能力",
    role: "数据 Agent 架构、语义治理、验收体系与产品交付",
    problem: "自然语言数据问答很容易出现指标遗漏、口径漂移、越权查询和模型编造 SQL。业务真正需要的是能够解释、确认并受控执行的分析过程。",
    constraints: [
      "模型不能生成物理表名、字段表达式、SQL 或权限范围。",
      "指标、实体、时间、分组和分析操作都必须映射到已验证目录。",
      "用户确认前不执行，接口失败也不能绕过受控报表服务。",
      "同一套产品需要通过版本化档案适配不同医院与元数据版本。",
    ],
    decisions: [
      { title: "需求原子", description: "先提取不可丢失的指标、实体、时间、分组与操作，独立校验模型计划有没有遗漏。" },
      { title: "QuerySpec", description: "让模型生成受 Schema 约束的语义候选，再由服务端目录、状态机和权限规则确定最终查询规格。" },
      { title: "确定性执行", description: "日期、实体 ID、查询编译和同比环比等计算由服务端处理，模型只依据返回结果组织回答。" },
      { title: "部署门禁", description: "新环境需要经过只读发现、低置信度复核、目录验证和发布检查。" },
    ],
    evidence: [
      "构建版本化语义目录、向量召回、实体解析、确认卡片和只读执行链路。",
      "覆盖聚合、排名、多周期比较、同比、环比、占比和人均等复杂分析。",
      "建立千级 QuerySpec 测试矩阵，并使用真实问题进行模型与数据库联合验收。",
    ],
    outcome: "产品把开放式问答收敛为可解释、可确认、可审计的数据分析流程，并形成面向新环境的标准部署路径。",
    nextStep: "继续扩大业务验收覆盖，完善目录变化检测和跨环境发布证据。",
    relatedArticleSlugs: ["ai-efficiency-product-bottleneck", "deepseek-v4-flash-agent"],
  },
  {
    index: "04",
    slug: "ai-research-platform",
    eyebrow: "Enterprise case · de-identified",
    title: "AI 科研证据与实验平台",
    summary:
      "围绕研究项目连接证据、实验、来源追踪与审批机制。当前公开内容聚焦已经完成的基础阶段，后续规划按未来路线单独呈现。",
    status: "阶段性实践 · 已脱敏",
    statusType: "research",
    capabilities: ["Research Workflow", "Provenance", "Model Gateway", "Approval"],
    signal: "证明科研工作流与可信 AI 产品化判断",
    role: "科研平台产品规划、领域架构与端到端验证设计",
    problem: "科研活动横跨文献、数据库、实验、模型、图表和论文写作，结论与证据经常分散在不同工具中，难以复核、复现和持续演进。",
    constraints: [
      "数据库探索与文献探索需要作为同等重要的研究输入。",
      "患者数据、未公开论文和授权文献必须维持敏感边界。",
      "模型生成的结论、图表和稿件需要绑定证据或实验运行。",
      "选题、方案锁定、高成本实验、写作和部署均需要人工审批。",
    ],
    decisions: [
      { title: "Research Project", description: "以版本化研究项目承载问题、证据、数据、实验、模型、稿件和反馈。" },
      { title: "来源图谱", description: "每个结论和产物都关联论文证据、数据版本、实验运行或部署反馈。" },
      { title: "平台核心与领域包", description: "通用研究对象留在平台核心，LIS 数据源、队列、模板和技能进入领域包。" },
      { title: "渐进式闭环", description: "在既有训练、实验和部署能力上，优先补齐科研上游和证据追溯主链。" },
    ],
    evidence: [
      "完成平台总计划、端到端 MVP、领域架构、路线图和技术决策等规划基线。",
      "现有系统具备权限、审计、数据源、清洗、标注、实验、模型、部署与反馈基础模块。",
      "LIS 数据驱动科研作为首个领域包进入验证范围。",
    ],
    outcome: "当前完成基础阶段和平台级路线收敛，公开案例重点呈现产品判断、证据模型与研究工作流设计。",
    nextStep: "用一个可公开的黄金研究项目验证从方向发现、论文复现到实验比较和稿件证据包的完整链路。",
    relatedArticleSlugs: ["deepseek-v4-flash-agent", "agent-tool-selection-1200"],
  },
];

export const capabilities = [
  {
    code: "A",
    title: "Agent 工程与治理",
    description: "运行时、工具调用、技能体系、评测、可观测性与人工审批。",
  },
  {
    code: "B",
    title: "数据智能与知识系统",
    description: "RAG、语义治理、术语匹配、结构化查询与可追溯证据。",
  },
  {
    code: "C",
    title: "视觉算法与多模态",
    description: "OCR、目标识别、医学图像理解与端到端识别服务。",
  },
  {
    code: "D",
    title: "预测、优化与决策",
    description: "风险预测、时效预测、排班优化与可解释决策支持。",
  },
  {
    code: "E",
    title: "产品化与工程交付",
    description: "从问题定义、原型、接口与部署，到验收、复盘和持续运营。",
  },
];

export const selectedArticles: ArticleEntry[] = [
  {
    slug: "ai-efficiency-product-bottleneck",
    date: "2026.08.03",
    title: "花三个月做10个没人用的App：AI提效之后，真正的问题来了",
    category: "产品判断",
    note: "当实现成本快速下降，选题、用户与分发成为新的瓶颈。",
    readingTime: "约 8 分钟",
    sourceRelativePath: "Works/Articles/AI趋势与判断/2026-08-03_花三个月做10个没人用的App-AI提效之后真正的问题来了/article.md",
    relatedProjectSlugs: ["dshoffice", "enterprise-agent-platform"],
  },
  {
    slug: "deepseek-v4-flash-agent",
    date: "2026.07.31",
    title: "DeepSeek-V4-Flash 正式版发布，Agent 能力继续变强",
    category: "模型观察",
    note: "从真实工具调用与 Agent 场景理解模型能力变化。",
    readingTime: "约 9 分钟",
    sourceRelativePath: "Works/Articles/AI趋势与判断/2026-07-31_DeepSeek-V4-Flash正式版发布-Agent能力继续变强/article.md",
    relatedProjectSlugs: ["governed-data-agent", "ai-research-platform"],
  },
  {
    slug: "kimicode-vs-claudecode",
    date: "2026.06.14",
    title: "KimiCode vs ClaudeCode：kimi2.7code preview 工程实测",
    category: "工具实测",
    note: "把编码 Agent 放进同一工程任务进行横向比较。",
    readingTime: "约 12 分钟",
    sourceRelativePath: "Works/Articles/工具与模型实测/2026-06-14_KimiCode-vs-ClaudeCode工程实测/article.md",
    relatedProjectSlugs: ["dshoffice"],
  },
  {
    slug: "claude-code-verify-loop",
    date: "2026.04.29",
    title: "Claude Code + Verify Loop：从 40% 到 100% 通过率的分层防御实测",
    category: "Agent 工程",
    note: "以可重复实验验证检查、反馈与修复闭环。",
    readingTime: "约 11 分钟",
    sourceRelativePath: "Works/Articles/Agent工程实战/2026-04-29_Claude-Code+Verify-Loop-从40%到100%通过率的分层防御实测/article.md",
    relatedProjectSlugs: ["dshoffice", "enterprise-agent-platform"],
  },
  {
    slug: "agent-tool-selection-1200",
    date: "2026.04.19",
    title: "AI Agent 工具选择实战：DeepSeek 上 1200 次对照找出 Prompt 和工具描述的真实杠杆",
    category: "工程实验",
    note: "用规模化对照实验识别 Prompt 与工具描述的影响。",
    readingTime: "约 8 分钟",
    sourceRelativePath: "Works/Articles/Agent工程实战/2026-04-19_AI-Agent工具选择实战-DeepSeek上1200次对照找出Prompt和工具描述的真实杠杆/article.md",
    relatedProjectSlugs: ["enterprise-agent-platform", "ai-research-platform"],
  },
  {
    slug: "openclaw-ai-linux",
    date: "2026.03.09",
    title: "271K star的OpenClaw，正在成为AI时代的Linux",
    category: "行业研究",
    note: "从生态、基础设施与开发者采用视角判断项目价值。",
    readingTime: "约 7 分钟",
    sourceRelativePath: "Works/Articles/AI趋势与判断/2026-03-09_271K-star的OpenClaw正在成为AI时代的Linux/article.md",
    relatedProjectSlugs: ["enterprise-agent-platform"],
  },
];

export function getProjectBySlug(slug: string) {
  return featuredCases.find((item) => item.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return selectedArticles.find((item) => item.slug === slug);
}

export const projectGroups = [
  {
    number: "01",
    title: "Agent 与知识系统",
    description: "从企业 Agent 控制面、科研工作流到本地 RAG 与知识抽取。",
    projects: ["DSHOffice", "企业级 Agent 平台", "治理型数据智能体", "AI 科研平台", "本地 RAG", "知识抽取"],
  },
  {
    number: "02",
    title: "视觉识别与多模态",
    description: "面向真实业务输入的识别、校正、结构化与质量控制。",
    projects: ["仪器屏幕识别", "图像校正与签名提取", "红细胞面板识别", "裂红细胞检测", "微生物识别", "蛋白电泳识别"],
  },
  {
    number: "03",
    title: "预测与优化",
    description: "把机器学习、约束优化和业务决策结合进可交付系统。",
    projects: ["疾病风险预测", "标本周转时间预测", "血液透析监测", "护理排班优化"],
  },
  {
    number: "04",
    title: "医疗数据与语义治理",
    description: "处理术语、病历、检验结果、标本与规则之间的复杂映射。",
    projects: ["自身免疫疾病分类", "疾控术语匹配", "病历信息抽取", "检验结果归一化", "标本面板映射", "室间质评"],
  },
];
