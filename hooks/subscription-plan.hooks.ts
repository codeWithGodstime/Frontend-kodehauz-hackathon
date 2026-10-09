import { useMutation, useQuery } from '@tanstack/react-query';
import { createWorkspaceApi } from '@msflib/react-workspace';
import { subscriptionPlanApi } from '@/api/subscription-plan.api';
import { SubscriptionCheckoutPayload } from '@/types/subscription-plan.types';

export const NO_WORKSPACE_MESSAGE = 'Create a workspace before subscribing.';

export const subscriptionPlanKeys = {
  all: ['subscription-plan'] as const,
  list: () => [...subscriptionPlanKeys.all, 'list'] as const,
};

export const useSubscriptionPlans = () =>
  useQuery({
    queryKey: subscriptionPlanKeys.list(),
    queryFn: subscriptionPlanApi.list,
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
