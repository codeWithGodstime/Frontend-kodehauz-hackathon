import {
  DASHBOARD_PERIODS,
  DASHBOARD_VIEW_ROLES,
  DEFAULT_DASHBOARD_PERIOD,
  DashboardPeriod,
} from '@/constant/dashboard.constant';

export type { DashboardPeriod };

export function isDashboardPeriod(
  value: string | null
): value is DashboardPeriod {
  return DASHBOARD_PERIODS.some((item) => item.value === value);
}

export function dashboardPeriod(value: string | null): DashboardPeriod {
  return isDashboardPeriod(value) ? value : DEFAULT_DASHBOARD_PERIOD;
}

export function canViewDashboard(role: string | null | undefined): boolean {
  if (!role) return false;
  return (DASHBOARD_VIEW_ROLES as readonly string[]).includes(role);
}

export function formatCount(value: number): string {
  return new Intl.NumberFormat('en').format(value);
}

export function formatPercent(value: number): string {
  return `${new Intl.NumberFormat('en', {
    maximumFractionDigits: 1,
  }).format(value)}%`;
}

export function formatRatioAsPercent(ratio: number): string {
  return formatPercent(ratio * 100);
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatLatency(seconds: number): string {
  return `${new Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
  }).format(seconds)}s`;
}

export function formatPeriodRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return '';
  }
  const fmt = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return `${fmt.format(startDate)} – ${fmt.format(endDate)}`;
}
