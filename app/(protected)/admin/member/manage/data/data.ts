import { OptionItem } from '@msflib/react-components';
import { AssignableMemberRole } from '@/types/member.types';

export const memberRoleOptions: (OptionItem & {
  value: AssignableMemberRole;
})[] = [
  { value: 'admin', label: 'Admin' },
  { value: 'member', label: 'Member' },
  { value: 'guest', label: 'Guest' },
];
