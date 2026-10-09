import { useQuery } from '@tanstack/react-query';
import { useActiveWorkspace } from '@msflib/react-shared';
import { dashboardApi } from '@/api/dashboard.api';
import { DashboardPeriod } from '@/constant/dashboard.constant';

export const dashboardKeys = {
  all: ['dashboard'] as const,
  metrics: (workspace: string | null, period: DashboardPeriod) =>
    [...dashboardKeys.all, 'metrics', workspace, period] as const,
};

export const useDashboardMetrics = (
  period: DashboardPeriod,
  enabled: boolean
) => {
  const workspace = useActiveWorkspace();
  return useQuery({
    queryKey: dashboardKeys.metrics(workspace, period),
    queryFn: () => dashboardApi.metrics(period),
    enabled: enabled && Boolean(workspace),
  });
};
