export const ROUTES = {
  home: '/',
  pricing: '/pricing',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  terms: '/terms',
  admin: {
    dashboard: '/admin',
    lesson: {
      list: '/admin/lesson',
      manage: (id?: string | number) =>
        id ? `/admin/lesson/manage?id=${id}` : '/admin/lesson/manage',
      view: (id: string | number) => `/admin/lesson/view?id=${id}`,
    },
  },
} as const;
