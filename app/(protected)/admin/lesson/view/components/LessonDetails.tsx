'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import EditOutlined from '@mui/icons-material/EditOutlined';
import { AppSkeleton } from '@msflib/react-components';
import AppButton from '@/components/AppButton';
import { ROUTES } from '@/constant/routes.constant';
import { useLesson } from '@/hooks/lesson.hooks';

export default function LessonDetails() {
  const router = useRouter();
  const id = useSearchParams().get('id');
  const { data: lesson, isLoading, isError } = useLesson(id);

  if (isLoading) return <AppSkeleton.Text lines={6} />;
  if (!id || isError || !lesson) {
    return <p className="b2-r text-error">Lesson not found.</p>;
  }

  const details = [
    { label: 'Status', value: lesson.status },
    { label: 'Start date', value: lesson.start_date },
    { label: 'Last updated', value: lesson.updated_at },
  ];

  return (
    <section className="flex max-w-3xl flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="h4-b text-text">{lesson.title}</h1>
        <AppButton
          variant="outlined"
          startIcon={<EditOutlined />}
          onClick={() => router.push(ROUTES.admin.lesson.manage(lesson.id))}
        >
          Edit
        </AppButton>
      </div>

      <dl className="grid gap-4 rounded-app-radius border border-stroke bg-background p-6 sm:grid-cols-3">
        {details.map(({ label, value }) => (
          <div key={label}>
            <dt className="f1-m text-text-light">{label}</dt>
            <dd className="b2-m text-text">{value}</dd>
          </div>
        ))}
      </dl>

      <p className="b1-r text-text">{lesson.description}</p>
    </section>
  );
}
