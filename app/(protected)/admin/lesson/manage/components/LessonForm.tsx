'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import FormBuilder from '@/dynamics/FormBuilder';
import { ROUTES } from '@/constant/routes.constant';
import { useSaveLesson } from '@/hooks/lesson.hooks';
import { Lesson, LessonPayload } from '@/types/lesson.types';
import { lessonFormElements } from '../data/form/lesson.form';
import { LessonLayout } from '../data/form/lesson.layout';

interface LessonFormProps {
  lesson?: Lesson;
}

export default function LessonForm({ lesson }: LessonFormProps) {
  const router = useRouter();
  const { mutate: saveLesson, isPending } = useSaveLesson(lesson?.id);
  const [formData, setFormData] = useState<Partial<LessonPayload>>(
    lesson ?? {}
  );

  const handleSubmit = (data: LessonPayload) => {
    saveLesson(data, {
      onSuccess: () => {
        toast.success(lesson ? 'Lesson updated' : 'Lesson created');
        router.push(ROUTES.admin.lesson.list);
      },
      onError: () => toast.error('Could not save lesson. Please try again.'),
    });
  };

  return (
    <FormBuilder
      elements={lessonFormElements}
      layout={LessonLayout}
      formData={formData}
      setFormData={setFormData}
      loadingState={isPending}
      onSubmit={handleSubmit}
    />
  );
}
