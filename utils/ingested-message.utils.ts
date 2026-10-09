import { IngestedMessageParsedMetadata } from '@/types/ingested-message.types';

export function formatIngestedTimestamp(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export function formatEnquirySummary(
  metadata: IngestedMessageParsedMetadata | null
): string {
  if (!metadata) return '—';
  const summary = metadata.question_summary?.trim();
  if (summary) return summary;
  const topic = metadata.topic?.trim();
  return topic || '—';
}

export function formatOrderSummary(
  metadata: IngestedMessageParsedMetadata | null
): string {
  if (!metadata?.items?.length) return '—';
  return metadata.items
    .map((item) => {
      const qty = item.quantity > 1 ? `${item.quantity}× ` : '';
      return `${qty}${item.name}`;
    })
    .join(', ');
}

export function formatCustomerLabel(
  customerName: string | null,
  sender: string | null
): string {
  if (customerName?.trim()) return customerName.trim();
  if (sender?.trim()) return sender.trim();
  return 'Unknown contact';
}
