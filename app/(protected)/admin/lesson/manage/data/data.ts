import { OptionItem } from '@msflib/react-components';
import { LessonStatus } from '@/types/lesson.types';

export const lessonStatusOptions: (OptionItem & { value: LessonStatus })[] = [
  { value: 'draft', label: 'Draft' },
  { value: 'published', label: 'Published' },
];
