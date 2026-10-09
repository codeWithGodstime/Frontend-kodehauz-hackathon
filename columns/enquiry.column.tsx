import { IngestedMessage } from '@/types/ingested-message.types';
import { TableColumn } from '@/types/table.types';
import {
  formatCustomerLabel,
  formatEnquirySummary,
  formatIngestedTimestamp,
} from '@/utils/ingested-message.utils';

export const enquiryColumns: TableColumn<IngestedMessage>[] = [
  {
    field: 'timestamp',
    headerName: 'Received',
    width: 180,
    renderCell: ({ value }) => (
      <span className="b2-r text-text">
        {formatIngestedTimestamp(String(value))}
      </span>
    ),
  },
  {
    field: 'customer_name',
    headerName: 'Contact',
    width: 160,
    renderCell: ({ row }) => (
      <span className="b2-m text-text">
        {formatCustomerLabel(row.customer_name, row.sender)}
      </span>
    ),
  },
  {
    field: 'body',
    headerName: 'Message',
    flex: 1,
  },
  {
    field: 'parsed_metadata',
    headerName: 'Summary',
    flex: 1,
    renderCell: ({ row }) => (
      <span className="b2-r text-text-light">
        {formatEnquirySummary(row.parsed_metadata)}
      </span>
    ),
  },
  {
    field: 'channel_type',
    headerName: 'Channel',
    width: 120,
  },
];
