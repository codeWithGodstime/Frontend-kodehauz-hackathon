import Check from '@mui/icons-material/Check';
import {
  categoryClassName,
  categoryLabel,
  demoMessages,
  peakHours,
  platforms,
  StageVisual,
  topItems,
} from '../data/data';

interface StagePreviewProps {
  visual: StageVisual;
}

const SORT_PREVIEW = demoMessages.slice(0, 3);
const PEAK = Math.max(...peakHours.map((bucket) => bucket.orders));

export default function StagePreview({ visual }: StagePreviewProps) {
  if (visual === 'connect') {
    return (
      <ul className="mt-6 divide-y divide-stroke overflow-hidden rounded-btn-radius border border-stroke bg-background">
        {platforms.map((platform, index) => (
          <li
            key={platform.name}
            className="flex items-center justify-between gap-3 px-4 py-3"
          >
            <p className="b2-m text-text">{platform.name}</p>
            {index < 2 ? (
              <span className="f1-m inline-flex items-center gap-1 rounded-chip-radius bg-label-confirmed-bg px-2.5 py-1 text-label-confirmed">
                <Check sx={{ fontSize: 14 }} /> Connected
              </span>
            ) : (
              <span className="f1-m rounded-chip-radius bg-primary-light px-2.5 py-1 text-primary">
                Connect
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  if (visual === 'sort') {
    return (
      <ul className="mt-6 space-y-2">
        {SORT_PREVIEW.map((message) => (
          <li
            key={message.id}
            className="flex items-center justify-between gap-3 rounded-btn-radius border border-stroke bg-background px-4 py-3"
          >
            <div className="min-w-0">
              <p className="b2-m truncate text-text">{message.sender_name}</p>
              <p className="f1-r truncate text-text-light">{message.body}</p>
            </div>
            <span
              className={`eyebrow shrink-0 rounded-chip-radius px-2.5 py-1 ${categoryClassName[message.category]}`}
            >
              {categoryLabel[message.category]}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-6 grid gap-3 rounded-btn-radius border border-stroke bg-background p-4">
      <div>
        <p className="f1-m text-text-light">Best seller</p>
        <p className="b2-m mt-0.5 text-text">
          {topItems[0].name}{' '}
          <span className="text-primary tabular">× {topItems[0].count}</span>
        </p>
      </div>
      <div>
        <p className="f1-m text-text-light">Peak hour</p>
        <div className="mt-2 flex h-10 items-end gap-1" aria-hidden>
          {peakHours.map((bucket) => (
            <span
              key={bucket.hour}
              className={`flex-1 rounded-t-sm ${
                bucket.orders === PEAK ? 'bg-primary' : 'bg-primary/30'
              }`}
              style={{ height: `${(bucket.orders / PEAK) * 100}%` }}
            />
          ))}
        </div>
        <p className="b2-m mt-2 text-text">
          8pm <span className="text-text-light">· most orders land here</span>
        </p>
      </div>
    </div>
  );
}
