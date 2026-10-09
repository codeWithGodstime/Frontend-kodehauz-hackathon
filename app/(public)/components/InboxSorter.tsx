'use client';

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { IngestedMessageCategory } from '@/types/ingested-message.types';
import {
  categoryClassName,
  categoryLabel,
  demoMessages,
  DemoMessage,
} from '../data/data';

const COLUMNS: IngestedMessageCategory[] = ['order', 'enquiry', 'ignore'];
const VISIBLE_INCOMING = 3;
const SORT_EVERY_MS = 1400;
const REST_MS = 2800;
const EASE = [0.22, 1, 0.36, 1] as const;

function useSortedCount(total: number, animate: boolean) {
  const [count, setCount] = useState(animate ? 0 : total);

  useEffect(() => {
    if (!animate) return;
    const delay = count >= total ? REST_MS : SORT_EVERY_MS;
    const timer = window.setTimeout(() => {
      setCount((value) => (value >= total ? 0 : value + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [animate, count, total]);

  return count;
}

function Avatar({ name }: { name: string }) {
  return (
    <span className="f1-b flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background-light text-text-light">
      {name.replace('@', '').charAt(0).toUpperCase()}
    </span>
  );
}

function IncomingBubble({ message }: { message: DemoMessage }) {
  return (
    <motion.li
      layoutId={message.id}
      layout="position"
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="flex items-start gap-3 rounded-app-radius rounded-bl-md border border-stroke bg-background-light px-3.5 py-2.5"
    >
      <Avatar name={message.sender_name} />
      <div className="min-w-0">
        <p className="f1-m text-text-light">{message.sender_name}</p>
        <p className="b2-r text-text">{message.body}</p>
      </div>
    </motion.li>
  );
}

function SortedCard({ message }: { message: DemoMessage }) {
  return (
    <motion.li
      layoutId={message.id}
      layout="position"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="rounded-btn-radius border border-stroke bg-surface p-2.5"
    >
      <p className="f1-m truncate text-text">{message.sender_name}</p>
      <p className="f1-r mt-0.5 line-clamp-2 text-text-light">{message.body}</p>
      {message.extracted ? (
        <p className="f2-m mt-1.5 truncate text-primary">{message.extracted}</p>
      ) : null}
    </motion.li>
  );
}

export default function InboxSorter({
  className = '',
}: {
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const sortedCount = useSortedCount(demoMessages.length, !reduceMotion);
  const incoming = demoMessages.slice(
    sortedCount,
    sortedCount + VISIBLE_INCOMING
  );
  const sorted = demoMessages.slice(0, sortedCount);

  return (
    <div
      className={`glass-strong grain overflow-hidden rounded-app-radius ${className}`}
      role="img"
      aria-label="Incoming DMs being sorted into Order, Enquiry and Ignored cards"
    >
      <div className="flex items-center justify-between border-b border-stroke px-4 py-3">
        <div>
          <p className="f1-m text-text-light">Inbox · 3 pages</p>
          <p className="b2-m text-text">Today</p>
        </div>
        <span className="f1-m flex items-center gap-2 text-secondary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
          </span>
          Listening
        </span>
      </div>

      <LayoutGroup>
        <div className="px-4 pt-4">
          <p className="eyebrow text-text-light">Incoming</p>
          <ul className="mt-2 flex min-h-[11.5rem] flex-col gap-2">
            <AnimatePresence initial={false} mode="popLayout">
              {incoming.map((message) => (
                <IncomingBubble key={message.id} message={message} />
              ))}
            </AnimatePresence>
            {incoming.length === 0 ? (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="b2-r flex flex-1 items-center justify-center rounded-app-radius border border-dashed border-stroke text-text-light"
              >
                Inbox clear. Every message has a place.
              </motion.li>
            ) : null}
          </ul>
        </div>

        <div className="divider-fade mx-4 mt-4" />

        <div className="grid grid-cols-3 gap-2 px-4 pb-4 pt-4">
          {COLUMNS.map((category) => {
            const items = sorted.filter((item) => item.category === category);
            return (
              <div key={category} className="min-w-0">
                <span
                  className={`eyebrow inline-flex rounded-chip-radius px-2 py-1 ${categoryClassName[category]}`}
                >
                  {categoryLabel[category]}
                </span>
                <ul className="mt-2 flex min-h-[9.5rem] flex-col gap-2">
                  <AnimatePresence initial={false} mode="popLayout">
                    {items.map((message) => (
                      <SortedCard key={message.id} message={message} />
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}
