import { PlatformName } from '@/constant/platform-connection.constant';

export type { PlatformName };

export type PlatformConnectionStatus = 'connected' | 'disconnected';

export interface PlatformConnection {
  id: number;
  workspace_id: number;
  platform: PlatformName;
  status: PlatformConnectionStatus;
  display_phone_number: string | null;
  phone_number_id: string | null;
  page_id: string | null;
  instagram_business_account_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface PlatformConnectionConnect {
  platform: PlatformName;
  display_phone_number?: string | null;
  phone_number_id?: string | null;
  page_id?: string | null;
  instagram_business_account_id?: string | null;
}
