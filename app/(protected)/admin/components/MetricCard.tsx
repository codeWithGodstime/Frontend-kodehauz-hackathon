interface MetricCardProps {
  label: string;
  value: string;
  detail?: string;
}

export default function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <article className="rounded-app-radius border border-stroke bg-background p-4">
      <p className="f1-m text-text-light">{label}</p>
      <p className="h5-b mt-2 text-text">{value}</p>
      {detail ? <p className="f1-r mt-1 text-text-light">{detail}</p> : null}
    </article>
  );
}
