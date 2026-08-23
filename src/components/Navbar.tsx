import EvolutionMark from "@/components/EvolutionMark";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-shell nav-inner">
        <a className="brand" href="/" aria-label="LexLoop（陆徐洲）首页">
          <span className="brand-monogram"><EvolutionMark className="evolution-mark-nav" /></span>
          <span className="brand-name">LexLoop <small>陆徐洲</small></span>
        </a>
        <nav className="main-nav" aria-label="主导航">
          <a href="/projects">项目实践</a>
          <a href="/articles">研究与写作</a>
          <a href="/research">研究成果</a>
          <a href="/about">关于我</a>
        </nav>
        <details className="mobile-menu">
          <summary>目录</summary>
          <div>
            <a href="/projects">项目实践</a>
            <a href="/articles">研究与写作</a>
            <a href="/research">研究成果</a>
            <a href="/about">关于我</a>
          </div>
        </details>
        <a className="nav-cta" href="/projects#dshoffice">
          正在构建 DSHOffice <span>↗</span>
        </a>
      </div>
    </header>
  );
}
