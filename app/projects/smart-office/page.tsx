import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "城投智慧办公 — 徐月月",
  description: "城投智慧办公 App UI/UX 项目案例，涵盖需求分析、AI 设计工作流、核心场景、权限体系与设计规范。",
};

const sections = [
  {
    id: "overview", number: "01", label: "项目概览", title: "集团级智慧办公体验",
    summary: "面向大型集团的多层级管控、跨域协同与安全合规需求，构建从通讯、任务、会议到审批的一体化办公解决方案。",
    images: [{ src: "/projects/smart-office/01.webp", alt: "城投智慧办公项目封面与项目背景" }],
  },
  {
    id: "ai-process", number: "02", label: "AI 设计流程", title: "从脱敏需求到高质量交付",
    summary: "在授权与脱敏环境内，将 AI 用于需求归纳、方案探索、原型预演、规范检查和组件化落地。",
    images: [
      { src: "/projects/smart-office/02.webp", alt: "AI 辅助完成需求梳理、方案设计与交付验证" },
      { src: "/projects/smart-office/03.webp", alt: "AI 介入原型预演、走查与组件复用的交付流程" },
    ],
  },
  {
    id: "solution", number: "03", label: "核心方案", title: "以任务推进为核心的移动办公",
    summary: "通过轻商务视觉、清晰的信息层级与高频任务入口，让物业人员更快完成待办、巡检、报修与会议处理。",
    images: [
      { src: "/projects/smart-office/04.webp", alt: "城投智慧办公首页设计" },
      { src: "/projects/smart-office/05.webp", alt: "视频巡检任务管理设计思路" },
      { src: "/projects/smart-office/06.webp", alt: "消息中心标签层级和视觉引导分析" },
      { src: "/projects/smart-office/07.webp", alt: "基于业务诉求的需求分析与方案拆解" },
    ],
  },
  {
    id: "business", number: "04", label: "关键业务", title: "会议与工单的全流程体验",
    summary: "将预约、审批、执行、处理和归档串联成连续体验，降低信息查找与状态判断成本。",
    images: [
      { src: "/projects/smart-office/08.webp", alt: "智慧办公会议的全生命周期" },
      { src: "/projects/smart-office/09.webp", alt: "企业级会议管理列表与详情页设计" },
      { src: "/projects/smart-office/10.webp", alt: "报事报修工单的发起、分派、处理与完成流程" },
    ],
  },
  {
    id: "permissions", number: "05", label: "权限体系", title: "用角色边界保障安全与效率",
    summary: "以组织、园区与岗位为基础精准开放功能，保护敏感数据，同时避免无关功能干扰。",
    images: [{ src: "/projects/smart-office/11.webp", alt: "登录 App 后的园区与角色权限控制" }],
  },
  {
    id: "collaboration", number: "06", label: "系统协同", title: "后台系统与移动端的协同配合",
    summary: "前台负责轻量化操作，后台完成数据同步、规则校验、自动分派与全流程留痕。",
    images: [{ src: "/projects/smart-office/12.webp", alt: "后台系统与移动端的实时数据同步和任务流转" }],
  },
  {
    id: "design-system", number: "07", label: "设计规范", title: "从品牌图标到标准化组件资产",
    summary: "建立适配多业务场景的图标语言与可复用组件库，提升设计一致性、交付质量和团队协作效率。",
    images: [
      { src: "/projects/smart-office/13.webp", alt: "城投智慧办公品牌视觉与图标规范" },
      { src: "/projects/smart-office/14.webp", alt: "AI 辅助搭建的标准化设计资产与组件库" },
    ],
  },
];

export default function SmartOfficeProject() {
  return (
    <main className="case-page">
      <aside className="case-sidebar" aria-label="项目页导航">
        <div className="case-sidebar-top">
          <a className="case-back" href="/">← 返回作品集</a>
          <span className="case-number">PROJECT / 01</span>
          <h1>城投<br />智慧办公</h1>
          <p>APP UI / UX · 2026</p>
        </div>
        <nav className="case-anchor-nav" aria-label="项目章节">
          {sections.map((section) => <a href={`#${section.id}`} key={section.id}><span>{section.number}</span>{section.label}</a>)}
        </nav>
        <div className="case-sidebar-meta">
          <div><small>ROLE</small><strong>UI Designer</strong></div>
          <div><small>TOOLS</small><strong>Figma · AI · Codex</strong></div>
        </div>
      </aside>

      <div className="case-content">
        {sections.map((section) => (
          <section className="case-section" id={section.id} key={section.id}>
            <div className="case-images">
              {section.images.map((image) => (
                <figure key={image.src}>
                  <img src={image.src} alt={image.alt} loading={section.id === "overview" ? "eager" : "lazy"} />
                </figure>
              ))}
            </div>
          </section>
        ))}
        <footer className="case-footer">
          <a href="/">← 返回所有项目</a>
          <div><small>NEXT PROJECT</small><a href="/projects/daoxue">导学号学习灯 ↗</a></div>
        </footer>
      </div>
    </main>
  );
}
