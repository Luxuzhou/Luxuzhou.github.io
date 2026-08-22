type EvolutionMarkProps = {
  className?: string;
};

export default function EvolutionMark({ className = "" }: EvolutionMarkProps) {
  return (
    <span className={`evolution-mark ${className}`.trim()} aria-hidden="true">
      <span className="evolution-rail" />
      <span className="evolution-node evolution-node-1" />
      <span className="evolution-node evolution-node-2" />
      <span className="evolution-node evolution-node-3" />
      <span className="evolution-node evolution-node-4" />
    </span>
  );
}
