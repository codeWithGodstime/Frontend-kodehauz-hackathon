import Link from 'next/link';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-stroke bg-surface/90 backdrop-blur">
      <AppContainer>
        <div className="flex items-center justify-between gap-3 py-3">
          <Link href={ROUTES.home} className="h6-b text-text">
            Socialchef
          </Link>
          <nav className="flex items-center justify-end gap-1 sm:gap-2">
            <span className="hidden md:inline-flex">
              <AppButton variant="text" href={`${ROUTES.home}#how-it-works`}>
                How it works
              </AppButton>
            </span>
            <span className="hidden sm:inline-flex">
              <AppButton variant="text" href={ROUTES.pricing}>
                Pricing
              </AppButton>
            </span>
            <AppButton variant="text" href={ROUTES.login}>
              Log in
            </AppButton>
            <AppButton href={ROUTES.register}>Start free</AppButton>
          </nav>
        </div>
      </AppContainer>
    </header>
  );
}
