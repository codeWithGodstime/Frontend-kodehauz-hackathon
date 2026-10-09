'use client';

import { useSearchParams } from 'next/navigation';
import { AppSkeleton } from '@msflib/react-components';
import { PLATFORMS } from '@/constant/platform-connection.constant';
import { usePlatformConnection } from '@/hooks/platform-connection.hooks';
import { isPlatformName } from '@/utils/platform-connection.utils';
import PlatformConnectionAccess from '../../components/PlatformConnectionAccess';
import PlatformConnectionForm from './PlatformConnectionForm';

export default function ManagePlatformConnection() {
  const params = useSearchParams();
  const id = params.get('id');
  const platformQuery = params.get('platform');
  const connection = usePlatformConnection(id);
  const platform = connection.data?.platform ?? platformQuery;
  const label = PLATFORMS.find((item) => item.platform === platform)?.label;

  return (
    <PlatformConnectionAccess>
      {id && connection.isLoading ? (
        <AppSkeleton.Text lines={6} />
      ) : id && (connection.isError || !connection.data) ? (
        <p className="b2-r text-error">Platform connection not found.</p>
      ) : !isPlatformName(platform) ? (
        <p className="b2-r text-error">
          Choose WhatsApp, Facebook, or Instagram.
        </p>
      ) : (
        <section className="flex max-w-3xl flex-col gap-6">
          <h1 className="h4-b text-text">
            {id ? `Update ${label}` : `Connect ${label}`}
          </h1>
          <PlatformConnectionForm
            key={connection.data?.id ?? platform}
            platform={platform}
            connection={connection.data}
          />
        </section>
      )}
    </PlatformConnectionAccess>
  );
}
