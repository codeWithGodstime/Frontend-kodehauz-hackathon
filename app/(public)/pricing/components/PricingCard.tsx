'use client';

import Check from '@mui/icons-material/Check';
import { AuthStatus } from '@msflib/react-auth';
import AppButton from '@/components/AppButton';
import { ROUTES } from '@/constant/routes.constant';
import { SubscriptionPlan } from '@/types/subscription-plan.types';
import { formatPlanAmount, planCadenceLabel } from '@/utils/plan-amount.utils';
import { planTiers } from '../../data/data';

interface PricingCardProps {
  plan: SubscriptionPlan;
  authStatus: AuthStatus;
  subscribing: boolean;
  onSubscribe: (plan: SubscriptionPlan) => void;
}

export default function PricingCard({
  plan,
  authStatus,
  subscribing,
  onSubscribe,
}: PricingCardProps) {
  const signedIn = authStatus === 'authenticated';
  const freePlan = plan.tier === 'free';
  const tier = planTiers.find((item) => item.plan_key === plan.plan_key);
  const features = tier?.features ?? [];
  const guestHref = freePlan ? ROUTES.register : ROUTES.login;

  return (
    <article
      className={`card-lift relative flex w-full max-w-sm flex-col rounded-app-radius p-6 md:p-7 ${
        tier?.highlighted
          ? 'glass-strong shadow-glow-gold border-stroke-strong'
          : 'glass'
      }`}
    >
      {tier?.highlighted ? (
        <span className="eyebrow absolute -top-3 left-6 rounded-chip-radius bg-primary px-3 py-1 text-on-primary">
          Most popular
        </span>
      ) : null}
      <h2 className="d4-m text-text">{plan.name}</h2>
      {tier ? (
        <p className="b2-r mt-1 text-text-light">{tier.tagline}</p>
      ) : null}
      <p className="mt-6 text-text">
        <span className="d3-m tabular">
          {formatPlanAmount(plan.amount_kobo, plan.currency)}
        </span>
        {freePlan ? null : (
          <span className="b2-r text-text-light">
            {' '}
            / {planCadenceLabel(plan.interval)}
          </span>
        )}
      </p>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
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
          variant={tier?.highlighted ? 'contained' : 'outlined'}
          className={tier?.highlighted ? 'btn-shimmer' : undefined}
          loading={!freePlan && subscribing}
          disabled={
            freePlan ? signedIn : authStatus === 'loading' || !plan.plan_code
          }
          href={signedIn ? undefined : guestHref}
          onClick={freePlan || !signedIn ? undefined : () => onSubscribe(plan)}
        >
          {freePlan
            ? signedIn
              ? 'Included'
              : 'Get started'
            : signedIn || authStatus === 'loading'
              ? 'Subscribe'
              : 'Log in to subscribe'}
        </AppButton>
      </div>
    </article>
  );
}
