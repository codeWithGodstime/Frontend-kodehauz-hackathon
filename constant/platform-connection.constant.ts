export const PLATFORM_CONNECTION_ROLES = ['owner', 'admin'] as const;

export const PLATFORMS = [
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    hint: 'Business line customers message. Uses display phone number and phone number id.',
  },
  {
    platform: 'facebook',
    label: 'Facebook',
    hint: 'Page id for the Facebook Page that receives messages.',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    hint: 'Instagram professional account linked to a Facebook Page.',
  },
] as const;

export type PlatformName = (typeof PLATFORMS)[number]['platform'];
