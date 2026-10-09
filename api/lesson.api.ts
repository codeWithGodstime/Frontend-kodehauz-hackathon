import { configuredApiClient } from '@msflib/core';
import { Lesson, LessonPayload } from '@/types/lesson.types';

const ENDPOINT = '/lesson';
const client = () => configuredApiClient().apiClient;

export const lessonApi = {
  list: () => client()<Lesson[]>('GET', ENDPOINT),
  get: (id: string) => client()<Lesson>('GET', `${ENDPOINT}/${id}`),
  create: (payload: LessonPayload) =>
    client()<Lesson>('POST', ENDPOINT, payload),
  update: (id: string, payload: LessonPayload) =>
    client()<Lesson>('PUT', `${ENDPOINT}/${id}`, payload),
  remove: (id: string) => client()<void>('DELETE', `${ENDPOINT}/${id}`),
};
