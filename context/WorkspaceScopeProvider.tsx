'use client';

import { useEffect } from 'react';
import { Me, useAuth } from '@msflib/react-auth';
import { setActiveWorkspace } from '@msflib/core';
import { useWorkspace, WorkspaceProvider } from '@msflib/react-workspace';

function currentWorkspaceId(me: Me | null): number | null {
  const value = me?.current_workspace_id;
  return typeof value === 'number' ? value : null;
}

function ActiveWorkspaceSync() {
  const { me, status } = useAuth();
  const { workspaces, availableWorkspaces, loading } = useWorkspace();

  useEffect(() => {
    if (status === 'unauthenticated') {
      setActiveWorkspace(null);
      return;
    }
    if (status !== 'authenticated') return;
    if (loading.workspaces || loading.availableWorkspaces) return;

    const currentId = currentWorkspaceId(me);
    const pool = [...workspaces, ...availableWorkspaces];
    const match =
      (currentId != null
        ? pool.find((workspace) => workspace.id === currentId)
        : undefined) ?? pool[0];
    setActiveWorkspace(match?.slug ?? null);
  }, [
    availableWorkspaces,
    loading.availableWorkspaces,
    loading.workspaces,
    me,
    status,
    workspaces,
  ]);

  return null;
}

export default function WorkspaceScopeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useAuth();

  return (
    <WorkspaceProvider
      options={{
        isWorkspaceScoped: false,
        requireAuth: true,
        isAuthenticated: status === 'authenticated',
        pathWorkspaceScope: { available: false },
      }}
    >
      <ActiveWorkspaceSync />
      {children}
    </WorkspaceProvider>
  );
}
