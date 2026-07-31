import { BadgeCheck, PanelsTopLeft, UsersRound, Workflow } from "lucide-react";
import { sitePath } from "./site-path";

const capabilities = [
  {
    icon: <PanelsTopLeft aria-hidden="true" size={21} strokeWidth={1.7} />,
    title: "多端经验",
    description: "具备 App、小程序、Web 与 B 端系统设计经验，熟悉不同平台规范与复杂业务场景。",
  },
  {
    icon: <Workflow aria-hidden="true" size={21} strokeWidth={1.7} />,
    title: "交互思维",
    description: "从用户需求和业务目标出发梳理信息架构、交互路径与关键状态，并借助 AI 提升方案迭代效率。",
  },
  {
    icon: <BadgeCheck aria-hidden="true" size={21} strokeWidth={1.7} />,
    title: "设计落地",
    description: "覆盖视觉方案、组件规范、原型与高保真交付，持续跟进开发效果、测试验收和体验优化。",
  },
  {
    icon: <UsersRound aria-hidden="true" size={21} strokeWidth={1.7} />,
    title: "协同推进",
    description: "与产品、前端和测试团队持续协作，通过设计评审、进度跟进与问题闭环推动方案上线。",
  },
];

const experiences = [
  {
    period: "2025.10—2026.07",
    company: "深圳云创友翼科技有限公司",
    role: "UI 设计师",
    points: [
      "参与校园项目申报管理系统 B 端与城投智慧办公 C 端设计，完成数据、用户和设计分析并推进方案落地。",
      "使用 AI 辅助设计，跟进开发与前端效果，配合测试部提前测试、把关验收成果。",
      "协助日常营销宣传设计，推进节假日线下物料与海报落地。",
    ],
  },
  {
    period: "2023.09—2025.08",
    company: "西安双立智能科技",
    role: "UI 设计师",
    points: [
      "基于产品需求、竞品与设计趋势分析建立 UI 界面规范，重构 C 端、B 端的视觉与功能架构。",
      "结合 AI 更新 IP 形象与衍生插画，支持日常版本迭代、新功能模块与规范落地。",
      "设计交互与动效，推动 C 端方案落地，同时完成 IP 海报等视觉内容。",
    ],
  },
  {
    period: "2021.07—2023.07",
    company: "西安汇智科技有限公司",
    role: "UI 设计师",
    points: [
      "负责企业官网、ERP 系统和小程序 UI 设计，参与需求分析、视觉方案、组件规范与多端适配。",
      "参与设计评审、上线验收和后续体验优化，依据用户反馈持续调整方案。",
      "协助完成海报、H5、Banner 与弹窗等宣传物料设计。",
    ],
  },
];

const projects = [
  {
    index: "01",
    href: "/projects/smart-office",
    type: "C-END / SMART OFFICE",
    title: "城投智慧办公",
    description: "面向大型集团的智慧办公 App，聚焦多层级管控、任务流转、会议、报修与移动协同。",
    responsibility: "负责 C 端 UI/UX、业务需求分析、AI 辅助设计工作流与组件化交付。",
  },
  {
    index: "02",
    href: null,
    type: "B-END / PROJECT MANAGEMENT",
    title: "大学项目申报管理系统",
    description: "通过信息化手段改善学校项目库过度依赖人工、信息孤岛、沟通不畅与进度难跟踪的问题。",
    responsibility: "负责系统 B 端 UI，包括图标、页面视觉与交互设计。",
  },
  {
    index: "03",
    href: "/projects/daoxue",
    type: "C-END / EDUTECH",
    title: "导学号学习灯 × 导学管家",
    description: "连接学生使用的智能学习设备与家长端 App，串联错题采集、智能诊断、学习记录与家校沟通。",
    responsibility: "负责双端 UI 更新、界面视觉、图标、IP 方案与插画素材库。",
  },
  {
    index: "04",
    href: "/projects/hongguang-mini",
    type: "C-END / E-COMMERCE",
    title: "宏光照明小程序",
    description: "面向轻奢灯具消费者的购物小程序，整合品牌内容、产品浏览、商品详情与购买路径。",
    responsibility: "负责小程序视觉语言、核心购物页面与品牌一致性设计。",
  },
  {
    index: "05",
    href: "/projects/hongguang-web",
    type: "B-END / CORPORATE WEB",
    title: "宏光照明官网",
    description: "为集研发、生产与销售于一体的 LED 照明企业搭建官方网站，承载品牌、产品与发展历程。",
    responsibility: "负责网站信息架构、品牌视觉和核心页面 UI 设计。",
  },
  {
    index: "06",
    href: null,
    type: "BRAND / OPERATION & COMMUNICATION",
    title: "品宣·运营",
    description: "整合 IP 与插画、日常运营、节日活动及品牌传播物料，建立统一且可持续延展的视觉内容体系。",
    responsibility: "负责 IP 形象与插画、活动主视觉、Banner、H5、宣传册、产品海报及线下物料设计。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header resume-site-header">
        <a className="identity-brand" href="#home" aria-label="返回首页">
          <span>YY</span>
          <strong>徐月月<small>UI Designer</small></strong>
        </a>
        <nav aria-label="主导航">
          <a href="#home">关于</a>
          <a href="#about">优势</a>
          <a href={sitePath("/resume/")}>简历</a>
          <a href="#work">项目</a>
        </nav>
      </header>

      <section className="hero resume-hero section-shell" id="home">
        <div className="resume-hero-copy">
          <p className="hero-kicker">RESUME / UI DESIGNER</p>
          <h1>徐月月</h1>
          <p className="resume-hero-intro">
            5 年 UI 设计经验，覆盖 App、小程序、Web 与 B 端系统。
            从需求分析到交互设计、视觉规范和项目落地，持续输出清晰、可复用、可迭代的产品体验。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={sitePath("/resume/")}>
              <span>查看原简历</span><span aria-hidden="true">↗</span>
            </a>
            <a className="secondary-action" href="mailto:18729335669@163.com">
              <span className="doc-icon" aria-hidden="true">✉</span><span>联系邮箱</span>
            </a>
          </div>
        </div>

        <div className="resume-info-grid" aria-label="个人简历信息">
          <div><small>求职意向</small><strong>UI 设计师</strong></div>
          <div><small>工作状态</small><strong>离职 · 随时到岗</strong></div>
          <div><small>所在城市</small><strong>西安</strong></div>
          <div><small>联系方式</small><strong>187 2933 5669</strong></div>
          <div><small>邮箱</small><strong>18729335669@163.com</strong></div>
          <div><small>专业背景</small><strong>视觉传达设计</strong></div>
        </div>
      </section>

      <section className="about capability-section section-shell" id="about">
        <div className="capability-showcase-heading">
          <p className="eyebrow">STRENGTHS</p>
          <h2>个人优势</h2>
        </div>

        <div className="capability-card-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.title}>
              <span className="capability-icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="work-heading">
          <div><p className="eyebrow">02 / EXPERIENCE</p><h2>工作经历</h2></div>
          <p>2021—2026<br />UI / UX DESIGN</p>
        </div>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <span className="experience-count">0{index + 1}</span>
              <div className="experience-main">
                <div className="experience-title">
                  <div><h3>{item.company}</h3><p>{item.role}</p></div>
                  <time>{item.period}</time>
                </div>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="work-heading">
          <div><p className="eyebrow">03 / PROJECTS</p><h2>项目经历</h2></div>
          <p>C-END · B-END<br />BRAND VISUAL</p>
        </div>
        <div className="project-category-summary">
          <div className="category-card category-c"><small>C 端项目 / 03</small><strong>城投智慧办公<br />导学号与导学管家<br />宏光照明小程序</strong></div>
          <div className="category-card category-b"><small>B 端项目 / 02</small><strong>大学项目申报系统<br />宏光照明官网</strong></div>
          <div className="category-card category-brand"><small>品牌视觉 / 01</small><strong>品宣·运营</strong></div>
        </div>
        <div className="resume-project-grid">
          {projects.map((project) => (
            <article className="resume-project-card" id={`project-${project.index}`} key={project.index}>
              {project.href && <a className="project-card-link" href={sitePath(`${project.href}/`)} aria-label={`查看${project.title}完整项目`} />}
              <div className="resume-project-top"><span>{project.index}</span><small>{project.type}</small></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-responsibility"><small>MY ROLE</small><strong>{project.responsibility}</strong></div>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
