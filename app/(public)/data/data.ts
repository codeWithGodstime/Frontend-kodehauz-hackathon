import { ElementType } from 'react';
import AccountTreeOutlined from '@mui/icons-material/AccountTreeOutlined';
import ExtensionOutlined from '@mui/icons-material/ExtensionOutlined';
import TableChartOutlined from '@mui/icons-material/TableChartOutlined';
import PaletteOutlined from '@mui/icons-material/PaletteOutlined';
import SyncAltOutlined from '@mui/icons-material/SyncAltOutlined';
import RocketLaunchOutlined from '@mui/icons-material/RocketLaunchOutlined';

export interface Feature {
  title: string;
  description: string;
  icon: ElementType;
}

export interface KeyFile {
  path: string;
  description: string;
}

export interface NextStep {
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    title: 'Route groups',
    description:
      'Public, auth and protected areas are separated from day one, each with its own layout.',
    icon: AccountTreeOutlined,
  },
  {
    title: 'msflib modules',
    description:
      'Auth, workspaces and the API client are wired. Add more modules as your product needs them.',
    icon: ExtensionOutlined,
  },
  {
    title: 'Forms and tables',
    description:
      'FormBuilder and TableWidget handle data entry and listings with a consistent pattern.',
    icon: TableChartOutlined,
  },
  {
    title: 'Design tokens',
    description:
      'Colours, typography and radii live in one theme file shared by Tailwind and Material UI.',
    icon: PaletteOutlined,
  },
  {
    title: 'Data fetching',
    description:
      'TanStack Query hooks sit between your components and the API for caching and refetching.',
    icon: SyncAltOutlined,
  },
  {
    title: 'Static export',
    description:
      'Builds to plain static files, so it deploys anywhere: a CDN, object storage or any web server.',
    icon: RocketLaunchOutlined,
  },
];

export const keyFiles: KeyFile[] = [
  {
    path: 'docs/IMPLEMENTATION_GUIDE.md',
    description: 'Team conventions. Read this before writing code.',
  },
  {
    path: 'lib/application.config.ts',
    description: 'API base URL, token key and workspace settings.',
  },
  {
    path: 'app/Provider.tsx',
    description: 'Provider tree. Register msflib module providers here.',
  },
  {
    path: 'theme/theme.css',
    description: 'Design tokens for colour, typography and radius.',
  },
  {
    path: 'constant/routes.constant.ts',
    description: 'Every route in the app, in one place.',
  },
];

export const nextSteps: NextStep[] = [
  {
    title: 'Configure your environment',
    description:
      'Set the API URL, token key and tenancy mode in .env.local to match your backend.',
  },
  {
    title: 'Try the auth flow',
    description:
      'Create an account and log in to check the scaffold works against your backend.',
  },
  {
    title: 'Build your first feature',
    description:
      'Follow the lesson example under admin/lesson: list, manage and view pages.',
  },
  {
    title: 'Make it yours',
    description:
      'Update the theme tokens, logo and this page with your own product story.',
  },
];
