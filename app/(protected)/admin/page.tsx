import { Suspense } from 'react';
import { AppSkeleton } from '@msflib/react-components';
import Dashboard from './components/Dashboard';

export default function DashboardPage() {
  return (
    <Suspense fallback={<AppSkeleton.Text lines={6} />}>
      <Dashboard />
    </Suspense>
  );
}
