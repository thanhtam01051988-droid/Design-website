import type { Metadata } from "next";
import ProjectSwitcher from "../project-switcher";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "宏光照明小程序 — 徐月月",
  description: "宏光照明商城小程序设计案例，覆盖商城首页、商品分类、详情购买、智能配灯和个人中心。",
};

const sections = [
  {
    id: "overview",
    number: "01",
    label: "项目概览",
    images: [{ src: "/projects/hongguang-mini/01.webp", alt: "宏光照明商城小程序项目封面" }],
  },
  {
    id: "home",
    number: "02",
    label: "商城首页",
    images: [{ src: "/projects/hongguang-mini/02.webp", alt: "宏光照明商城小程序首页设计" }],
  },
  {
    id: "shopping",
    number: "03",
    label: "购物体验",
    images: [{ src: "/projects/hongguang-mini/03.webp", alt: "宏光照明小程序分类、详情与智能配灯页面" }],
  },
  {
    id: "account",
    number: "04",
    label: "个人中心",
    images: [{ src: "/projects/hongguang-mini/04.webp", alt: "宏光照明小程序购物车与个人中心设计" }],
  },
  {
    id: "showcase",
    number: "05",
    label: "成果展示",
    images: [{ src: "/projects/hongguang-mini/05.webp", alt: "宏光照明小程序页面成果总览" }],
  },
];

export default function HongguangMiniProject() {
  return (
    <main className="case-page">
      <aside className="case-sidebar" aria-label="项目页导航">
        <a className="case-sidebar-top" href={sitePath("/#work")} aria-label="返回作品集项目列表">
          <span className="case-back"><b aria-hidden="true">⌂</b>返回首页</span>
          <span className="case-number">PROJECT / 04</span>
          <p>MINI PROGRAM · E-COMMERCE / 2026</p>
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
          <div><small>NEXT PROJECT</small><a href={sitePath("/projects/hongguang-web/")}>宏光照明官网 ↗</a></div>
          <ProjectSwitcher current="04" />
        </footer>
      </div>
    </main>
  );
}
