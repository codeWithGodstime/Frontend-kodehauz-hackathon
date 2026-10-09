import AppIntentChip from '@/components/AppIntentChip';
import { DashboardIntent } from '@/types/dashboard.types';
import { formatCount } from '@/utils/dashboard.utils';

const SEGMENTS = [
  { key: 'order', className: 'bg-label-order' },
  { key: 'enquiry', className: 'bg-label-enquiry' },
  { key: 'ignore', className: 'bg-label-noise' },
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
    <div className="flex flex-col gap-4">
      <div
        className="flex h-2.5 gap-0.5 overflow-hidden rounded-chip-radius bg-background-light"
        role="img"
        aria-label="Intent distribution"
      >
        {SEGMENTS.map((segment) => {
          const count = intent[segment.key];
          if (count === 0) return null;
          return (
            <div
              key={segment.key}
              className={`${segment.className} rounded-chip-radius`}
              style={{ width: `${(count / classified) * 100}%` }}
            />
          );
        })}
      </div>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {SEGMENTS.map((segment) => (
          <li key={segment.key} className="flex items-center gap-2">
            <AppIntentChip category={segment.key} />
            <span className="b2-m tabular text-text">
              {formatCount(intent[segment.key])}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
