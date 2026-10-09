'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import AddIcon from '@mui/icons-material/Add';
import { MenuActionItem } from '@msflib/react-components';
import AppButton from '@/components/AppButton';
import AppConfirmDialog from '@/components/AppConfirmDialog';
import TableWidget from '@/dynamics/TableWidget';
import { lessonColumns } from '@/columns/lesson.column';
import { ROUTES } from '@/constant/routes.constant';
import { useDeleteLesson, useLessons } from '@/hooks/lesson.hooks';
import { Lesson } from '@/types/lesson.types';

const menuItems: MenuActionItem[] = [
  { key: 'view', label: 'View' },
  { key: 'edit', label: 'Edit' },
  { key: 'delete', label: 'Delete' },
];

export default function LessonList() {
  const router = useRouter();
  const { data: lessons = [], isLoading, isError, refetch } = useLessons();
  const { mutate: deleteLesson, isPending: isDeleting } = useDeleteLesson();
  const [lessonToDelete, setLessonToDelete] = useState<Lesson | null>(null);

  const handleMenuClick = (item: MenuActionItem, row: Lesson) => {
    if (item.key === 'view') router.push(ROUTES.admin.lesson.view(row.id));
    if (item.key === 'edit') router.push(ROUTES.admin.lesson.manage(row.id));
    if (item.key === 'delete') setLessonToDelete(row);
  };

  const handleDelete = () => {
    if (!lessonToDelete) return;
    deleteLesson(lessonToDelete.id, {
      onSuccess: () => {
        toast.success('Lesson deleted');
        setLessonToDelete(null);
      },
      onError: () => toast.error('Could not delete lesson. Please try again.'),
    });
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="h4-b text-text">Lessons</h1>
          <p className="b2-r text-text-light">Create and manage lessons.</p>
        </div>
        <AppButton
          startIcon={<AddIcon />}
          onClick={() => router.push(ROUTES.admin.lesson.manage())}
        >
          Create lesson
        </AppButton>
      </div>

      {isError ? (
        <div className="flex flex-col items-start gap-3">
          <p className="b2-r text-error">Could not load lessons.</p>
          <AppButton variant="outlined" onClick={() => refetch()}>
            Retry
          </AppButton>
        </div>
      ) : !isLoading && lessons.length === 0 ? (
        <p className="b2-r text-text-light">
          No lessons yet. Create your first lesson to get started.
        </p>
      ) : (
        <TableWidget
          rows={lessons}
          columns={lessonColumns}
          loading={isLoading}
          menuItem
          menuItems={menuItems}
          handleMenuClick={handleMenuClick}
          enableSearch
          autoHeight
        />
      )}

      <AppConfirmDialog
        open={Boolean(lessonToDelete)}
        title="Delete lesson"
        message={`"${lessonToDelete?.title}" will be permanently deleted.`}
        confirmLabel="Delete"
        loading={isDeleting}
        onConfirm={handleDelete}
        onClose={() => setLessonToDelete(null)}
      />
    </section>
  );
}
