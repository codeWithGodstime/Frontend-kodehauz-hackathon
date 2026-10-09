export type LessonStatus = 'draft' | 'published';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  status: LessonStatus;
  start_date: string;
  created_at: string;
  updated_at: string;
}

export type LessonPayload = Omit<Lesson, 'id' | 'created_at' | 'updated_at'>;
