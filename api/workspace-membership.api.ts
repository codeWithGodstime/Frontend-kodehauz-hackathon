import { configuredApiClient } from '@msflib/core';
import { WorkspaceMembership } from '@/types/workspace-membership.types';

const ENDPOINT = '/users/me';
const client = () => configuredApiClient().apiClient;

export const workspaceMembershipApi = {
  me: () => client()<WorkspaceMembership>('GET', ENDPOINT),
};
