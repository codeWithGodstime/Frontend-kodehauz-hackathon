import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { lessonApi } from '@/api/lesson.api';
import { LessonPayload } from '@/types/lesson.types';

export const lessonKeys = {
  all: ['lesson'] as const,
  list: () => [...lessonKeys.all, 'list'] as const,
  detail: (id: string) => [...lessonKeys.all, 'detail', id] as const,
};

export const useLessons = () =>
  useQuery({ queryKey: lessonKeys.list(), queryFn: lessonApi.list });

export const useLesson = (id?: string | null) =>
  useQuery({
    queryKey: lessonKeys.detail(id ?? ''),
    queryFn: () => lessonApi.get(id as string),
    enabled: Boolean(id),
  });

export const useSaveLesson = (id?: string | null) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: LessonPayload) =>
      id ? lessonApi.update(id, payload) : lessonApi.create(payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: lessonKeys.all }),
  });
};

export const useDeleteLesson = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: lessonApi.remove,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: lessonKeys.all }),
  });
};
