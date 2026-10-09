import { Suspense } from 'react';
import ManageMember from './components/ManageMember';

export default function Page() {
  return (
    <Suspense>
      <ManageMember />
    </Suspense>
  );
}
