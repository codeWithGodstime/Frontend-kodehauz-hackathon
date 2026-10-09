import { configuredApiClient } from '@msflib/core';
import { DashboardPeriod } from '@/constant/dashboard.constant';
import { DashboardMetrics } from '@/types/dashboard.types';

const ENDPOINT = '/dashboard/metrics';
const client = () => configuredApiClient().apiClient;

export const dashboardApi = {
  metrics: (period: DashboardPeriod) =>
    client()<DashboardMetrics>('GET', ENDPOINT, null, {
      query: { period },
    }),
};
