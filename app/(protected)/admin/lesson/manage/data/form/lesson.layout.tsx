import { LayoutProps } from '@msflib/react-components';

export const LessonLayout: React.FC<LayoutProps> = ({ FormField }) => (
  <section className="grid gap-4 md:grid-cols-2">
    <div className="md:col-span-2">
      <FormField elementName="title" />
    </div>
    <FormField elementName="status" />
    <FormField elementName="start_date" />
    <div className="md:col-span-2">
      <FormField elementName="description" />
    </div>
    <div className="md:col-span-2 md:justify-self-end">
      <FormField elementName="submit" />
    </div>
  </section>
);
