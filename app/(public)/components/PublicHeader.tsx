'use client';

import { useState } from 'react';
import Link from 'next/link';
import CloseRounded from '@mui/icons-material/CloseRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';
import { NAV_LINKS } from '../data/data';
import AppWordmark from '@/components/AppWordmark';

const SCROLL_THRESHOLD_PX = 24;

export default function PublicHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > SCROLL_THRESHOLD_PX);
  });

  const close = () => setOpen(false);
  const elevated = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        elevated
          ? 'border-stroke bg-background/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <AppContainer>
        <div className="flex items-center justify-between gap-3 py-3.5">
          <AppWordmark onClick={close} />
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <AppButton
                key={link.href}
                variant="text"
                color="info"
                href={link.href}
              >
                {link.label}
              </AppButton>
            ))}
            <span className="mx-2 h-5 w-px bg-stroke" aria-hidden />
            <AppButton variant="text" color="info" href={ROUTES.login}>
              Log in
            </AppButton>
            <AppButton href={ROUTES.register} className="btn-shimmer">
              Start free
            </AppButton>
          </nav>
          <div className="flex items-center gap-1 md:hidden">
            <AppButton size="small" href={ROUTES.register}>
              Start free
            </AppButton>
            <IconButton
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseRounded /> : <MenuRounded />}
            </IconButton>
          </div>
        </div>
      </AppContainer>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            key="mobile-nav"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-t border-stroke md:hidden"
          >
            <AppContainer>
              <ul className="flex flex-col gap-1 py-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="b1-m block rounded-btn-radius px-3 py-3 text-text hover:bg-primary-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={ROUTES.login}
                    onClick={close}
                    className="b1-m block rounded-btn-radius px-3 py-3 text-text-light hover:bg-primary-light"
                  >
                    Log in
                  </Link>
                </li>
              </ul>
            </AppContainer>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
