'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constant/routes.constant';
import { useWorkspaceMembership } from '@/hooks/workspace-membership.hooks';
import { navigationLinks } from '../data/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { data: membership, isSuccess } = useWorkspaceMembership();
  const role = isSuccess ? membership.type : null;
  const links = navigationLinks.filter((link) => {
    if (!link.roles?.length || role == null) return true;
    return (link.roles as readonly string[]).includes(role);
  });

  const isActive = (href: string) =>
    href === ROUTES.admin.dashboard
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 transform border-r border-stroke bg-surface transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-center border-b border-stroke px-4">
            <span className="h5-b text-primary">Dashboard</span>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-2">
              {links.map(({ id, href, label, icon: Icon }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className={`b2-m flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                      isActive(href)
                        ? 'bg-primary text-on-primary'
                        : 'text-text hover:bg-primary-light hover:text-primary'
                    }`}
                    onClick={onClose}
                  >
                    {Icon && <Icon fontSize="small" />}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-stroke p-4">
            <p className="f1-r text-disabled">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </aside>
    </>
  );
}
