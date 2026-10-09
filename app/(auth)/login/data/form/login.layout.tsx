import Link from 'next/link';
import { LayoutProps } from '@msflib/react-components';
import { ROUTES } from '@/constant/routes.constant';
import { GoogleLoginButton } from '../../../components/Reusables';

export const LoginLayout: React.FC<LayoutProps> = ({ FormField }) => (
  <section className="flex flex-col gap-2">
    <FormField elementName="email" />
    <FormField elementName="password" />
    <div className="mb-4 flex justify-end">
      <Link href={ROUTES.forgotPassword} className="b2-m text-primary">
        Forgot password?
      </Link>
    </div>
    <FormField elementName="submit" />
    <GoogleLoginButton />
  </section>
);
