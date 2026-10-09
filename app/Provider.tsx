'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '@msflib/react-auth';
import WorkspaceScopeProvider from '@/context/WorkspaceScopeProvider';
import { initMsflib } from '@/lib/application.config';
import { ThemeProvider } from '@/theme/ThemeProvider';

export const qc = new QueryClient();
initMsflib();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={qc}>
      <ThemeProvider>
        <AuthProvider options={{ isWorkspaceScoped: false }}>
          <WorkspaceScopeProvider>{children}</WorkspaceScopeProvider>
        </AuthProvider>
        <ToastContainer position="top-right" newestOnTop />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
