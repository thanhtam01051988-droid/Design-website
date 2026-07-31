import type { Metadata } from "next";
import ProjectSwitcher from "../project-switcher";
import ProjectImageLightbox from "../project-image-lightbox";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "导学号学习灯 × 导学管家 — 徐月月",
  description: "连接学生智能学习设备与家长端 App 的教育科技产品设计案例，涵盖产品策略、视觉系统、核心学习流程与双端协同。",
};

const sections = [
  {
    id: "overview",
    number: "01",
    label: "项目概览",
    title: "连接学生与家长的智能学习生态",
    summary: "导学号学习灯服务学生自主学习，导学管家面向家长提供学习记录与管理能力。项目以双端协同为核心，串联学习、诊断、归档与成长反馈。",
    images: [
      { src: "/projects/daoxue/01.webp", alt: "导学号学习灯与导学管家项目封面" },
      { src: "/projects/daoxue/02.webp", alt: "导学号项目背景与产品定位" },
    ],
  },
  {
    id: "strategy",
    number: "02",
    label: "设计策略",
    title: "从业务目标到可执行的设计方向",
    summary: "围绕品牌焕新、效率提升与体验升级梳理设计目标，并结合用户场景与产品规划，将复杂的教育业务转化为清晰、可持续迭代的体验框架。",
    images: [
      { src: "/projects/daoxue/03.webp", alt: "导学号设计目标与业务诉求分析" },
      { src: "/projects/daoxue/04.webp", alt: "基于产品策略和学习场景提炼设计方向" },
    ],
  },
  {
    id: "visual-system",
    number: "03",
    label: "视觉体系",
    title: "建立年轻、可信且可延展的品牌语言",
    summary: "通过高识别度色彩、卡片化信息层级、统一图标与 IP 角色，建立贯穿设备端和家长端的视觉资产，兼顾儿童友好感与产品专业度。",
    images: [
      { src: "/projects/daoxue/05.webp", alt: "导学号界面色彩与卡片视觉语言" },
      { src: "/projects/daoxue/06.webp", alt: "导学号产品图标系统" },
      { src: "/projects/daoxue/07.webp", alt: "导学号 IP 形象与品牌插画设计" },
    ],
  },
  {
    id: "ecosystem",
    number: "04",
    label: "双端生态",
    title: "学习灯与家长端的信息协同",
    summary: "根据学生与家长的角色差异重组信息架构：学生端突出当下任务与自主学习，家长端聚焦数据查看、学习管理和家校沟通。",
    images: [
      { src: "/projects/daoxue/08.webp", alt: "导学号学习灯和导学管家双端架构对比" },
      { src: "/projects/daoxue/09.webp", alt: "导学管家家长端首页与核心功能设计" },
    ],
  },
  {
    id: "self-study",
    number: "05",
    label: "自主学习",
    title: "让学习任务形成清晰的闭环",
    summary: "将任务进入、学习执行、结果反馈和过程记录组织为连续路径，减少理解成本，并通过轻量激励和状态提示帮助学生保持节奏。",
    images: [
      { src: "/projects/daoxue/10.webp", alt: "导学号自主学习流程与任务入口" },
      { src: "/projects/daoxue/11.webp", alt: "导学号自主学习任务执行界面" },
      { src: "/projects/daoxue/12.webp", alt: "导学号课堂作业拍摄与错题归档流程" },
    ],
  },
  {
    id: "growth",
    number: "06",
    label: "成长记录",
    title: "把学习数据转化为可感知的成长",
    summary: "通过作业归档、个人中心与勋章体系呈现阶段成果，让学生获得持续反馈，也让家长能够快速理解学习状态与变化趋势。",
    images: [
      { src: "/projects/daoxue/13.webp", alt: "导学号作业归档和学习数据页面" },
      { src: "/projects/daoxue/14.webp", alt: "导学号个人中心设计" },
      { src: "/projects/daoxue/15.webp", alt: "导学号学习勋章与激励体系" },
    ],
  },
  {
    id: "showcase",
    number: "07",
    label: "成果展示",
    title: "从核心界面到完整产品体验",
    summary: "最终方案覆盖设备端、家长端、品牌 IP 与关键业务页面，并沉淀为可复用的设计资产，为后续功能迭代和多场景延展提供基础。",
    images: [
      { src: "/projects/daoxue/16.webp", alt: "导学号学习灯产品界面综合展示" },
      { src: "/projects/daoxue/18.webp", alt: "导学号核心页面与产品成果总览" },
      { src: "/projects/daoxue/17.webp", alt: "导学号项目结束页" },
    ],
  },
];

export default function DaoxueProject() {
  return (
    <main className="case-page">
      <aside className="case-sidebar" aria-label="项目页导航">
        <a className="case-sidebar-top" href={sitePath("/#work")} aria-label="返回作品集项目列表">
          <span className="case-back"><b aria-hidden="true">⌂</b>返回首页</span>
          <span className="case-number">PROJECT / 03</span>
          <p>APP · SMART HARDWARE / 2024—2025</p>
        </a>
        <nav className="case-anchor-nav" aria-label="项目章节">
          {sections.map((section) => (
            <a href={`#${section.id}`} key={section.id}>
              <span>{section.number}</span>{section.label}
            </a>
          ))}
        </nav>
        <div className="case-sidebar-meta">
          <div><small>ROLE</small><strong>UI Designer</strong></div>
          <div><small>TOOLS</small><strong>Figma · AI · Adobe</strong></div>
        </div>
      </aside>

      <div className="case-content">
        {sections.map((section) => (
          <section className="case-section" id={section.id} key={section.id}>
            <div className="case-images">
              {section.images.map((image) => (
                <figure key={image.src}>
                  <img
                    src={sitePath(image.src)}
                    alt={image.alt}
                    loading={section.id === "overview" ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
          </section>
        ))}
        <ProjectImageLightbox />
        <footer className="case-footer">
          <a href={sitePath("/#work")}>← 返回所有项目</a>
          <div><small>NEXT PROJECT</small><a href={sitePath("/projects/hongguang-mini/")}>宏光照明小程序 ↗</a></div>
          <ProjectSwitcher current="03" />
        </footer>
      </div>
    </main>
  );
}
