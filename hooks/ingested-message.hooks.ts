import { useQuery } from '@tanstack/react-query';
import { useActiveWorkspace } from '@msflib/react-shared';
import { ingestedMessageApi } from '@/api/ingested-message.api';
import { IngestedMessageCategory } from '@/types/ingested-message.types';

export const ingestedMessageKeys = {
  all: ['ingested-message'] as const,
  list: (workspace: string | null, category: IngestedMessageCategory) =>
    [...ingestedMessageKeys.all, 'list', workspace, category] as const,
  detail: (workspace: string | null, id: string) =>
    [...ingestedMessageKeys.all, 'detail', workspace, id] as const,
};

export const useIngestedMessages = (
  category: IngestedMessageCategory,
  enabled: boolean
) => {
  const workspace = useActiveWorkspace();
  return useQuery({
    queryKey: ingestedMessageKeys.list(workspace, category),
    queryFn: () => ingestedMessageApi.list(category),
    enabled: enabled && Boolean(workspace),
  });
};

export const useIngestedMessage = (id?: string | null) => {
  const workspace = useActiveWorkspace();
  return useQuery({
    queryKey: ingestedMessageKeys.detail(workspace, id ?? ''),
    queryFn: () => ingestedMessageApi.get(id as string),
    enabled: Boolean(id) && Boolean(workspace),
  });
};
