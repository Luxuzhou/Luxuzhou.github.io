interface SummaryItem {
  value: string;
  label: string;
}

export default function PageSummary({ items }: { items: SummaryItem[] }) {
  return (
    <div className="page-summary-strip" aria-label="页面摘要">
      {items.map((item) => (
        <div key={`${item.value}-${item.label}`}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
