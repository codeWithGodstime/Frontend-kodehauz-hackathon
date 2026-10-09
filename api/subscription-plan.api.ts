import { configuredApiClient } from '@msflib/core';
import {
  SubscriptionCheckout,
  SubscriptionCheckoutPayload,
  SubscriptionPlan,
} from '@/types/subscription-plan.types';

const PLANS_ENDPOINT = '/billing/subscription-plans';
const unscoped = { isWorkspaceScoped: false as const };
const client = () => configuredApiClient().apiClient;

export const subscriptionPlanApi = {
  list: () =>
    client()<SubscriptionPlan[]>('GET', PLANS_ENDPOINT, undefined, unscoped),
  checkout: (workspaceId: number, payload: SubscriptionCheckoutPayload) =>
    client()<SubscriptionCheckout>(
      'POST',
      `/billing/workspaces/${workspaceId}/checkout`,
      payload,
      unscoped
    ),
};
