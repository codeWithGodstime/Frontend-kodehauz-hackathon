'use client';

import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: 'div' | 'li' | 'article' | 'section';
}

const RISE_PX = 16;
const DURATION_S = 0.6;

export default function Reveal({
  children,
  className,
  delayMs = 0,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: RISE_PX }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: DURATION_S,
        ease: 'easeOut',
        delay: delayMs / 1000,
      }}
    >
      {children}
    </Component>
  );
}
