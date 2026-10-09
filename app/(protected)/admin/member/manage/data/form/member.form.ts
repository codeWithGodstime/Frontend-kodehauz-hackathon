import { FormElement } from '@msflib/react-components';
import { baseMData, buttonStyle } from '@/styles/form.styles';
import { memberRoleOptions } from '../data';

export const memberFormElements: FormElement[] = [
  {
    id: 'first_name',
    name: 'first_name',
    label: 'First name',
    eType: 'text',
    dType: 'string',
    placeholder: 'Enter first name',
    mData: baseMData,
    validation: {
      required: { value: true, message: 'First name is required' },
    },
  },
  {
    id: 'last_name',
    name: 'last_name',
    label: 'Last name',
    eType: 'text',
    dType: 'string',
    placeholder: 'Enter last name',
    mData: baseMData,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    eType: 'email',
    dType: 'string',
    placeholder: 'Enter email',
    mData: baseMData,
    validation: {
      required: { value: true, message: 'Email is required' },
      pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' },
    },
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Phone number',
    eType: 'text',
    dType: 'string',
    placeholder: 'Enter phone number',
    mData: baseMData,
    validation: {
      required: { value: true, message: 'Phone number is required' },
      minLength: { value: 8, message: 'Invalid phone number' },
    },
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    eType: 'password',
    dType: 'string',
    placeholder: 'Set a password',
    mData: baseMData,
    validation: {
      required: { value: true, message: 'Password is required' },
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
    },
  },
  {
    id: 'confirm_password',
    name: 'confirm_password',
    label: 'Confirm password',
    eType: 'password',
    dType: 'string',
    placeholder: 'Confirm the password',
    mData: baseMData,
    validation: {
      required: { value: true, message: 'Please confirm the password' },
      validate: (value: string, values: { password: string }) =>
        value === values.password || 'Passwords do not match',
    },
  },
  {
    id: 'type',
    name: 'type',
    label: 'Role',
    eType: 'select',
    dType: 'string',
    mData: { ...baseMData, options: memberRoleOptions },
    validation: { required: { value: true, message: 'Role is required' } },
  },
  {
    id: 'submit',
    name: 'submit',
    label: 'Add member',
    eType: 'button',
    dType: 'submit',
    mData: {
      variant: 'contained',
      label_style: { display: 'none' },
      sx: buttonStyle(),
    },
  },
];
