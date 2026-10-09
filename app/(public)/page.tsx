import PublicHeader from './components/PublicHeader';
import Hero from './components/Hero';
import Features from './components/Features';
import GettingStarted from './components/GettingStarted';
import PublicFooter from './components/PublicFooter';

export default function PublicHomePage() {
  return (
    <main className="min-h-screen bg-background">
      <PublicHeader />
      <Hero />
      <Features />
      <GettingStarted />
      <PublicFooter />
    </main>
  );
}
