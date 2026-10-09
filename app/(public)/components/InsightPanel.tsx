import { ReactNode } from 'react';

interface InsightPanelProps {
  title: string;
  detail: string;
  children: ReactNode;
  className?: string;
}

export default function InsightPanel({
  title,
  detail,
  children,
  className = '',
}: InsightPanelProps) {
  return (
    <article className={`panel flex flex-col gap-4 p-5 ${className}`}>
      <header>
        <h3 className="b1-m text-text">{title}</h3>
        <p className="f1-r mt-0.5 text-text-light">{detail}</p>
      </header>
      {children}
    </article>
  );
}
