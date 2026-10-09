import Link from 'next/link';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';
import { footerCopy, NAV_LINKS } from '../data/data';
import AppWordmark from '@/components/AppWordmark';

const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: 'Log in', href: ROUTES.login },
  { label: 'Start free', href: ROUTES.register },
];

export default function PublicFooter() {
  return (
    <footer className="border-t border-stroke bg-background py-12">
      <AppContainer>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <AppWordmark />
            <p className="b2-r mt-3 text-text-light">{footerCopy.tagline}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="b2-m text-text-light transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="divider-fade mt-10" />
        <p className="f1-r mt-6 text-text-light">
          © {new Date().getFullYear()} SocialChef · {footerCopy.small_print}
        </p>
      </AppContainer>
    </footer>
  );
}
