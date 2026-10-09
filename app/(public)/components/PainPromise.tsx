import AppContainer from '@/components/AppContainer';
import { painPoints, promise } from '../data/data';
import Reveal from './Reveal';

export default function PainPromise() {
  return (
    <section className="border-y border-stroke bg-surface/60 py-20 md:py-28">
      <AppContainer>
        <ol className="grid gap-px overflow-hidden rounded-app-radius border border-stroke bg-stroke md:grid-cols-3">
          {painPoints.map((point, index) => (
            <Reveal
              key={point.title}
              as="li"
              delayMs={index * 90}
              className="bg-background p-7 md:p-9"
            >
              <p className="f1-m tabular text-text-light">0{index + 1}</p>
              <h3 className="d4-m mt-4 text-text">{point.title}</h3>
              <p className="b1-r mt-3 text-text-light">{point.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
          <p className="eyebrow text-primary">The flip</p>
          <h2 className="d2-m mt-4 text-balance text-text">
            {promise.headline}
          </h2>
          <p className="lead-r mt-5 text-pretty text-text-light">
            {promise.body}
          </p>
        </Reveal>
      </AppContainer>
    </section>
  );
}
