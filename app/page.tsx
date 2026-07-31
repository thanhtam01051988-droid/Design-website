const capabilities = [
  {
    index: "01",
    title: "多端视觉设计",
    description: "可独立完成 App、小程序与 Web 端视觉设计，注重用户需求、体验与多端规范。",
    tags: ["Figma", "Sketch", "Photoshop", "Illustrator"],
  },
  {
    index: "02",
    title: "AI 辅助工作流",
    description: "将 AI 用于需求梳理、竞品分析、创意发散、视觉探索、素材生成与方案迭代。",
    tags: ["AI Workflow", "Research", "Iteration", "Delivery"],
  },
  {
    index: "03",
    title: "插画与动效",
    description: "拥有八年美术绘画基础，能把控视觉风格，并结合插画、Blender 和 AE 提升落地效果。",
    tags: ["Illustration", "Blender", "After Effects", "IP Design"],
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
    type: "APP & WEB / B-END",
    title: "大学项目申报管理系统",
    description: "通过信息化手段改善学校项目库过度依赖人工、信息孤岛、沟通不畅与进度难跟踪的问题。",
    responsibility: "负责系统 B 端 UI，包括图标、页面视觉与交互设计。",
  },
  {
    index: "02",
    type: "EDUTECH / SMART HARDWARE",
    title: "导学号学习灯",
    description: "面向学校学科专用教室，以错题采集、智能诊断、精准推送与效果追踪的路径，服务学生、教师和学校。",
    responsibility: "负责 UI 更新、图标、IP 方案、素材库建立与 IP 海报插画。",
  },
  {
    index: "03",
    type: "APP / FAMILY EDUCATION",
    title: "导学管家",
    description: "连接学生使用的导学灯与家长端，让家长查看每日学习记录和变化，并支持留言与学习权限管控。",
    responsibility: "负责导学管家 UI 设计，包括图标与界面视觉设计。",
  },
  {
    index: "04",
    type: "APP & WEB / BRAND",
    title: "宏光照明官网与小程序",
    description: "为集研发、生产与销售于一体的 LED 照明企业设计官网与购物小程序，承载品牌、产品与发展历程。",
    responsibility: "负责品牌视觉与官网视觉设计。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#home" aria-label="返回首页">YY<span>°</span></a>
        <nav aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#experience">经历</a>
          <a href="#work">项目</a>
        </nav>
        <span className="availability"><i /> AVAILABLE NOW</span>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="hero-kicker">UI DESIGNER / PRODUCT EXPERIENCE</p>
          <div className="hero-title" aria-label="徐月月 UI Designer">
            <h1>徐月月</h1>
            <p>UI DESIGNER</p>
          </div>
          <p className="hero-intro">
            专注 App、小程序与 Web 端体验设计，把需求、交互与视觉系统
            整理成可落地、可复用、可持续迭代的产品方案。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">查看项目 <span>↗</span></a>
            <a className="secondary-action" href="#experience"><span className="doc-icon">▤</span> 工作经历</a>
          </div>
          <div className="hero-principles" aria-label="个人信息">
            <div><small>EDUCATION</small><strong>西安理工大学</strong></div>
            <div><small>MAJOR</small><strong>视觉传达设计</strong></div>
            <div><small>STATUS</small><strong>离职 · 随时可到岗</strong></div>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait resume-portrait">
            <div className="portrait-image" role="img" aria-label="UI 设计师徐月月的简历照片" />
            <span className="portrait-frame" />
            <span className="portrait-folio">PORTFOLIO / 2026</span>
            <span className="portrait-mark">✦</span>
            <span className="portrait-status">Available for UI design work <b>✧</b></span>
          </div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / PROFILE</p>
          <h2>设计、技术与<span className="muted">落地。</span></h2>
          <p className="section-intro">具备八年美术绘画基础，<br />并持续探索 AI 辅助设计工作流。</p>
        </div>

        <div className="capability-list">
          {capabilities.map((item) => (
            <article className="capability" key={item.index}>
              <span className="cap-index">{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="cap-arrow">↗</span>
            </article>
          ))}
        </div>

        <aside className="resume-callout resume-facts">
          <div><p className="eyebrow">CONTACT</p><h3>28 岁 · UI 设计师</h3></div>
          <div className="contact-lines">
            <a href="tel:18729335669">187 2933 5669</a>
            <a href="mailto:18729335669@163.com">18729335669@163.com</a>
          </div>
          <div className="resume-source-links">
            <a href="/resume-page-01.png" target="_blank" rel="noreferrer">原简历 01 ↗</a>
            <a href="/resume-page-02.png" target="_blank" rel="noreferrer">原简历 02 ↗</a>
          </div>
        </aside>
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
          <p>APP · WEB · B-END<br />EDUTECH · BRAND</p>
        </div>
        <div className="resume-project-grid">
          {projects.map((project) => (
            <article className="resume-project-card" key={project.index}>
              <div className="resume-project-top"><span>{project.index}</span><small>{project.type}</small></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-responsibility"><small>MY ROLE</small><strong>{project.responsibility}</strong></div>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div>
          <p className="eyebrow">LET&apos;S MAKE SOMETHING MEANINGFUL</p>
          <h2>有合适的设计机会？<br /><a href="mailto:18729335669@163.com">一起聊聊。↗</a></h2>
        </div>
        <div className="footer-meta"><span>XI&apos;AN · CHINA</span><span>© 2026 XU YUEYUE</span></div>
      </footer>
    </main>
  );
}
