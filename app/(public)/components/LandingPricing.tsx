'use client';

import AppContainer from '@/components/AppContainer';
import { useSubscriptionPlans } from '@/hooks/subscription-plan.hooks';
import { planTiers, pricingCopy } from '../data/data';
import PricingTier from './PricingTier';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function LandingPricing() {
  const { data: plans = [], isLoading, isError } = useSubscriptionPlans();

  return (
    <section id="pricing" className="scroll-mt-24 py-20 md:py-28">
      <AppContainer>
        <SectionHeading
          eyebrow={pricingCopy.eyebrow}
          headline={pricingCopy.headline}
          body={pricingCopy.body}
          align="center"
        />

        <ul className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {planTiers.map((tier, index) => (
            <Reveal
              key={tier.name}
              as="li"
              delayMs={index * 80}
              className="h-full"
            >
              <PricingTier
                tier={tier}
                plan={plans.find((plan) => plan.plan_key === tier.plan_key)}
                loading={isLoading}
                unavailable={isError}
              />
            </Reveal>
          ))}
        </ul>
        <p className="f1-r mt-6 text-center text-text-light">
          {pricingCopy.footnote}
        </p>
      </AppContainer>
    </section>
  );
}
