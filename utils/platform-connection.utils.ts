import { PLATFORM_CONNECTION_ROLES } from '@/constant/platform-connection.constant';

export function canManagePlatformConnection(
  role: string | null | undefined
): boolean {
  if (!role) return false;
  return (PLATFORM_CONNECTION_ROLES as readonly string[]).includes(role);
}

export function isPlatformName(
  value: string | null
): value is 'whatsapp' | 'facebook' | 'instagram' {
  return value === 'whatsapp' || value === 'facebook' || value === 'instagram';
}
