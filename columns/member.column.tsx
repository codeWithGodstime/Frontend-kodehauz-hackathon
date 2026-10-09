import { WorkspaceMember } from '@/types/member.types';
import { TableColumn } from '@/types/table.types';

const ROLE_LABELS: Record<WorkspaceMember['type'], string> = {
  owner: 'Owner',
  admin: 'Admin',
  member: 'Member',
  guest: 'Guest',
};

export const memberColumns: TableColumn<WorkspaceMember>[] = [
  { field: 'first_name', headerName: 'First name', flex: 1 },
  { field: 'last_name', headerName: 'Last name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1.2 },
  { field: 'phone', headerName: 'Phone', flex: 1 },
  {
    field: 'type',
    headerName: 'Role',
    width: 140,
    renderCell: ({ value }) =>
      ROLE_LABELS[value as WorkspaceMember['type']] ?? '',
  },
];
