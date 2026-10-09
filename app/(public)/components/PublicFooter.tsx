import Link from 'next/link';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';

export default function PublicFooter() {
  return (
    <footer className="border-t border-stroke py-8">
      <AppContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="f1-r text-text-light">
            © {new Date().getFullYear()} Socialchef. DM orders, sorted before
            the lunch rush.
          </p>
          <nav className="flex flex-wrap gap-4">
            <Link href={ROUTES.pricing} className="f1-m text-text">
              Pricing
            </Link>
            <Link href={ROUTES.login} className="f1-m text-text">
              Log in
            </Link>
            <Link href={ROUTES.register} className="f1-m text-text">
              Start free
            </Link>
          </nav>
        </div>
      </AppContainer>
    </footer>
  );
}
