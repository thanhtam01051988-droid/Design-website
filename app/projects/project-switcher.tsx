import { sitePath } from "../site-path";

const projectLinks = [
  { index: "01", title: "城投智慧办公", href: "/projects/smart-office" },
  { index: "02", title: "大学项目申报管理系统", href: "/#project-02" },
  { index: "03", title: "导学号学习灯 × 导学管家", href: "/projects/daoxue" },
  { index: "04", title: "宏光照明小程序", href: "/#project-04" },
  { index: "05", title: "宏光照明官网", href: "/#project-05" },
  { index: "06", title: "品宣·运营", href: "/#project-06" },
];

export default function ProjectSwitcher({ current }: { current: string }) {
  return (
    <nav className="case-switcher" aria-label="切换其他作品">
      <div className="case-switcher-heading">
        <small>OTHER WORKS</small>
        <strong>切换其他作品</strong>
      </div>
      <div className="case-switcher-links">
        {projectLinks.map((project) => (
          <a
            className={project.index === current ? "is-current" : undefined}
            href={sitePath(project.href.endsWith("daoxue") || project.href.endsWith("smart-office") ? `${project.href}/` : project.href)}
            aria-current={project.index === current ? "page" : undefined}
            key={project.index}
          >
            <span>{project.index}</span>
            <strong>{project.title}</strong>
            <i aria-hidden="true">↗</i>
          </a>
        ))}
      </div>
    </nav>
  );
}
