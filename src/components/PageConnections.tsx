interface ConnectionItem {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
}

export default function PageConnections({ items }: { items: ConnectionItem[] }) {
  return (
    <section className="page-connections" aria-label="继续浏览">
      <div className="site-shell page-connections-grid">
        {items.map((item) => (
          <a className="page-connection-card" href={item.href} key={item.href}>
            <span>{item.eyebrow}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <strong>{item.action} →</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
