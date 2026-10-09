'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AppContainer from '@/components/AppContainer';
import { stages } from '../data/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import StagePreview from './StagePreview';

function Connector({ index }: { index: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className="absolute left-full top-9 hidden h-px w-6 origin-left bg-stroke-strong lg:block"
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 + index * 0.1 }}
    />
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 md:py-28">
      <AppContainer>
        <SectionHeading
          eyebrow="How it works"
          headline="Three steps from messy inbox to clear picture."
          body="Connect a page, let the AI label every message, then open a dashboard that already knows your business."
        />

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <Reveal
              key={stage.title}
              as="li"
              delayMs={index * 90}
              className="relative h-full"
            >
              <article className="card-lift glass flex h-full flex-col rounded-app-radius p-6 md:p-8">
                <span className="d4-m tabular inline-flex h-11 w-11 items-center justify-center rounded-btn-radius bg-primary-light text-primary">
                  {index + 1}
                </span>
                <h3 className="d4-m mt-6 text-text">{stage.title}</h3>
                <p className="b2-r mt-3 text-text-light">{stage.description}</p>
                <StagePreview visual={stage.visual} />
              </article>
              {index < stages.length - 1 ? <Connector index={index} /> : null}
            </Reveal>
          ))}
        </ol>
        <p className="f1-r mt-6 text-text-light">
          Names and numbers in these cards are examples, not real customers.
        </p>
      </AppContainer>
    </section>
  );
}
