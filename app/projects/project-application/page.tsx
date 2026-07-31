import type { Metadata } from "next";
import ProjectSwitcher from "../project-switcher";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "大学项目申报管理系统 — 徐月月",
  description: "面向高校项目库的 B 端申报管理系统，覆盖需求分析、视觉规范、审批工作台、权限管理与流程追溯。",
};

const sections = [
  {
    id: "overview",
    number: "01",
    label: "项目概览",
    images: [
      { src: "/projects/project-application/01.webp", alt: "大学项目申报管理系统封面" },
      { src: "/projects/project-application/02.webp", alt: "项目申报管理系统全局页面与项目简介" },
    ],
  },
  {
    id: "requirements",
    number: "02",
    label: "需求分析",
    images: [
      { src: "/projects/project-application/03.webp", alt: "项目申报系统核心需求与问题提炼" },
      { src: "/projects/project-application/04.webp", alt: "项目全流程中的用户角色、行为和解决方案" },
    ],
  },
  {
    id: "visual-system",
    number: "03",
    label: "视觉规范",
    images: [
      { src: "/projects/project-application/05.webp", alt: "项目申报系统视觉情绪版" },
      { src: "/projects/project-application/06.webp", alt: "项目申报系统色彩、字体、图标与圆角规范" },
    ],
  },
  {
    id: "workspace",
    number: "04",
    label: "核心工作台",
    images: [{ src: "/projects/project-application/07.webp", alt: "集成审批工作台与核心信息布局" }],
  },
  {
    id: "permissions",
    number: "05",
    label: "权限与反馈",
    images: [
      { src: "/projects/project-application/08.webp", alt: "消息中心与抽屉反馈体验设计" },
      { src: "/projects/project-application/09.webp", alt: "部门、用户与角色权限管理设计" },
    ],
  },
  {
    id: "workflow",
    number: "06",
    label: "申报流程",
    images: [
      { src: "/projects/project-application/10.webp", alt: "项目分类与申报表单层级优化" },
      { src: "/projects/project-application/11.webp", alt: "项目申报筛选、详情分页与流程追溯" },
    ],
  },
];

export default function ProjectApplicationProject() {
  return (
    <main className="case-page">
      <aside className="case-sidebar" aria-label="项目页导航">
        <a className="case-sidebar-top" href={sitePath("/#work")} aria-label="返回作品集项目列表">
          <span className="case-back"><b aria-hidden="true">⌂</b>返回首页</span>
          <span className="case-number">PROJECT / 02</span>
          <p>B-END · WEB APPLICATION / 2024</p>
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
          <div><small>TOOLS</small><strong>Figma · Photoshop</strong></div>
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
        <footer className="case-footer">
          <a href={sitePath("/#work")}>← 返回所有项目</a>
          <div><small>NEXT PROJECT</small><a href={sitePath("/projects/daoxue/")}>导学号学习灯 × 导学管家 ↗</a></div>
          <ProjectSwitcher current="02" />
        </footer>
      </div>
    </main>
  );
}
