export interface DashboardPeriodRange {
  start: string;
  end: string;
}

export interface TopSellingItem {
  name: string;
  count: number;
}

export interface DashboardOperational {
  total_leads_processed: number;
  conversion_rate: number;
  total_estimated_order_value: number;
  top_selling_items: TopSellingItem[];
}

export interface DashboardIntent {
  order: number;
  enquiry: number;
  ignore: number;
  actionable_ratio: number;
}

export interface DashboardCustomers {
  new_customers: number;
  returning_customers: number;
  average_ai_processing_latency_seconds: number;
  manual_override_rate: number;
}

export interface DashboardMetrics {
  period: DashboardPeriodRange;
  operational: DashboardOperational;
  intent: DashboardIntent;
  customers: DashboardCustomers;
}
