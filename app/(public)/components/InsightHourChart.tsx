'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HourBucket } from '../data/data';

interface InsightHourChartProps {
  buckets: HourBucket[];
}

export default function InsightHourChart({ buckets }: InsightHourChartProps) {
  const reduceMotion = useReducedMotion();
  const max = Math.max(...buckets.map((bucket) => bucket.orders));

  return (
    <div>
      <div
        className="flex h-36 items-end gap-1.5 sm:gap-2"
        role="img"
        aria-label={`Orders by hour. Busiest at ${
          buckets.find((bucket) => bucket.orders === max)?.hour
        } with ${max} orders.`}
      >
        {buckets.map((bucket, index) => (
          <div
            key={bucket.hour}
            className="flex h-full flex-1 flex-col justify-end"
          >
            <motion.div
              className={`w-full origin-bottom rounded-t-md ${
                bucket.orders === max ? 'bg-primary' : 'bg-primary/35'
              }`}
              style={{ height: `${(bucket.orders / max) * 100}%` }}
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.1 + index * 0.06,
              }}
            />
          </div>
        ))}
      </div>
      <ul className="mt-2 flex gap-1.5 sm:gap-2" aria-hidden>
        {buckets.map((bucket) => (
          <li
            key={bucket.hour}
            className="f2-m flex-1 text-center text-text-light"
          >
            {bucket.hour}
          </li>
        ))}
      </ul>
    </div>
  );
}
