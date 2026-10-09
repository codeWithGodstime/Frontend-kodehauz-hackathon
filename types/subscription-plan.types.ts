export interface SubscriptionPlan {
  id: number;
  plan_key: string;
  name: string;
  tier: 'free' | 'paid';
  interval: string;
  amount_kobo: number;
  currency: string;
  plan_code: string | null;
}

export interface SubscriptionCheckout {
  authorization_url: string;
  access_code: string;
  reference: string;
}

export interface SubscriptionCheckoutPayload {
  email?: string;
  plan_code: string;
}
