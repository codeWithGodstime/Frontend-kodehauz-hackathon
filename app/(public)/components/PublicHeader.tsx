import Link from 'next/link';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-stroke bg-surface/90 backdrop-blur">
      <AppContainer>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href={ROUTES.home} className="h6-b text-text">
            MSF App
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-2">
            <AppButton variant="text" href={ROUTES.pricing}>
              Pricing
            </AppButton>
            <AppButton variant="text" href={ROUTES.login}>
              Log in
            </AppButton>
            <AppButton href={ROUTES.register}>Create account</AppButton>
          </nav>
        </div>
      </AppContainer>
    </header>
  );
}
