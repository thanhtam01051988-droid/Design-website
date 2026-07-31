import type { Metadata } from "next";
import ProjectSwitcher from "../project-switcher";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "品宣·运营 — 徐月月",
  description: "品牌宣传与运营视觉作品集，涵盖运营插画、节气海报、线下活动物料、企业品宣与直播间礼物动效。",
};

const sections = [
  {
    id: "overview",
    number: "01",
    label: "项目概览",
    images: [
      { src: "/projects/brand-operations/01.webp", alt: "品宣与视觉运营作品集封面" },
      { src: "/projects/brand-operations/02.webp", alt: "运营插画、线下物料和直播间礼物目录" },
    ],
  },
  {
    id: "festival-posters",
    number: "02",
    label: "节气海报",
    images: [{ src: "/projects/brand-operations/03.webp", alt: "导学号节气海报与运营插画" }],
  },
  {
    id: "event-materials",
    number: "03",
    label: "活动物料",
    images: [{ src: "/projects/brand-operations/04.webp", alt: "导学号线下引流活动与周边物料" }],
  },
  {
    id: "brand-collateral",
    number: "04",
    label: "品宣物料",
    images: [{ src: "/projects/brand-operations/05.webp", alt: "企业宣传册、发布会与年会品宣物料" }],
  },
  {
    id: "live-gifts",
    number: "05",
    label: "直播礼物",
    images: [{ src: "/projects/brand-operations/06.webp", alt: "直播间礼物插画与动效应用" }],
  },
  {
    id: "closing",
    number: "06",
    label: "作品尾页",
    images: [{ src: "/projects/brand-operations/07.webp", alt: "品宣与运营作品集尾页" }],
  },
];

export default function BrandOperationsProject() {
  return (
    <main className="case-page">
      <aside className="case-sidebar" aria-label="项目页导航">
        <a className="case-sidebar-top" href={sitePath("/#work")} aria-label="返回作品集项目列表">
          <span className="case-back"><b aria-hidden="true">⌂</b>返回首页</span>
          <span className="case-number">PROJECT / 06</span>
          <p>BRAND · OPERATION / 2022—2026</p>
        </a>
        <nav className="case-anchor-nav" aria-label="项目章节">
          {sections.map((section) => (
            <a href={`#${section.id}`} key={section.id}>
              <span>{section.number}</span>{section.label}
            </a>
          ))}
        </nav>
        <div className="case-sidebar-meta">
          <div><small>ROLE</small><strong>Visual Designer</strong></div>
          <div><small>TOOLS</small><strong>AI · Photoshop · AE</strong></div>
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
          <div><small>NEXT PROJECT</small><a href={sitePath("/projects/smart-office/")}>城投智慧办公 ↗</a></div>
          <ProjectSwitcher current="06" />
        </footer>
      </div>
    </main>
  );
}
