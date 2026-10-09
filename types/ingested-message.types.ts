export type IngestedMessageCategory = 'enquiry' | 'order' | 'ignore';

export interface IngestedMessageParsedMetadata {
  topic?: string;
  question_summary?: string;
  items?: { name: string; quantity: number }[];
  delivery_hint?: string;
  reason?: string;
}

export interface IngestedMessage {
  id: number;
  workspace_id: number;
  channel_type: string;
  provider_message_id: string;
  sender: string | null;
  customer_name: string | null;
  display_phone_number: string | null;
  category: IngestedMessageCategory | null;
  body: string;
  parsed_metadata: IngestedMessageParsedMetadata | null;
  timestamp: string;
  created_at: string | null;
}
