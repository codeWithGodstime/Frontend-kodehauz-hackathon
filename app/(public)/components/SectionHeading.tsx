import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  headline: string;
  body?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  headline,
  body,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <Reveal
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h2 className="d2-m mt-4 text-balance text-text">{headline}</h2>
      {body ? (
        <p
          className={`lead-r mt-5 text-pretty text-text-light ${centered ? 'mx-auto' : ''}`}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
