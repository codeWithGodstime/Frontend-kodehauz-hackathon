'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useAuth } from '@msflib/react-auth';
import FormBuilder from '@/dynamics/FormBuilder';
import { ROUTES } from '@/constant/routes.constant';
import {
  RegisterFormValues,
  SignupOnboarding,
  SignupRequest,
} from '@/types/auth.types';
import { AuthHeader, AuthOption } from '../../components/Reusables';
import { registerFormElements } from '../data/form/register.form';
import { RegisterLayout } from '../data/form/register.layout';
import PlanStep from './PlanStep';

export default function SignUp() {
  const router = useRouter();
  const { register, login, loading } = useAuth();
  const [step, setStep] = useState<'account' | 'plan'>('account');
  const [formData, setFormData] = useState<Partial<RegisterFormValues>>({});
  const pending = loading.register || loading.login;

  const handleAccountSubmit = (values: RegisterFormValues) => {
    setFormData(values);
    setStep('plan');
  };

  const finish = (selection: SignupOnboarding) => {
    const email = formData.email;
    const password = formData.password;
    if (!email || !password) {
      toast.error('Enter your email and password to continue.');
      setStep('account');
      return;
    }

    const payload: SignupRequest = {
      username: formData.username,
      email,
      phone: formData.phone,
      password,
      skip_plan: selection.skip_plan,
      plan_key: selection.skip_plan ? null : selection.plan_key,
    };

    register(payload, {
      onSuccess: () => {
        login(
          { email, password },
          {
            onSuccess: () => {
              toast.success('Registration successful');
              router.push(ROUTES.admin.dashboard);
            },
            onError: () =>
              toast.error(
                'Account created, but sign-in failed. Please log in.'
              ),
          }
        );
      },
      onError: () =>
        toast.error('Registration failed. Please check your details.'),
    });
  };

  if (step === 'plan') {
    return (
      <PlanStep
        pending={pending}
        onBack={() => setStep('account')}
        onComplete={finish}
      />
    );
  }

  return (
    <div>
      <p className="b2-m text-primary">Step 1 of 2</p>
      <AuthHeader title="Create an account" subtitle="Sign up to get started" />
      <FormBuilder
        elements={registerFormElements}
        layout={RegisterLayout}
        formData={formData}
        setFormData={setFormData}
        loadingState={pending}
        onSubmit={handleAccountSubmit}
      />
      <AuthOption
        title="Already have an account?"
        linkText="Log in"
        linkHref={ROUTES.login}
      />
    </div>
  );
}
