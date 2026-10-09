'use client';

import Check from '@mui/icons-material/Check';
import { AppSkeleton } from '@msflib/react-components/skeleton';
import AppButton from '@/components/AppButton';
import { CONTACT_HREF } from '@/constant/contact.constant';
import { ROUTES } from '@/constant/routes.constant';
import { SubscriptionPlan } from '@/types/subscription-plan.types';
import { formatPlanAmount } from '@/utils/plan-amount.utils';
import { PlanTier } from '../data/data';

interface PricingTierProps {
  tier: PlanTier;
  plan?: SubscriptionPlan;
  loading: boolean;
  unavailable: boolean;
}

function tierHref(tier: PlanTier): string {
  if (tier.plan_key === null) return CONTACT_HREF;
  if (tier.plan_key === 'free') return ROUTES.register;
  return ROUTES.pricing;
}

export default function PricingTier({
  tier,
  plan,
  loading,
  unavailable,
}: PricingTierProps) {
  const contactTier = tier.plan_key === null;
  const showPrice = !contactTier && !unavailable;

  return (
    <article
      className={`card-lift relative flex h-full flex-col rounded-app-radius p-6 md:p-7 ${
        tier.highlighted
          ? 'glass-strong shadow-glow-gold border-stroke-strong'
          : 'glass'
      }`}
    >
      {tier.highlighted ? (
        <span className="eyebrow absolute -top-3 left-6 rounded-chip-radius bg-primary px-3 py-1 text-on-primary">
          Most popular
        </span>
      ) : null}
      <h3 className="d4-m text-text">{plan?.name ?? tier.name}</h3>
      <p className="b2-r mt-1 text-text-light">{tier.tagline}</p>

      <div className="mt-6 min-h-12">
        {loading && showPrice ? (
          <AppSkeleton.Text width="60%" height={40} />
        ) : (
          <p className="flex items-baseline gap-2 text-text">
            <span className="d3-m tabular">
              {contactTier
                ? 'Custom'
                : plan
                  ? formatPlanAmount(plan.amount_kobo, plan.currency)
                  : 'See pricing'}
            </span>
            {plan || contactTier ? (
              <span className="b2-r text-text-light">{tier.price_note}</span>
            ) : null}
          </p>
        )}
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="b2-r flex items-start gap-2 text-text">
            <Check className="mt-0.5 shrink-0 text-primary" fontSize="small" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <AppButton
          fullWidth
          size="large"
          href={tierHref(tier)}
          variant={tier.highlighted ? 'contained' : 'outlined'}
          className={tier.highlighted ? 'btn-shimmer' : undefined}
        >
          {tier.cta_label}
        </AppButton>
      </div>
    </article>
  );
}
