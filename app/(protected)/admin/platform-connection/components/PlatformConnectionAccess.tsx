'use client';

import { ReactNode } from 'react';
import { AppSkeleton } from '@msflib/react-components';
import { useActiveWorkspace } from '@msflib/react-shared';
import AppButton from '@/components/AppButton';
import { useWorkspaceMembership } from '@/hooks/workspace-membership.hooks';
import { canManagePlatformConnection } from '@/utils/platform-connection.utils';

export default function PlatformConnectionAccess({
  children,
}: {
  children: ReactNode;
}) {
  const workspace = useActiveWorkspace();
  const membership = useWorkspaceMembership();
  const allowed = canManagePlatformConnection(membership.data?.type);

  if (!workspace || membership.isLoading) {
    return <AppSkeleton.Text lines={6} />;
  }

  if (membership.isError) {
    return (
      <section className="flex flex-col items-start gap-3">
        <h1 className="h4-b text-text">Platforms</h1>
        <p className="b2-r text-error">Could not load your workspace role.</p>
        <AppButton variant="outlined" onClick={() => membership.refetch()}>
          Retry
        </AppButton>
      </section>
    );
  }

  if (!allowed) {
    return (
      <section>
        <h1 className="h4-b text-text">Platforms</h1>
        <p className="b2-r mt-2 text-error">
          You need an owner or admin role to connect a platform.
        </p>
      </section>
    );
  }

  return <>{children}</>;
}
