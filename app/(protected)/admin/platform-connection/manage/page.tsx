import { Suspense } from 'react';
import { AppSkeleton } from '@msflib/react-components';
import ManagePlatformConnection from './components/ManagePlatformConnection';

export default function Page() {
  return (
    <Suspense fallback={<AppSkeleton.Text lines={6} />}>
      <ManagePlatformConnection />
    </Suspense>
  );
}
