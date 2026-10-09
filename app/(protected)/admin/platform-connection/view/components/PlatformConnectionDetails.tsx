'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { AppSkeleton } from '@msflib/react-components';
import AppButton from '@/components/AppButton';
import AppConfirmDialog from '@/components/AppConfirmDialog';
import { PLATFORMS } from '@/constant/platform-connection.constant';
import { ROUTES } from '@/constant/routes.constant';
import {
  useDisconnectPlatform,
  usePlatformConnection,
} from '@/hooks/platform-connection.hooks';
import PlatformConnectionAccess from '../../components/PlatformConnectionAccess';

export default function PlatformConnectionDetails() {
  const router = useRouter();
  const id = useSearchParams().get('id');
  const connection = usePlatformConnection(id);
  const { mutate: disconnect, isPending } = useDisconnectPlatform();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const row = connection.data;
  const label =
    PLATFORMS.find((item) => item.platform === row?.platform)?.label ??
    'Platform';

  const handleDisconnect = () => {
    if (!row) return;
    disconnect(row.id, {
      onSuccess: () => {
        toast.success('Platform disconnected');
        setConfirmOpen(false);
        router.push(ROUTES.admin.platformConnection.list);
      },
      onError: () =>
        toast.error('Could not disconnect the platform. Please try again.'),
    });
  };

  return (
    <PlatformConnectionAccess>
      {connection.isLoading ? (
        <AppSkeleton.Text lines={6} />
      ) : !id || connection.isError || !row ? (
        <p className="b2-r text-error">Platform connection not found.</p>
      ) : (
        <section className="flex max-w-3xl flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="h4-b text-text">{label}</h1>
            <div className="flex flex-wrap gap-2">
              <AppButton
                variant="outlined"
                href={ROUTES.admin.platformConnection.manage(row.id)}
              >
                Edit
              </AppButton>
              {row.status === 'connected' ? (
                <AppButton
                  variant="outlined"
                  color="error"
                  onClick={() => setConfirmOpen(true)}
                >
                  Disconnect
                </AppButton>
              ) : (
                <AppButton
                  href={ROUTES.admin.platformConnection.manage(row.id)}
                >
                  Connect
                </AppButton>
              )}
            </div>
          </div>
          <dl className="grid gap-4 rounded-app-radius border border-stroke bg-background p-6 sm:grid-cols-2">
            {[
              { label: 'Status', value: row.status },
              {
                label: 'Display phone number',
                value: row.display_phone_number,
              },
              { label: 'Phone number id', value: row.phone_number_id },
              { label: 'Page id', value: row.page_id },
              {
                label: 'Instagram business account id',
                value: row.instagram_business_account_id,
              },
            ].map((item) => (
              <div key={item.label}>
                <dt className="f1-m text-text-light">{item.label}</dt>
                <dd className="b2-r text-text">{item.value || 'Not set'}</dd>
              </div>
            ))}
          </dl>
          <AppConfirmDialog
            open={confirmOpen}
            title="Disconnect platform"
            message="Messages for this platform will stop matching this workspace until you connect it again."
            confirmLabel="Disconnect"
            loading={isPending}
            onConfirm={handleDisconnect}
            onClose={() => setConfirmOpen(false)}
          />
        </section>
      )}
    </PlatformConnectionAccess>
  );
}
