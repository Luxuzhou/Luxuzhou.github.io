import Link from "next/link";
import EvolutionMark from "@/components/EvolutionMark";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-shell nav-inner">
        <Link className="brand" href="/" aria-label="LexLoop（陆徐洲）首页">
          <span className="brand-monogram"><EvolutionMark className="evolution-mark-nav" /></span>
          <span className="brand-name">LexLoop <small>陆徐洲</small></span>
        </Link>
        <nav className="main-nav" aria-label="主导航">
          <Link href="/projects">项目实践</Link>
          <Link href="/articles">研究与写作</Link>
          <Link href="/about">关于我</Link>
        </nav>
        <details className="mobile-menu">
          <summary>目录</summary>
          <div>
            <Link href="/projects">项目实践</Link>
            <Link href="/articles">研究与写作</Link>
            <Link href="/about">关于我</Link>
          </div>
        </details>
        <Link className="nav-cta" href="/projects#dshoffice">
          正在构建 DSHOffice <span>↗</span>
        </Link>
      </div>
    </header>
  );
}
