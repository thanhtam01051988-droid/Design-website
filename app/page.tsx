const capabilities = [
  {
    index: "01",
    title: "产品体验设计",
    description: "从复杂业务中识别关键问题，搭建清晰、可验证的产品体验。",
    tags: ["UX Strategy", "Interaction", "Prototype"],
  },
  {
    index: "02",
    title: "视觉与系统",
    description: "建立一致而有识别度的视觉语言，让体验在不同触点自然延伸。",
    tags: ["Visual Design", "Design System", "Brand"],
  },
  {
    index: "03",
    title: "研究与协作",
    description: "通过研究、数据与跨职能协作，让设计决策有据可循并顺利落地。",
    tags: ["Research", "Workshop", "Delivery"],
  },
];

const projects = [
  {
    number: "01",
    category: "AI PRODUCT · 2026",
    title: "Sora Studio",
    subtitle: "让创意从灵感到成片，少一点阻力。",
    description:
      "面向创作者的 AI 影像工作台，重新梳理从提示词、素材到版本管理的核心路径。",
    metric: "任务完成率 +28%",
    className: "project-ink",
    visual: (
      <div className="studio-ui" aria-hidden="true">
        <div className="studio-top"><i /><i /><i /><span>STUDIO / 01</span></div>
        <div className="studio-stage">
          <div className="studio-orb" />
          <span className="stage-label">GENERATING FRAME</span>
        </div>
        <div className="studio-timeline">
          <span /><span /><span /><span />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    category: "HEALTHCARE · 2025",
    title: "Mori Health",
    subtitle: "把长期健康，变成每天都能理解的小事。",
    description:
      "重构健康数据的阅读方式，用渐进式洞察帮助用户理解趋势并持续行动。",
    metric: "次月留存 +19%",
    className: "project-sage",
    visual: (
      <div className="health-ui" aria-hidden="true">
        <div className="health-phone">
          <div className="health-head"><span>Today</span><i /></div>
          <div className="health-score">82<small>状态良好</small></div>
          <div className="health-chart">
            {[34, 52, 46, 72, 61, 78, 88].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="health-row"><i /><span /><b /></div>
          <div className="health-row"><i /><span /><b /></div>
        </div>
        <span className="health-note">DAY 24 / 30</span>
      </div>
    ),
  },
  {
    number: "03",
    category: "MOBILITY · 2024",
    title: "Flow Mobility",
    subtitle: "一段更安静、更确定的城市出行。",
    description:
      "为多模式出行设计统一体验，连接路线规划、实时信息与服务触点。",
    metric: "咨询量 -31%",
    className: "project-blue",
    visual: (
      <div className="mobility-ui" aria-hidden="true">
        <div className="map-grid" />
        <div className="route-line"><i /><i /><i /></div>
        <div className="trip-card">
          <small>YOUR ROUTE</small>
          <strong>18 min</strong>
          <span>步行 4 分钟 · 地铁 2 站</span>
        </div>
        <div className="map-pin">A</div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#home" aria-label="返回首页">
          LM<span>°</span>
        </a>
        <nav aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#work">项目</a>
          <a href="mailto:hello@example.com">联系</a>
        </nav>
        <span className="availability"><i /> AVAILABLE FOR WORK</span>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">UI / UX DESIGNER · SHANGHAI</p>
          <h1>
            你好，我是林墨。
            <br />
            我设计<span className="underlined">清晰</span>、
            <br />
            有温度的数字体验。
          </h1>
          <div className="hero-bottom">
            <p>
              专注复杂产品与设计系统，
              <br />
              相信好设计始于理解，成于细节。
            </p>
            <a className="text-link" href="#work">
              浏览作品 <span>↘</span>
            </a>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait">
            <div className="portrait-image" role="img" aria-label="UI 设计师林墨的个人形象照片" />
            <span className="portrait-index">PORTRAIT / 2026</span>
            <span className="portrait-mark">+</span>
          </div>
          <div className="portrait-caption">
            <span>BASED IN SHANGHAI</span>
            <span>31.2304° N<br />121.4737° E</span>
          </div>
        </div>

        <div className="scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / CAPABILITIES</p>
          <h2>
            从问题出发，
            <br />
            让复杂变得<span className="muted">简单。</span>
          </h2>
          <p className="section-intro">
            我在策略、体验与视觉之间工作，
            <br />
            让每个决策都服务于真实的人。
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map((item) => (
            <article className="capability" key={item.index}>
              <span className="cap-index">{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <span className="cap-arrow">↗</span>
            </article>
          ))}
        </div>

        <aside className="resume-callout">
          <div>
            <p className="eyebrow">MORE ABOUT ME</p>
            <h3>想了解完整经历？</h3>
          </div>
          <p>我的简历正在整理中，入口会在这里开放。</p>
          <span className="resume-button" aria-label="简历即将开放">
            查看简历 <small>即将开放</small>
          </span>
        </aside>
      </section>

      <section className="work section-shell" id="work">
        <div className="work-heading">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>近期项目</h2>
          </div>
          <p>精选 2024—2026<br />产品与体验设计案例</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-visual ${project.className}`}>
                {project.visual}
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-copy">
                <p className="project-category">{project.category}</p>
                <div className="project-title-row">
                  <div>
                    <h3>{project.title}</h3>
                    <h4>{project.subtitle}</h4>
                  </div>
                  <span className="project-open">↗</span>
                </div>
                <div className="project-meta">
                  <p>{project.description}</p>
                  <strong>{project.metric}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div>
          <p className="eyebrow">LET&apos;S MAKE SOMETHING MEANINGFUL</p>
          <h2>有好问题？<br /><a href="mailto:hello@example.com">一起聊聊。↗</a></h2>
        </div>
        <div className="footer-meta">
          <span>SHANGHAI · CHINA</span>
          <span>© 2026 LIN MO</span>
        </div>
      </footer>
    </main>
  );
}
