'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCloseOnOutsideInteraction } from '@msflib/react-ux';
import AppWordmark from '@/components/AppWordmark';
import { ROUTES } from '@/constant/routes.constant';
import { useWorkspaceMembership } from '@/hooks/workspace-membership.hooks';
import { navigationLinks } from '../data/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement>(null);

  useCloseOnOutsideInteraction({
    ref: panelRef,
    enabled: isOpen,
    onClose: () => onClose(),
  });
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
          className="fixed inset-0 z-40 bg-neutral/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        ref={panelRef}
        className={`fixed left-0 top-0 z-50 h-full w-64 transform border-r border-stroke bg-surface transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-stroke px-6">
            <AppWordmark href={ROUTES.admin.dashboard} />
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <p className="eyebrow mb-3 px-3 text-text-light">Workspace</p>
            <ul className="space-y-1">
              {links.map(({ id, href, label, icon: Icon }) => {
                const active = isActive(href);
                return (
                  <li key={id}>
                    <Link
                      href={href}
                      aria-current={active ? 'page' : undefined}
                      className={`b2-m relative flex items-center gap-3 rounded-btn-radius px-3 py-2.5 transition-colors ${
                        active
                          ? 'bg-primary-light text-primary'
                          : 'text-text-light hover:bg-background-light hover:text-text'
                      }`}
                      onClick={onClose}
                    >
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary"
                        />
                      ) : null}
                      {Icon && <Icon fontSize="small" />}
                      {label}
                    </Link>
                  </li>
                );
              })}
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
