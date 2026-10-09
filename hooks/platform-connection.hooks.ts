import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActiveWorkspace } from '@msflib/react-shared';
import { platformConnectionApi } from '@/api/platform-connection.api';
import { PlatformConnectionConnect } from '@/types/platform-connection.types';

export const platformConnectionKeys = {
  all: ['platform-connection'] as const,
  list: (workspace: string | null) =>
    [...platformConnectionKeys.all, 'list', workspace] as const,
  detail: (workspace: string | null, id: string) =>
    [...platformConnectionKeys.all, 'detail', workspace, id] as const,
};

export const usePlatformConnections = (enabled: boolean) => {
  const workspace = useActiveWorkspace();
  return useQuery({
    queryKey: platformConnectionKeys.list(workspace),
    queryFn: platformConnectionApi.list,
    enabled: enabled && Boolean(workspace),
  });
};

export const usePlatformConnection = (id?: string | null) => {
  const workspace = useActiveWorkspace();
  return useQuery({
    queryKey: platformConnectionKeys.detail(workspace, id ?? ''),
    queryFn: () => platformConnectionApi.get(id as string),
    enabled: Boolean(id) && Boolean(workspace),
  });
};

export const useConnectPlatform = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: PlatformConnectionConnect) =>
      platformConnectionApi.connect(payload),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: platformConnectionKeys.all,
      }),
  });
};

export const useDisconnectPlatform = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => platformConnectionApi.disconnect(id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: platformConnectionKeys.all,
      }),
  });
};
