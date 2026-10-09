import { FormElement } from '@msflib/react-components';
import { baseMData, buttonStyle } from '@/styles/form.styles';
import { lessonStatusOptions } from '../data';

export const lessonFormElements: FormElement[] = [
  {
    id: 'title',
    name: 'title',
    label: 'Title',
    eType: 'text',
    dType: 'string',
    placeholder: 'Enter lesson title',
    mData: baseMData,
    validation: { required: { value: true, message: 'Title is required' } },
  },
  {
    id: 'status',
    name: 'status',
    label: 'Status',
    eType: 'select',
    dType: 'string',
    mData: { ...baseMData, options: lessonStatusOptions },
    validation: { required: { value: true, message: 'Status is required' } },
  },
  {
    id: 'start_date',
    name: 'start_date',
    label: 'Start date',
    eType: 'date',
    dType: 'string',
    mData: baseMData,
  },
  {
    id: 'description',
    name: 'description',
    label: 'Description',
    eType: 'textarea',
    dType: 'string',
    placeholder: 'What is this lesson about?',
    mData: { ...baseMData, rows: 4 },
  },
  {
    id: 'submit',
    name: 'submit',
    label: 'Save lesson',
    eType: 'button',
    dType: 'submit',
    mData: {
      variant: 'contained',
      label_style: { display: 'none' },
      sx: buttonStyle(),
    },
  },
];
