import { PlatformName } from '@/constant/platform-connection.constant';

export const platformConnectionNotes: Record<PlatformName, string> = {
  whatsapp:
    'Saves the business display phone number and phone number id. A live Meta app also needs an app id, app secret, webhook verify token, and a system user token. This screen does not request one from Meta.',
  facebook:
    'Saves the Facebook Page id. A live Meta app also needs a Page access token. This screen does not request one from Meta.',
  instagram:
    'Saves the Instagram professional account id. A live Meta app links that account to a Facebook Page and uses the Page access token. This screen does not request one from Meta.',
};
