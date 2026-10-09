import { useMutation, useQuery } from '@tanstack/react-query';
import { createWorkspaceApi } from '@msflib/react-workspace';
import { subscriptionPlanApi } from '@/api/subscription-plan.api';
import {
  SUBSCRIPTION_PLAN_CACHE_KEY,
  SUBSCRIPTION_PLAN_CACHE_MS,
} from '@/constant/subscription-plan.constant';
import {
  SubscriptionCheckoutPayload,
  SubscriptionPlan,
} from '@/types/subscription-plan.types';

export const NO_WORKSPACE_MESSAGE = 'Create a workspace before subscribing.';

export const subscriptionPlanKeys = {
  all: ['subscription-plan'] as const,
  list: () => [...subscriptionPlanKeys.all, 'list'] as const,
};

interface CachedSubscriptionPlans {
  saved_at: number;
  plans: SubscriptionPlan[];
}

let catalogCachedAt = 0;

function isSubscriptionPlan(value: unknown): value is SubscriptionPlan {
  if (!value || typeof value !== 'object') return false;
  const plan = value as SubscriptionPlan;
  return (
    typeof plan.id === 'number' &&
    typeof plan.plan_key === 'string' &&
    typeof plan.name === 'string' &&
    (plan.tier === 'free' || plan.tier === 'paid') &&
    typeof plan.interval === 'string' &&
    typeof plan.amount_kobo === 'number' &&
    typeof plan.currency === 'string' &&
    (plan.plan_code === null || typeof plan.plan_code === 'string')
  );
}

function readSubscriptionPlanCache(): SubscriptionPlan[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(SUBSCRIPTION_PLAN_CACHE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    const cached = parsed as CachedSubscriptionPlans;
    if (typeof cached.saved_at !== 'number' || !Array.isArray(cached.plans)) {
      return null;
    }
    if (Date.now() - cached.saved_at >= SUBSCRIPTION_PLAN_CACHE_MS) return null;
    if (!cached.plans.every(isSubscriptionPlan)) return null;
    catalogCachedAt = cached.saved_at;
    return cached.plans;
  } catch {
    return null;
  }
}

function writeSubscriptionPlanCache(plans: SubscriptionPlan[]) {
  if (typeof window === 'undefined' || plans.length === 0) return;
  const saved_at = Date.now();
  catalogCachedAt = saved_at;
  const payload: CachedSubscriptionPlans = { saved_at, plans };
  window.localStorage.setItem(
    SUBSCRIPTION_PLAN_CACHE_KEY,
    JSON.stringify(payload)
  );
}

export const useSubscriptionPlans = () =>
  useQuery({
    queryKey: subscriptionPlanKeys.list(),
    queryFn: async () => {
      const cached = readSubscriptionPlanCache();
      if (cached) return cached;
      const plans = await subscriptionPlanApi.list();
      writeSubscriptionPlanCache(plans);
      return plans;
    },
    staleTime: (query) => {
      const plans = query.state.data;
      if (!plans?.length || catalogCachedAt <= 0) return 0;
      return Math.max(
        catalogCachedAt +
          SUBSCRIPTION_PLAN_CACHE_MS -
          query.state.dataUpdatedAt,
        0
      );
    },
    gcTime: SUBSCRIPTION_PLAN_CACHE_MS,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });

export const useStartSubscriptionCheckout = () =>
  useMutation({
    mutationFn: async (payload: SubscriptionCheckoutPayload) => {
      const workspaces = await createWorkspaceApi(false).list();
      const workspace =
        workspaces.find((item) => item.is_default) ?? workspaces[0];
      if (!workspace) {
        throw new Error(NO_WORKSPACE_MESSAGE);
      }
      return subscriptionPlanApi.checkout(workspace.id, payload);
    },
  });
