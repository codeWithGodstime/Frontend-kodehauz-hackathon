import { configuredApiClient } from '@msflib/core';
import {
  IngestedMessage,
  IngestedMessageCategory,
} from '@/types/ingested-message.types';

const ENDPOINT = '/ingested-messages';
const client = () => configuredApiClient().apiClient;

export const ingestedMessageApi = {
  list: (category: IngestedMessageCategory) =>
    client()<IngestedMessage[]>('GET', ENDPOINT, null, {
      query: { category },
    }),
  get: (id: string) => client()<IngestedMessage>('GET', `${ENDPOINT}/${id}`),
};
