import { LayoutProps } from '@msflib/react-components';

export const PlatformConnectionLayout: React.FC<LayoutProps> = ({
  FormField,
  elements,
}) => (
  <section className="grid gap-4">
    {elements
      .filter((element) => element.name !== 'submit')
      .map((element) => (
        <FormField key={element.name} elementName={element.name} />
      ))}
    <div className="md:justify-self-end">
      <FormField elementName="submit" />
    </div>
  </section>
);
