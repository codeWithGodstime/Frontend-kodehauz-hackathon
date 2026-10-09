'use client';

import ArrowForward from '@mui/icons-material/ArrowForward';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';
import { hero } from '../data/data';
import InboxSorter from './InboxSorter';
import ParallaxGlow from './ParallaxGlow';

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <ParallaxGlow
        tone="ember"
        className="-top-40 right-[-10%] h-[34rem] w-[34rem] opacity-70"
      />
      <ParallaxGlow
        tone="gold"
        className="bottom-[-12rem] left-[-14rem] h-[30rem] w-[30rem] opacity-50"
        distance={50}
      />
      <AppContainer>
        <div className="relative grid items-center gap-12 py-16 md:gap-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <motion.div
            variants={stagger}
            initial={reduceMotion ? false : 'hidden'}
            animate="show"
          >
            <motion.p variants={rise} className="eyebrow text-primary">
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              variants={rise}
              className="d1-m mt-5 max-w-[12ch] text-balance text-text"
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              variants={rise}
              className="lead-r mt-6 max-w-xl text-pretty text-text-light"
            >
              {hero.subheadline}
            </motion.p>
            <motion.div
              variants={rise}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <AppButton
                size="large"
                href={ROUTES.register}
                endIcon={<ArrowForward />}
                className="btn-shimmer"
              >
                {hero.primary_cta}
              </AppButton>
              <AppButton size="large" variant="outlined" href="#how-it-works">
                {hero.secondary_cta}
              </AppButton>
            </motion.div>
            <motion.p variants={rise} className="f1-r mt-5 text-text-light">
              {hero.trust_line}
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <div
              aria-hidden
              className="glow-gold absolute inset-x-8 -bottom-10 h-24 blur-3xl"
            />
            <InboxSorter className="relative" />
          </motion.div>
        </div>
      </AppContainer>
    </section>
  );
}
