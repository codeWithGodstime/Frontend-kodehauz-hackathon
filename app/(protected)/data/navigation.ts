import { ElementType } from 'react';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';
import { DASHBOARD_VIEW_ROLES } from '@/constant/dashboard.constant';
import { ROUTES } from '@/constant/routes.constant';

export interface NavLink {
  id: string;
  label: string;
  href: string;
  icon?: ElementType;
  roles?: readonly string[];
  children?: NavLink[];
}

export const navigationLinks: NavLink[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: ROUTES.admin.dashboard,
    icon: DashboardOutlined,
    roles: DASHBOARD_VIEW_ROLES,
  },
  {
    id: 'lesson',
    label: 'Lessons',
    href: ROUTES.admin.lesson.list,
    icon: MenuBookOutlined,
  },
];
