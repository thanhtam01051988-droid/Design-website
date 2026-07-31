import type { Metadata } from "next";
import ProjectSwitcher from "../project-switcher";
import ProjectImageLightbox from "../project-image-lightbox";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "宏光照明官网 — 徐月月",
  description: "宏光照明企业官网设计案例，展示品牌形象、产品内容、响应式适配与企业故事。",
};

const sections = [
  {
    id: "website",
    number: "01",
    label: "官网设计",
    images: [{ src: "/projects/hongguang-web/01.webp", alt: "宏光照明官网首页与内容展示" }],
  },
  {
    id: "responsive",
    number: "02",
    label: "多端适配",
    images: [{ src: "/projects/hongguang-web/02.webp", alt: "宏光照明官网移动端与桌面端适配" }],
  },
  {
    id: "brand-story",
    number: "03",
    label: "品牌故事",
    images: [{ src: "/projects/hongguang-web/03.webp", alt: "宏光照明品牌故事与企业实力页面" }],
  },
  {
    id: "showcase",
    number: "04",
    label: "成果展示",
    images: [{ src: "/projects/hongguang-web/04.webp", alt: "宏光照明官网整体页面成果展示" }],
  },
];

export default function HongguangWebProject() {
  return (
    <main className="case-page">
      <aside className="case-sidebar" aria-label="项目页导航">
        <a className="case-sidebar-top" href={sitePath("/#work")} aria-label="返回作品集项目列表">
          <span className="case-back"><b aria-hidden="true">⌂</b>返回首页</span>
          <span className="case-number">PROJECT / 05</span>
          <p>WEB · BRAND / 2024</p>
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
                    loading={section.id === "website" ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
          </section>
        ))}
        <ProjectImageLightbox />
        <footer className="case-footer">
          <a href={sitePath("/#work")}>← 返回所有项目</a>
          <div><small>NEXT PROJECT</small><a href={sitePath("/projects/brand-operations/")}>品宣·运营 ↗</a></div>
          <ProjectSwitcher current="05" />
        </footer>
      </div>
    </main>
  );
}
