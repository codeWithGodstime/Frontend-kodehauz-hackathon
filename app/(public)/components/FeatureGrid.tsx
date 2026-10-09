'use client';

import { motion, useReducedMotion } from 'framer-motion';
import AppContainer from '@/components/AppContainer';
import { features, featuresCopy } from '../data/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function FeatureGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      className="scroll-mt-24 border-t border-stroke py-20 md:py-28"
    >
      <AppContainer>
        <SectionHeading
          eyebrow={featuresCopy.eyebrow}
          headline={featuresCopy.headline}
          body={featuresCopy.body}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} as="li" delayMs={index * 70} className="h-full">
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="glass group flex h-full flex-col rounded-app-radius p-6 transition-[border-color,box-shadow] duration-300 hover:border-stroke-strong hover:shadow-glow-gold md:p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-btn-radius bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
                  <Icon fontSize="small" />
                </span>
                <h3 className="d4-m mt-6 text-text">{title}</h3>
                <p className="b2-r mt-3 text-text-light">{description}</p>
              </motion.article>
            </Reveal>
          ))}
        </ul>
      </AppContainer>
    </section>
  );
}
