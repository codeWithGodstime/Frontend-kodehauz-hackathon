export type MemberRole = 'owner' | 'admin' | 'member' | 'guest';

export type AssignableMemberRole = Exclude<MemberRole, 'owner'>;

export type MemberStatus = 'active' | 'kicked' | 'banned';

export interface WorkspaceMember {
  id: number;
  account_id: number;
  workspace_id: number;
  type: MemberRole;
  status: MemberStatus;
  display_name: string | null;
  email: string;
  phone: string | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
}

export interface WorkspaceMemberPayload {
  email: string;
  phone: string;
  password: string;
  first_name?: string;
  last_name?: string;
  type: AssignableMemberRole;
}
