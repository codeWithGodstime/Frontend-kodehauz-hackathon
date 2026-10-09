import { ApiResponseError } from '@msflib/typescript';
import { MEMBER_MANAGE_ROLES } from '@/constant/member.constant';

export function canManageMembers(role: string | null | undefined): boolean {
  if (!role) return false;
  return (MEMBER_MANAGE_ROLES as readonly string[]).includes(role);
}

export function isForbidden(error: unknown): boolean {
  return error instanceof ApiResponseError && error.status === 403;
}

export function memberErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof ApiResponseError && error.message) {
    return error.message;
  }
  return fallback;
}
