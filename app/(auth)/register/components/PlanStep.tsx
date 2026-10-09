'use client';

import { useState } from 'react';
import { AppSkeleton } from '@msflib/react-components/skeleton';
import AppButton from '@/components/AppButton';
import { useSubscriptionPlans } from '@/hooks/subscription-plan.hooks';
import { SignupOnboarding } from '@/types/auth.types';
import { SubscriptionPlan } from '@/types/subscription-plan.types';
import { formatPlanAmount, planCadenceLabel } from '@/utils/plan-amount.utils';
import { AuthHeader } from '../../components/Reusables';

interface PlanStepProps {
  pending: boolean;
  onBack: () => void;
  onComplete: (selection: SignupOnboarding) => void;
}

export default function PlanStep({
  pending,
  onBack,
  onComplete,
}: PlanStepProps) {
  const {
    data: plans = [],
    isLoading,
    isError,
    refetch,
  } = useSubscriptionPlans();
  const [planKey, setPlanKey] = useState<string | null>(null);

  return (
    <div>
      <p className="b2-m text-primary">Step 2 of 2</p>
      <AuthHeader
        title="Choose a plan"
        subtitle="Pick a plan now, or skip and decide later."
      />

      {isError ? (
        <div className="mb-4 flex flex-col gap-3">
          <p className="b2-r text-error">Could not load plans.</p>
          <AppButton variant="outlined" onClick={() => refetch()}>
            Retry
          </AppButton>
        </div>
      ) : isLoading ? (
        <AppSkeleton className="mb-4 flex flex-col gap-3">
          <AppSkeleton.Text width="100%" height={64} />
          <AppSkeleton.Text width="100%" height={64} />
        </AppSkeleton>
      ) : plans.length === 0 ? (
        <p className="b2-r mb-4 text-text-light">
          No plans are available right now. You can skip this step.
        </p>
      ) : (
        <div className="mb-4 flex flex-col gap-3">
          {plans.map((plan) => (
            <PlanChoice
              key={plan.id}
              plan={plan}
              selected={planKey === plan.plan_key}
              disabled={pending}
              onSelect={() => setPlanKey(plan.plan_key)}
            />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3">
        <AppButton
          fullWidth
          loading={pending}
          disabled={pending || !planKey}
          onClick={() => onComplete({ plan_key: planKey, skip_plan: false })}
        >
          Continue
        </AppButton>
        <AppButton
          fullWidth
          variant="outlined"
          disabled={pending}
          onClick={() => onComplete({ plan_key: null, skip_plan: true })}
        >
          Skip for now
        </AppButton>
        <AppButton fullWidth variant="text" disabled={pending} onClick={onBack}>
          Back
        </AppButton>
      </div>
    </div>
  );
}

function PlanChoice({
  plan,
  selected,
  disabled,
  onSelect,
}: {
  plan: SubscriptionPlan;
  selected: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  const price = formatPlanAmount(plan.amount_kobo, plan.currency);
  const cadence =
    plan.tier === 'free' ? '' : ` / ${planCadenceLabel(plan.interval)}`;

  return (
    <AppButton
      fullWidth
      variant={selected ? 'contained' : 'outlined'}
      disabled={disabled}
      onClick={onSelect}
    >
      {plan.name} · {price}
      {cadence}
    </AppButton>
  );
}
