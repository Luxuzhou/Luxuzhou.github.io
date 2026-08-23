import EvolutionMark from "@/components/EvolutionMark";

type NavKey = "projects" | "articles" | "research" | "about";

const navItems: Array<{ key: NavKey; href: string; label: string }> = [
  { key: "projects", href: "/projects", label: "项目实践" },
  { key: "articles", href: "/articles", label: "研究与写作" },
  { key: "research", href: "/research", label: "研究成果" },
  { key: "about", href: "/about", label: "关于我" },
];

export default function Navbar({ current }: { current?: NavKey }) {
  return (
    <header className="site-header">
      <div className="site-shell nav-inner">
        <a className="brand" href="/" aria-label="LexLoop（陆徐洲）首页">
          <span className="brand-monogram"><EvolutionMark className="evolution-mark-nav" /></span>
          <span className="brand-name">LexLoop <small>陆徐洲</small></span>
        </a>
        <nav className="main-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a
              className={current === item.key ? "is-active" : undefined}
              href={item.href}
              aria-current={current === item.key ? "page" : undefined}
              key={item.key}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary>目录</summary>
          <div>
            {navItems.map((item) => (
              <a
                className={current === item.key ? "is-active" : undefined}
                href={item.href}
                aria-current={current === item.key ? "page" : undefined}
                key={item.key}
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
        <a className="nav-cta" href="/projects#dshoffice">
          正在构建 DSHOffice <span>↗</span>
        </a>
      </div>
    </header>
  );
}
