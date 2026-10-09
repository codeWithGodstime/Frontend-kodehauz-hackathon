import { Suspense } from 'react';
import { AppSkeleton } from '@msflib/react-components';
import PlatformConnectionDetails from './components/PlatformConnectionDetails';

export default function Page() {
  return (
    <Suspense fallback={<AppSkeleton.Text lines={6} />}>
      <PlatformConnectionDetails />
    </Suspense>
  );
}
