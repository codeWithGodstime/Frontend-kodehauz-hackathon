import { useQuery } from '@tanstack/react-query';
import { useActiveWorkspace } from '@msflib/react-shared';
import { workspaceMembershipApi } from '@/api/workspace-membership.api';

export const workspaceMembershipKeys = {
  all: ['workspace-membership'] as const,
  me: (workspace: string | null) =>
    [...workspaceMembershipKeys.all, 'me', workspace] as const,
};

export const useWorkspaceMembership = () => {
  const workspace = useActiveWorkspace();
  return useQuery({
    queryKey: workspaceMembershipKeys.me(workspace),
    queryFn: workspaceMembershipApi.me,
    enabled: Boolean(workspace),
  });
};
