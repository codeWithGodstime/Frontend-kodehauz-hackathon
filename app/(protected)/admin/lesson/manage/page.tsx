import { Suspense } from 'react';
import ManageLesson from './components/ManageLesson';

export default function Page() {
  return (
    <Suspense>
      <ManageLesson />
    </Suspense>
  );
}
