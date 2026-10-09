import { DashboardIntent } from '@/types/dashboard.types';
import { formatCount } from '@/utils/dashboard.utils';

const SEGMENTS = [
  { key: 'order', label: 'Order', className: 'bg-primary' },
  { key: 'enquiry', label: 'Enquiry', className: 'bg-secondary' },
  { key: 'ignore', label: 'Ignore', className: 'bg-tertiary' },
] as const;

export default function IntentBreakdown({
  intent,
}: {
  intent: DashboardIntent;
}) {
  const classified = intent.order + intent.enquiry + intent.ignore;

  if (classified === 0) {
    return (
      <p className="b2-r text-text-light">
        No classified messages in this period.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        className="flex h-3 overflow-hidden rounded-app-radius bg-background"
        role="img"
        aria-label="Intent distribution"
      >
        {SEGMENTS.map((segment) => {
          const count = intent[segment.key];
          if (count === 0) return null;
          return (
            <div
              key={segment.key}
              className={segment.className}
              style={{ width: `${(count / classified) * 100}%` }}
            />
          );
        })}
      </div>
      <ul className="flex flex-wrap gap-4">
        {SEGMENTS.map((segment) => (
          <li key={segment.key} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${segment.className}`} />
            <span className="b2-r text-text">
              {segment.label}{' '}
              <span className="text-text-light">
                {formatCount(intent[segment.key])}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
