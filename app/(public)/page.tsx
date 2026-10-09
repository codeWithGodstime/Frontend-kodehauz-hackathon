import PublicHeader from './components/PublicHeader';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import LandingPricing from './components/LandingPricing';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import PublicFooter from './components/PublicFooter';

export default function PublicHomePage() {
  return (
    <main className="min-h-screen bg-background">
      <PublicHeader />
      <Hero />
      <Comparison />
      <HowItWorks />
      <Features />
      <LandingPricing />
      <Faq />
      <FinalCta />
      <PublicFooter />
    </main>
  );
}
