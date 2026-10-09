'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { LoginPayload, useAuth } from '@msflib/react-auth';
import FormBuilder from '@/dynamics/FormBuilder';
import { ROUTES } from '@/constant/routes.constant';
import { AuthHeader, AuthOption } from '../../components/Reusables';
import { loginFormElements } from '../data/form/login.form';
import { LoginLayout } from '../data/form/login.layout';

export default function Login() {
  const router = useRouter();
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState<Partial<LoginPayload>>({});

  const handleSubmit = (data: LoginPayload) => {
    login(data, {
      onSuccess: () => {
        toast.success('Login successful');
        router.push(ROUTES.admin.dashboard);
      },
      onError: () =>
        toast.error('Login failed. Please check your credentials.'),
    });
  };

  return (
    <div>
      <AuthHeader
        title="Welcome back"
        subtitle="Sign in to continue to your account"
      />
      <FormBuilder
        elements={loginFormElements}
        layout={LoginLayout}
        formData={formData}
        setFormData={setFormData}
        loadingState={loading.login}
        onSubmit={handleSubmit}
      />
      <AuthOption
        title="Don't have an account?"
        linkText="Sign up"
        linkHref={ROUTES.register}
      />
    </div>
  );
}
