import EvolutionMark from "@/components/EvolutionMark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <a className="footer-mark" href="/">
            LexLoop <EvolutionMark className="evolution-mark-footer" /> <span>/ 陆徐洲</span>
          </a>
          <p>感知、行动、验证、学习，让人与 AI 在每一轮协作中共同进化。</p>
        </div>
        <div className="footer-links" aria-label="页脚导航">
          <a href="/projects">项目</a>
          <a href="/articles">文章</a>
          <a href="/research">成果</a>
          <a href="/about">关于</a>
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
