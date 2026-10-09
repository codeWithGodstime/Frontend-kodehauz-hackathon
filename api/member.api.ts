import { configuredApiClient } from '@msflib/core';
import { WorkspaceMember, WorkspaceMemberPayload } from '@/types/member.types';

const ENDPOINT = '/users';
const client = () => configuredApiClient().apiClient;

export const memberApi = {
  list: () => client()<WorkspaceMember[]>('GET', ENDPOINT),
  create: (payload: WorkspaceMemberPayload) =>
    client()<WorkspaceMember>('POST', ENDPOINT, payload),
};
