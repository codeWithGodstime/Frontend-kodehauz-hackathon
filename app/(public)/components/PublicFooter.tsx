import AppContainer from '@/components/AppContainer';

export default function PublicFooter() {
  return (
    <footer className="border-t border-stroke py-8">
      <AppContainer>
        <p className="f1-r text-text-light">
          © {new Date().getFullYear()} MSF App. Scaffolded with
          @msflib/react-template.
        </p>
      </AppContainer>
    </footer>
  );
}
