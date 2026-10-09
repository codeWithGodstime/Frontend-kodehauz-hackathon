import { RegisterPayload } from '@msflib/react-auth';

export interface RegisterFormValues extends RegisterPayload {
  confirm_password: string;
  terms: boolean;
}

export interface SignupOnboarding {
  plan_key?: string | null;
  skip_plan: boolean;
}

export type SignupRequest = RegisterPayload & SignupOnboarding;
