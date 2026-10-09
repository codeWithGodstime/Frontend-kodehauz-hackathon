export const DASHBOARD_PERIODS = [
  { value: 'today', label: 'Today' },
  { value: '7d', label: '7 days' },
  { value: '30d', label: '30 days' },
] as const;

export type DashboardPeriod = (typeof DASHBOARD_PERIODS)[number]['value'];

export const DEFAULT_DASHBOARD_PERIOD: DashboardPeriod = '7d';

export const DASHBOARD_VIEW_ROLES = ['owner', 'admin'] as const;
