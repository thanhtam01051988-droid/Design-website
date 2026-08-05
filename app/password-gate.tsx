"use client";

import { FormEvent, useEffect, useState } from "react";

const ACCESS_KEY = "portfolio-access-v1";
const PASSWORD_HASH = "59c0b26a3a04b49cdb970a64fe07f74621c20234775fc8bf51005cb1bcc62478";

async function hashPassword(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"checking" | "locked" | "unlocked">("checking");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus(sessionStorage.getItem(ACCESS_KEY) === PASSWORD_HASH ? "unlocked" : "locked");
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedHash = await hashPassword(password);
    if (submittedHash === PASSWORD_HASH) {
      sessionStorage.setItem(ACCESS_KEY, PASSWORD_HASH);
      setStatus("unlocked");
      setPassword("");
      setError(false);
      return;
    }
    setError(true);
    setPassword("");
  }

  if (status === "unlocked") return children;

  return (
    <main className="password-gate" aria-busy={status === "checking"}>
      <div className="password-gate-brand" aria-label="徐月月 UI Designer">
        <span>YY</span>
        <div><strong>徐月月</strong><small>UI DESIGNER</small></div>
      </div>

      <section className="password-gate-panel" aria-labelledby="password-gate-title">
        <p>PRIVATE PORTFOLIO / 2026</p>
        <h1 id="password-gate-title">作品集访问</h1>
        <p className="password-gate-copy">请输入访问密码，查看完整项目与设计过程。</p>
        {status === "locked" && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="portfolio-password">访问密码</label>
            <div>
              <input
                id="portfolio-password"
                type="password"
                value={password}
                onChange={(event) => { setPassword(event.target.value); setError(false); }}
                placeholder="请输入密码"
                autoComplete="current-password"
                autoFocus
                aria-invalid={error}
                aria-describedby={error ? "portfolio-password-error" : undefined}
              />
              <button type="submit">进入网站 <span aria-hidden="true">↗</span></button>
            </div>
            {error && <p id="portfolio-password-error" role="alert">密码不正确，请重新输入。</p>}
          </form>
        )}
      </section>

      <footer><span>SELECTED DESIGN WORK</span><span>© 2026 XU YUEYUE</span></footer>
    </main>
  );
}
