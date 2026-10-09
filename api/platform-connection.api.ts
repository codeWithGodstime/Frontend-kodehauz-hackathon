import { configuredApiClient } from '@msflib/core';
import {
  PlatformConnection,
  PlatformConnectionConnect,
} from '@/types/platform-connection.types';

const ENDPOINT = '/platform-connections';
const client = () => configuredApiClient().apiClient;

export const platformConnectionApi = {
  list: () => client()<PlatformConnection[]>('GET', ENDPOINT),
  get: (id: string) => client()<PlatformConnection>('GET', `${ENDPOINT}/${id}`),
  connect: (payload: PlatformConnectionConnect) =>
    client()<PlatformConnection>('POST', ENDPOINT, payload),
  disconnect: (id: number) =>
    client()<PlatformConnection>('POST', `${ENDPOINT}/${id}/disconnect`),
};
