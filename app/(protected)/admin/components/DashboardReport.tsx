'use client';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { DASHBOARD_PERIODS } from '@/constant/dashboard.constant';
import { DashboardMetrics } from '@/types/dashboard.types';
import {
  DashboardPeriod,
  formatCount,
  formatLatency,
  formatMoney,
  formatPercent,
  formatPeriodRange,
  formatRatioAsPercent,
} from '@/utils/dashboard.utils';
import IntentBreakdown from './IntentBreakdown';
import MetricCard from './MetricCard';

interface DashboardReportProps {
  period: DashboardPeriod;
  metrics: DashboardMetrics;
  onPeriodChange: (period: DashboardPeriod) => void;
}

export default function DashboardReport({
  period,
  metrics,
  onPeriodChange,
}: DashboardReportProps) {
  const { operational, intent, customers } = metrics;
  const range = formatPeriodRange(metrics.period.start, metrics.period.end);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="h4-b text-text">Dashboard</h1>
          <p className="b2-r mt-1 text-text-light">
            Sales, intent, and customer activity for the active workspace.
          </p>
          {range ? <p className="f1-r mt-1 text-text-light">{range}</p> : null}
        </div>
        <ToggleButtonGroup
          exclusive
          size="small"
          value={period}
          aria-label="Reporting period"
          onChange={(_, value: DashboardPeriod | null) => {
            if (value) onPeriodChange(value);
          }}
        >
          {DASHBOARD_PERIODS.map((item) => (
            <ToggleButton key={item.value} value={item.value}>
              {item.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="h6-b text-text">Operational and sales</h2>
          <p className="b2-r text-text-light">
            Leads received, enquiries that became orders, and what sold.
          </p>
        </div>
        {operational.total_leads_processed === 0 ? (
          <p className="b2-r text-text-light">No messages in this period.</p>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <MetricCard
            label="Total leads processed"
            value={formatCount(operational.total_leads_processed)}
            detail="Incoming messages on connected platforms"
          />
          <MetricCard
            label="Conversion rate"
            value={formatPercent(operational.conversion_rate)}
            detail="Unique enquiries that also placed an order"
          />
          <MetricCard
            label="Estimated order value"
            value={formatMoney(operational.total_estimated_order_value)}
            detail="Gross value extracted from order messages"
          />
        </div>
        <div className="rounded-app-radius border border-stroke bg-background p-4">
          <h3 className="b1-m text-text">Top-selling items</h3>
          {operational.top_selling_items.length === 0 ? (
            <p className="b2-r mt-2 text-text-light">
              No ordered items in this period.
            </p>
          ) : (
            <ol className="mt-3 flex flex-col gap-2">
              {operational.top_selling_items.map((item, index) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="b2-m text-text">
                    {index + 1}. {item.name}
                  </span>
                  <span className="b2-r text-text-light">
                    {formatCount(item.count)}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="h6-b text-text">Message intent</h2>
          <p className="b2-r text-text-light">
            How processed messages were categorized.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="rounded-app-radius border border-stroke bg-background p-4">
            <h3 className="b1-m mb-3 text-text">Intent distribution</h3>
            <IntentBreakdown intent={intent} />
          </div>
          <MetricCard
            label="Actionable ratio"
            value={formatRatioAsPercent(intent.actionable_ratio)}
            detail="Orders and enquiries divided by total messages"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="h6-b text-text">Response and customers</h2>
          <p className="b2-r text-text-light">
            New contacts, repeat buyers, and how classification was handled.
          </p>
        </div>
        {customers.new_customers === 0 &&
        customers.returning_customers === 0 ? (
          <p className="b2-r text-text-light">
            No customer activity in this period.
          </p>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="New customers"
            value={formatCount(customers.new_customers)}
            detail="Contacts created in this period"
          />
          <MetricCard
            label="Returning customers"
            value={formatCount(customers.returning_customers)}
            detail="Buyers placing a repeat order"
          />
          <MetricCard
            label="AI processing latency"
            value={formatLatency(
              customers.average_ai_processing_latency_seconds
            )}
            detail="Average seconds from stored message to last update"
          />
          <MetricCard
            label="Manual override rate"
            value={formatPercent(customers.manual_override_rate)}
            detail="Classifications marked as corrected"
          />
        </div>
      </section>
    </section>
  );
}
