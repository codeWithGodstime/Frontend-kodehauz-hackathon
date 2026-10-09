'use client';

import Check from '@mui/icons-material/Check';
import { AuthStatus } from '@msflib/react-auth';
import AppButton from '@/components/AppButton';
import { ROUTES } from '@/constant/routes.constant';
import { SubscriptionPlan } from '@/types/subscription-plan.types';
import { formatPlanAmount, planCadenceLabel } from '@/utils/plan-amount.utils';
import { planFeatures } from '../data/data';

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
  const features = planFeatures[plan.plan_key] ?? [];
  const guestHref = freePlan ? ROUTES.register : ROUTES.login;

  return (
    <article className="flex w-full max-w-sm flex-col rounded-app-radius border border-stroke bg-surface p-6">
      <h2 className="h5-b text-text">{plan.name}</h2>
      <p className="mt-4 text-text">
        <span className="h3-b">
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
            <Check className="text-primary" fontSize="small" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <AppButton
          fullWidth
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
