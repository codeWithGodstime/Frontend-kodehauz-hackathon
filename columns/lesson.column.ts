import { Lesson } from '@/types/lesson.types';
import { TableColumn } from '@/types/table.types';

export const lessonColumns: TableColumn<Lesson>[] = [
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'status', headerName: 'Status', width: 140 },
  { field: 'start_date', headerName: 'Start date', width: 160 },
];
