'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RankedItem } from '../data/data';

interface InsightBarListProps {
  items: RankedItem[];
}

export default function InsightBarList({ items }: InsightBarListProps) {
  const reduceMotion = useReducedMotion();
  const max = Math.max(...items.map((item) => item.count));

  return (
    <ol className="flex flex-col gap-3">
      {items.map((item, index) => (
        <li key={item.name}>
          <div className="flex items-center justify-between gap-3">
            <span className="b2-m truncate text-text">{item.name}</span>
            <span className="b2-r tabular text-text-light">{item.count}</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-chip-radius bg-background-light">
            <motion.div
              className={`h-full origin-left rounded-chip-radius ${
                index === 0 ? 'bg-primary' : 'bg-primary/55'
              }`}
              style={{ width: `${(item.count / max) * 100}%` }}
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
                delay: 0.1 + index * 0.08,
              }}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}
