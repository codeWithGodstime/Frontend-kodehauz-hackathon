'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AppSkeleton } from '@msflib/react-components';
import AppButton from '@/components/AppButton';
import AppConfirmDialog from '@/components/AppConfirmDialog';
import {
  PLATFORMS,
  PlatformName,
} from '@/constant/platform-connection.constant';
import { ROUTES } from '@/constant/routes.constant';
import {
  useDisconnectPlatform,
  usePlatformConnections,
} from '@/hooks/platform-connection.hooks';
import { PlatformConnection } from '@/types/platform-connection.types';
import PlatformConnectionAccess from './PlatformConnectionAccess';

const ICONS: Record<PlatformName, IconType> = {
  whatsapp: FaWhatsapp,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

function identifier(row: PlatformConnection): string {
  if (row.platform === 'whatsapp') {
    return row.display_phone_number || 'No display phone number yet';
  }
  if (row.platform === 'facebook') {
    return row.page_id || 'No page id yet';
  }
  return (
    row.instagram_business_account_id || 'No Instagram business account id yet'
  );
}

export default function PlatformConnectionList() {
  const connections = usePlatformConnections(true);
  const { mutate: disconnect, isPending } = useDisconnectPlatform();
  const [pending, setPending] = useState<PlatformConnection | null>(null);
  const rows = connections.data ?? [];

  const handleDisconnect = () => {
    if (!pending) return;
    disconnect(pending.id, {
      onSuccess: () => {
        toast.success('Platform disconnected');
        setPending(null);
      },
      onError: () =>
        toast.error('Could not disconnect the platform. Please try again.'),
    });
  };

  return (
    <PlatformConnectionAccess>
      <section className="flex flex-col gap-6">
        <div>
          <h1 className="h4-b text-text">Platforms</h1>
          <p className="b2-r text-text-light">
            Connect WhatsApp, Facebook, or Instagram for this workspace. Connect
            saves the account identifiers. It does not sign in with Meta.
          </p>
        </div>

        {connections.isError ? (
          <div className="flex flex-col items-start gap-3">
            <p className="b2-r text-error">
              Could not load platform connections.
            </p>
            <AppButton variant="outlined" onClick={() => connections.refetch()}>
              Retry
            </AppButton>
          </div>
        ) : connections.isLoading ? (
          <AppSkeleton.Text lines={4} />
        ) : (
          <ul className="grid gap-4 md:grid-cols-3">
            {PLATFORMS.map((item) => {
              const row = rows.find(
                (connection) => connection.platform === item.platform
              );
              const connected = row?.status === 'connected';
              const Icon = ICONS[item.platform];
              return (
                <li
                  key={item.platform}
                  className="flex flex-col gap-4 rounded-app-radius border border-stroke bg-background p-4"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-primary" aria-hidden />
                    <h2 className="h6-b text-text">{item.label}</h2>
                  </div>
                  <p className="b2-r text-text-light">{item.hint}</p>
                  <p className="b2-m text-text">
                    {connected ? 'Connected' : 'Disconnected'}
                  </p>
                  {row ? (
                    <p className="f1-r text-text-light">{identifier(row)}</p>
                  ) : null}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {connected && row ? (
                      <AppButton
                        variant="outlined"
                        color="error"
                        onClick={() => setPending(row)}
                      >
                        Disconnect
                      </AppButton>
                    ) : (
                      <AppButton
                        href={ROUTES.admin.platformConnection.manage(
                          row?.id,
                          item.platform
                        )}
                      >
                        Connect
                      </AppButton>
                    )}
                    {row ? (
                      <AppButton
                        variant="text"
                        href={ROUTES.admin.platformConnection.view(row.id)}
                      >
                        View
                      </AppButton>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <AppConfirmDialog
        open={Boolean(pending)}
        title="Disconnect platform"
        message="Messages for this platform will stop matching this workspace until you connect it again."
        confirmLabel="Disconnect"
        loading={isPending}
        onConfirm={handleDisconnect}
        onClose={() => setPending(null)}
      />
    </PlatformConnectionAccess>
  );
}
