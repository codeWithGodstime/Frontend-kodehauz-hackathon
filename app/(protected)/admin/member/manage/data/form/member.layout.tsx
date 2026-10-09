import { LayoutProps } from '@msflib/react-components';

export const MemberLayout: React.FC<LayoutProps> = ({ FormField }) => (
  <section className="grid gap-4 md:grid-cols-2">
    <FormField elementName="first_name" />
    <FormField elementName="last_name" />
    <FormField elementName="email" />
    <FormField elementName="phone" />
    <FormField elementName="password" />
    <FormField elementName="confirm_password" />
    <FormField elementName="type" />
    <div className="md:col-span-2 md:justify-self-end">
      <FormField elementName="submit" />
    </div>
  </section>
);
