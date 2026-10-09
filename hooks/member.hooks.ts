import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActiveWorkspace } from '@msflib/react-shared';
import { memberApi } from '@/api/member.api';
import { WorkspaceMemberPayload } from '@/types/member.types';

export const memberKeys = {
  all: ['member'] as const,
  list: (workspace: string | null) =>
    [...memberKeys.all, 'list', workspace] as const,
};

export const useMembers = () => {
  const workspace = useActiveWorkspace();
  return useQuery({
    queryKey: memberKeys.list(workspace),
    queryFn: memberApi.list,
    enabled: Boolean(workspace),
  });
};

export const useCreateMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: WorkspaceMemberPayload) => memberApi.create(payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: memberKeys.all }),
  });
};
