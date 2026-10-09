'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ApiResponseError } from '@msflib/typescript';
import { AppSkeleton } from '@msflib/react-components';
import { useAuth } from '@msflib/react-auth';
import { useActiveWorkspace } from '@msflib/react-shared';
import { useWorkspace } from '@msflib/react-workspace';
import AppButton from '@/components/AppButton';
import { ROUTES } from '@/constant/routes.constant';
import { useDashboardMetrics } from '@/hooks/dashboard.hooks';
import { useWorkspaceMembership } from '@/hooks/workspace-membership.hooks';
import { canViewDashboard, dashboardPeriod } from '@/utils/dashboard.utils';
import DashboardReport from './DashboardReport';

function isForbidden(error: unknown): boolean {
  return error instanceof ApiResponseError && error.status === 403;
}

export default function Dashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { status } = useAuth();
  const workspace = useActiveWorkspace();
  const {
    workspaces,
    availableWorkspaces,
    loading: workspaceLoading,
    refetch: refetchWorkspaces,
  } = useWorkspace();
  const period = dashboardPeriod(searchParams.get('period'));
  const membership = useWorkspaceMembership();
  const allowed = canViewDashboard(membership.data?.type);
  const metrics = useDashboardMetrics(period, allowed);
  const listsLoading =
    workspaceLoading.workspaces || workspaceLoading.availableWorkspaces;
  const hasWorkspaceChoice = workspaces.length + availableWorkspaces.length > 0;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace(ROUTES.login);
    }
  }, [router, status]);

  const selectPeriod = (next: typeof period) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('period', next);
    router.replace(`${pathname}?${params.toString()}`);
  };

  if (status === 'loading' || status === 'unauthenticated') {
    return <AppSkeleton.Text lines={6} />;
  }

  if (!workspace && (listsLoading || hasWorkspaceChoice)) {
    return <AppSkeleton.Text lines={6} />;
  }

  if (!workspace) {
    return (
      <section className="flex flex-col items-start gap-3">
        <h1 className="h4-b text-text">Dashboard</h1>
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
        <h1 className="h4-b text-text">Dashboard</h1>
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
        <h1 className="h4-b text-text">Dashboard</h1>
        <p className="b2-r mt-2 text-error">
          You need an owner or admin role to view this dashboard.
        </p>
      </section>
    );
  }

  if (metrics.isLoading) {
    return <AppSkeleton.Text lines={8} />;
  }

  if (metrics.isError || !metrics.data) {
    if (isForbidden(metrics.error)) {
      return (
        <section>
          <h1 className="h4-b text-text">Dashboard</h1>
          <p className="b2-r mt-2 text-error">
            You need an owner or admin role to view this dashboard.
          </p>
        </section>
      );
    }
    return (
      <section className="flex flex-col items-start gap-3">
        <h1 className="h4-b text-text">Dashboard</h1>
        <p className="b2-r text-error">Could not load dashboard metrics.</p>
        <AppButton variant="outlined" onClick={() => metrics.refetch()}>
          Retry
        </AppButton>
      </section>
    );
  }

  return (
    <DashboardReport
      period={period}
      metrics={metrics.data}
      onPeriodChange={selectPeriod}
    />
  );
}
