import { Suspense } from 'react';
import LessonDetails from './components/LessonDetails';

export default function Page() {
  return (
    <Suspense>
      <LessonDetails />
    </Suspense>
  );
}
