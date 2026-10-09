import PublicFooter from '../components/PublicFooter';
import PublicHeader from '../components/PublicHeader';
import Pricing from './components/Pricing';

export default function Page() {
  return (
    <main className="grain min-h-screen bg-background">
      <PublicHeader />
      <Pricing />
      <PublicFooter />
    </main>
  );
}
