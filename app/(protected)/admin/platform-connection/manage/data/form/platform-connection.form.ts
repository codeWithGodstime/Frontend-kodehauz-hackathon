import { FormElement } from '@msflib/react-components';
import { PlatformName } from '@/constant/platform-connection.constant';
import { baseMData, buttonStyle } from '@/styles/form.styles';

const textField = (
  name: string,
  label: string,
  placeholder: string,
  required?: string
): FormElement => ({
  id: name,
  name,
  label,
  eType: 'text',
  dType: 'string',
  placeholder,
  mData: baseMData,
  validation: required
    ? { required: { value: true, message: required } }
    : undefined,
});

export function platformConnectionFormElements(
  platform: PlatformName,
  submitLabel: string
): FormElement[] {
  const fields: FormElement[] = [];
  if (platform === 'whatsapp') {
    fields.push(
      textField(
        'display_phone_number',
        'Display phone number',
        '2348095550100',
        'Display phone number is required'
      ),
      textField('phone_number_id', 'Phone number id', '106855512345678')
    );
  }
  if (platform === 'facebook') {
    fields.push(
      textField('page_id', 'Page id', '111222333', 'Page id is required')
    );
  }
  if (platform === 'instagram') {
    fields.push(
      textField(
        'instagram_business_account_id',
        'Instagram business account id',
        '17840000000000000',
        'Instagram business account id is required'
      ),
      textField('page_id', 'Page id', 'Optional Facebook Page id')
    );
  }
  fields.push({
    id: 'submit',
    name: 'submit',
    label: submitLabel,
    eType: 'button',
    dType: 'submit',
    mData: { variant: 'contained', sx: buttonStyle() },
  });
  return fields;
}
