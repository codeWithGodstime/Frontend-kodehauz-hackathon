'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppSkeleton } from '@msflib/react-components';
import { useAuth } from '@msflib/react-auth';
import { useActiveWorkspace } from '@msflib/react-shared';
import { useWorkspace } from '@msflib/react-workspace';
import AppButton from '@/components/AppButton';
import { ROUTES } from '@/constant/routes.constant';
import { useWorkspaceMembership } from '@/hooks/workspace-membership.hooks';
import { canManageMembers, isForbidden } from '@/utils/member.utils';

export default function MemberAccess({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { status } = useAuth();
  const workspace = useActiveWorkspace();
  const {
    workspaces,
    availableWorkspaces,
    loading: workspaceLoading,
    refetch: refetchWorkspaces,
  } = useWorkspace();
  const membership = useWorkspaceMembership();
  const listsLoading =
    workspaceLoading.workspaces || workspaceLoading.availableWorkspaces;
  const hasWorkspaceChoice = workspaces.length + availableWorkspaces.length > 0;
  const allowed = canManageMembers(membership.data?.type);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace(ROUTES.login);
    }
  }, [router, status]);

  if (status === 'loading' || status === 'unauthenticated') {
    return <AppSkeleton.Text lines={6} />;
  }

  if (!workspace && (listsLoading || hasWorkspaceChoice)) {
    return <AppSkeleton.Text lines={6} />;
  }

  if (!workspace) {
    return (
      <section className="flex flex-col items-start gap-3">
        <h1 className="h4-b text-text">Members</h1>
        <p className="b2-r text-text-light">
          No workspace is active for this account.
        </p>
        <AppButton variant="outlined" onClick={() => refetchWorkspaces()}>
          Retry
        </AppButton>
      </section>
    );
  }

  if (membership.isLoading) {
    return <AppSkeleton.Text lines={6} />;
  }

  if (membership.isError && !isForbidden(membership.error)) {
    return (
      <section className="flex flex-col items-start gap-3">
        <h1 className="h4-b text-text">Members</h1>
        <p className="b2-r text-error">Could not load your workspace role.</p>
        <AppButton variant="outlined" onClick={() => membership.refetch()}>
          Retry
        </AppButton>
      </section>
    );
  }

  if (membership.isError || !allowed) {
    return (
      <section>
        <h1 className="h4-b text-text">Members</h1>
        <p className="b2-r mt-2 text-error">
          You need an owner or admin role to manage members.
        </p>
      </section>
    );
  }

  return children;
}
