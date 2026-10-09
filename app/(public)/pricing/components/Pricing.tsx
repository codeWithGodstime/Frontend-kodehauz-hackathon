'use client';

import { toast } from 'react-toastify';
import { SkeletonLoaderWrapper } from '@msflib/react-components/skeleton';
import { useAuth } from '@msflib/react-auth';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import {
  NO_WORKSPACE_MESSAGE,
  useStartSubscriptionCheckout,
  useSubscriptionPlans,
} from '@/hooks/subscription-plan.hooks';
import { SubscriptionPlan } from '@/types/subscription-plan.types';
import { pricingCopy } from '../../data/data';
import PricingCard from './PricingCard';
import PricingCardLayout from './PricingCardLayout';

export default function Pricing() {
  const { status, me } = useAuth();
  const {
    data: plans = [],
    isLoading,
    isError,
    refetch,
  } = useSubscriptionPlans();
  const { mutate: startCheckout, isPending } = useStartSubscriptionCheckout();

  const handleSubscribe = (plan: SubscriptionPlan) => {
    if (!me?.email || !plan.plan_code) return;
    startCheckout(
      { email: me.email, plan_code: plan.plan_code },
      {
        onSuccess: (checkout) => {
          if (!checkout.authorization_url) {
            toast.error('Could not start the subscription. Please try again.');
            return;
          }
          window.location.assign(checkout.authorization_url);
        },
        onError: (error) => {
          toast.error(
            error instanceof Error && error.message === NO_WORKSPACE_MESSAGE
              ? error.message
              : 'Could not start the subscription. Please try again.'
          );
        },
      }
    );
  };

  return (
    <AppContainer>
      <section className="py-16 md:py-20">
        <div
          id="pricing"
          className="mx-auto max-w-2xl scroll-mt-20 text-center"
        >
          <p className="eyebrow text-primary">{pricingCopy.eyebrow}</p>
          <h1 className="d2-m mt-4 text-balance text-text">
            {pricingCopy.headline}
          </h1>
          <p className="lead-r mt-5 text-text-light">{pricingCopy.body}</p>
        </div>

        {isError ? (
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="b2-r text-error">Could not load plans.</p>
            <AppButton variant="outlined" onClick={() => refetch()}>
              Retry
            </AppButton>
          </div>
        ) : !isLoading && plans.length === 0 ? (
          <p className="b2-r mt-10 text-center text-text-light">
            No plans are available right now.
          </p>
        ) : (
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <SkeletonLoaderWrapper
              loading={isLoading}
              layout={PricingCardLayout}
              skeletonLength={1}
            >
              {plans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  authStatus={status}
                  subscribing={isPending}
                  onSubscribe={handleSubscribe}
                />
              ))}
            </SkeletonLoaderWrapper>
          </div>
        )}
      </section>
    </AppContainer>
  );
}
