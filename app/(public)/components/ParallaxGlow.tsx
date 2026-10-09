'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

interface ParallaxGlowProps {
  tone: 'gold' | 'ember';
  className?: string;
  distance?: number;
}

export default function ParallaxGlow({
  tone,
  className = '',
  distance = 80,
}: ParallaxGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={reduceMotion ? undefined : { y }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${
        tone === 'gold' ? 'glow-gold' : 'glow-ember'
      } ${className}`}
    />
  );
}
