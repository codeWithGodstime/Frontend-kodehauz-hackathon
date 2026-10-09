'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import FormBuilder from '@/dynamics/FormBuilder';
import { ROUTES } from '@/constant/routes.constant';
import { useCreateMember } from '@/hooks/member.hooks';
import {
  AssignableMemberRole,
  WorkspaceMemberPayload,
} from '@/types/member.types';
import { memberErrorMessage } from '@/utils/member.utils';
import { memberFormElements } from '../data/form/member.form';
import { MemberLayout } from '../data/form/member.layout';

interface MemberFormData extends WorkspaceMemberPayload {
  first_name: string;
  last_name?: string;
  confirm_password: string;
  type: AssignableMemberRole;
}

export default function MemberForm() {
  const router = useRouter();
  const { mutate: createMember, isPending } = useCreateMember();
  const [formData, setFormData] = useState<Partial<MemberFormData>>({
    type: 'member',
  });

  const handleSubmit = (data: MemberFormData) => {
    const lastName = data.last_name?.trim();
    const payload: WorkspaceMemberPayload = {
      email: data.email,
      phone: data.phone,
      password: data.password,
      first_name: data.first_name,
      type: data.type,
    };
    if (lastName) payload.last_name = lastName;

    createMember(payload, {
      onSuccess: () => {
        toast.success('Member added');
        router.push(ROUTES.admin.member.list);
      },
      onError: (error) =>
        toast.error(
          memberErrorMessage(error, 'Could not add member. Please try again.')
        ),
    });
  };

  return (
    <FormBuilder
      elements={memberFormElements}
      layout={MemberLayout}
      formData={formData}
      setFormData={setFormData}
      loadingState={isPending}
      onSubmit={handleSubmit}
    />
  );
}
