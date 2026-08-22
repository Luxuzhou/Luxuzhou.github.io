import Link from "next/link";
import EvolutionMark from "@/components/EvolutionMark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <Link className="footer-mark" href="/">
            LexLoop <EvolutionMark className="evolution-mark-footer" /> <span>/ 陆徐洲</span>
          </Link>
          <p>感知、行动、验证、学习，让人与 AI 在每一轮协作中共同进化。</p>
        </div>
        <div className="footer-links" aria-label="页脚导航">
          <Link href="/projects">项目</Link>
          <Link href="/articles">文章</Link>
          <Link href="/research">成果</Link>
          <Link href="/about">关于</Link>
          <a href="https://github.com/luxuzhou" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="site-shell footer-meta">
        <span>© 2026 LexLoop · 陆徐洲</span>
        <span>微信公众号 · 硅基鹿鸣</span>
      </div>
    </footer>
  );
}
