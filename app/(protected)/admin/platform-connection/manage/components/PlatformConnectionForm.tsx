'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { PlatformName } from '@/constant/platform-connection.constant';
import { ROUTES } from '@/constant/routes.constant';
import FormBuilder from '@/dynamics/FormBuilder';
import { useConnectPlatform } from '@/hooks/platform-connection.hooks';
import {
  PlatformConnection,
  PlatformConnectionConnect,
} from '@/types/platform-connection.types';
import { platformConnectionNotes } from '../data/data';
import { platformConnectionFormElements } from '../data/form/platform-connection.form';
import { PlatformConnectionLayout } from '../data/form/platform-connection.layout';

export default function PlatformConnectionForm({
  platform,
  connection,
}: {
  platform: PlatformName;
  connection?: PlatformConnection;
}) {
  const router = useRouter();
  const { mutate: connectPlatform, isPending } = useConnectPlatform();
  const [formData, setFormData] = useState<Partial<PlatformConnectionConnect>>(
    connection ?? { platform }
  );
  const isEdit = Boolean(connection);

  const handleSubmit = (data: PlatformConnectionConnect) => {
    connectPlatform(
      { ...data, platform },
      {
        onSuccess: (saved) => {
          toast.success(isEdit ? 'Platform updated' : 'Platform connected');
          router.push(ROUTES.admin.platformConnection.view(saved.id));
        },
        onError: () =>
          toast.error('Could not connect the platform. Please try again.'),
      }
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="b2-r text-text-light">
        {platformConnectionNotes[platform]}
      </p>
      <FormBuilder
        elements={platformConnectionFormElements(
          platform,
          isEdit ? 'Update connection' : 'Connect'
        )}
        layout={PlatformConnectionLayout}
        formData={formData}
        setFormData={setFormData}
        loadingState={isPending}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
