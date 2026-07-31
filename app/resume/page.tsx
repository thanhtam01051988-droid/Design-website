import type { Metadata } from "next";
import { sitePath } from "../site-path";

export const metadata: Metadata = {
  title: "徐月月 — 原简历",
  description: "徐月月 UI 设计师原始简历。",
};

export default function ResumePage() {
  return (
    <main className="original-resume-page">
      <header className="original-resume-header">
        <a href={sitePath("/")} aria-label="返回首页"><span aria-hidden="true">⌂</span>返回首页</a>
        <div>
          <small>RESUME / 2026</small>
          <strong>徐月月 · UI 设计师</strong>
        </div>
        <a href={sitePath("/#work")}>查看作品 ↗</a>
      </header>

      <div className="original-resume-content">
        <figure>
          <img src={sitePath("/resume-page-01.png")} alt="徐月月原简历第一页" loading="eager" />
          <figcaption>01 / 个人信息、个人优势与工作经历</figcaption>
        </figure>
        <figure>
          <img src={sitePath("/resume-page-02.png")} alt="徐月月原简历第二页" loading="lazy" />
          <figcaption>02 / 项目经历与个人爱好</figcaption>
        </figure>
      </div>
    </main>
  );
}
