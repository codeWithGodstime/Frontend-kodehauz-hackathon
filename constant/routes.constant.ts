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
    platformConnection: {
      list: '/admin/platform-connection',
      manage: (id?: string | number, platform?: string) => {
        if (id) return `/admin/platform-connection/manage?id=${id}`;
        if (platform) {
          return `/admin/platform-connection/manage?platform=${platform}`;
        }
        return '/admin/platform-connection/manage';
      },
      view: (id: string | number) => `/admin/platform-connection/view?id=${id}`,
    },
    member: {
      list: '/admin/member',
      manage: '/admin/member/manage',
    },
  },
} as const;
