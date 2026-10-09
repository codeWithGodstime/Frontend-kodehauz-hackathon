'use client';

import { useSearchParams } from 'next/navigation';
import { AppSkeleton } from '@msflib/react-components';
import { useLesson } from '@/hooks/lesson.hooks';
import LessonForm from './LessonForm';

export default function ManageLesson() {
  const id = useSearchParams().get('id');
  const isEdit = Boolean(id);
  const { data: lesson, isLoading, isError } = useLesson(id);

  if (isEdit && isLoading) return <AppSkeleton.Text lines={6} />;
  if (isEdit && (isError || !lesson)) {
    return <p className="b2-r text-error">Lesson not found.</p>;
  }

  return (
    <section className="flex max-w-3xl flex-col gap-6">
      <h1 className="h4-b text-text">
        {isEdit ? 'Update lesson' : 'Create lesson'}
      </h1>
      <LessonForm key={lesson?.id ?? 'new'} lesson={lesson} />
    </section>
  );
}
