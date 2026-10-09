import { ElementType } from 'react';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import GroupOutlined from '@mui/icons-material/GroupOutlined';
import HubOutlined from '@mui/icons-material/HubOutlined';
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';
import { DASHBOARD_VIEW_ROLES } from '@/constant/dashboard.constant';
import { MEMBER_MANAGE_ROLES } from '@/constant/member.constant';
import { PLATFORM_CONNECTION_ROLES } from '@/constant/platform-connection.constant';
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
    id: 'platform-connection',
    label: 'Platforms',
    href: ROUTES.admin.platformConnection.list,
    icon: HubOutlined,
    roles: PLATFORM_CONNECTION_ROLES,
  },
  {
    id: 'lesson',
    label: 'Lessons',
    href: ROUTES.admin.lesson.list,
    icon: MenuBookOutlined,
  },
  {
    id: 'member',
    label: 'Members',
    href: ROUTES.admin.member.list,
    icon: GroupOutlined,
    roles: MEMBER_MANAGE_ROLES,
  },
];
