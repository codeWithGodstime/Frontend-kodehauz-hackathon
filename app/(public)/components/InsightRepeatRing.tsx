'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RepeatCustomer } from '../data/data';

interface InsightRepeatRingProps {
  percent: number;
  label: string;
  customers: RepeatCustomer[];
}

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function InsightRepeatRing({
  percent,
  label,
  customers,
}: InsightRepeatRingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <div className="relative h-24 w-24 shrink-0">
        <svg
          viewBox="0 0 80 80"
          className="h-full w-full -rotate-90"
          role="img"
          aria-label={`${percent}% ${label}`}
        >
          <circle
            cx="40"
            cy="40"
            r={RADIUS}
            fill="none"
            strokeWidth="7"
            className="stroke-background-light"
          />
          <motion.circle
            cx="40"
            cy="40"
            r={RADIUS}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            className="stroke-secondary"
            strokeDasharray={CIRCUMFERENCE}
            initial={reduceMotion ? false : { strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{
              strokeDashoffset: CIRCUMFERENCE * (1 - percent / 100),
            }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          />
        </svg>
        <span className="d4-m tabular absolute inset-0 flex items-center justify-center text-text">
          {percent}%
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="b2-m text-text">{label}</p>
        <ul className="mt-3 flex flex-col gap-2">
          {customers.map((customer) => (
            <li
              key={customer.customer_name}
              className="flex items-center justify-between gap-3"
            >
              <span className="b2-r truncate text-text-light">
                {customer.customer_name}
              </span>
              <span className="f1-m tabular rounded-chip-radius bg-label-confirmed-bg px-2 py-0.5 text-label-confirmed">
                {customer.orders} orders
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
