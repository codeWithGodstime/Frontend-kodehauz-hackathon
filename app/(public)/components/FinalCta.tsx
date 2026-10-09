import ArrowForward from '@mui/icons-material/ArrowForward';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';
import { finalCtaCopy } from '../data/data';
import ParallaxGlow from './ParallaxGlow';
import Reveal from './Reveal';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-stroke bg-neutral">
      <ParallaxGlow
        tone="ember"
        className="left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-80"
        distance={40}
      />
      <ParallaxGlow
        tone="gold"
        className="left-[10%] top-[60%] h-[20rem] w-[20rem] opacity-60"
        distance={70}
      />
      <AppContainer>
        <Reveal className="relative mx-auto max-w-3xl py-24 text-center md:py-36">
          <h2 className="d1-m text-balance text-text">
            {finalCtaCopy.headline}
          </h2>
          <p className="lead-r mt-6 text-pretty text-text-light">
            {finalCtaCopy.body}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <AppButton
              size="large"
              href={ROUTES.register}
              endIcon={<ArrowForward />}
              className="btn-shimmer"
            >
              {finalCtaCopy.primary_cta}
            </AppButton>
            <AppButton size="large" variant="outlined" href="#pricing">
              {finalCtaCopy.secondary_cta}
            </AppButton>
          </div>
        </Reveal>
      </AppContainer>
    </section>
  );
}
