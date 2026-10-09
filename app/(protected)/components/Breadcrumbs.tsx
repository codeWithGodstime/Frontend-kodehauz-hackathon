'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { ROUTES } from '@/constant/routes.constant';
import { navigationLinks } from '../data/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    const link = navigationLinks.find((item) => item.href === href);
    return {
      href,
      label: link?.label ?? segment.charAt(0).toUpperCase() + segment.slice(1),
    };
  });

  if (breadcrumbs[0]?.href === ROUTES.admin.dashboard) {
    breadcrumbs[0].label = 'Home';
  }

  return (
    <nav className="mb-6 flex" aria-label="Breadcrumb">
      <ol className="flex items-center">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight fontSize="small" className="mx-1 text-disabled" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="b2-m text-text">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="b2-r text-primary hover:underline"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
