import BringYourOwnAi from './components/BringYourOwnAi';
import Faq from './components/Faq';
import FeatureGrid from './components/FeatureGrid';
import FinalCta from './components/FinalCta';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import InsightsShowcase from './components/InsightsShowcase';
import LandingPricing from './components/LandingPricing';
import PainPromise from './components/PainPromise';
import PublicFooter from './components/PublicFooter';
import PublicHeader from './components/PublicHeader';
import SocialProof from './components/SocialProof';

export default function PublicHomePage() {
  return (
    <main className="grain min-h-screen bg-background">
      <PublicHeader />
      <Hero />
      <PainPromise />
      <HowItWorks />
      <InsightsShowcase />
      <BringYourOwnAi />
      <FeatureGrid />
      <SocialProof />
      <LandingPricing />
      <Faq />
      <FinalCta />
      <PublicFooter />
    </main>
  );
}
