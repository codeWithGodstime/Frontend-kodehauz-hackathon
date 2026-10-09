import AppContainer from '@/components/AppContainer';
import { howItWorksSteps } from '../data/data';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 md:py-20">
      <AppContainer>
        <div className="max-w-2xl">
          <p className="b2-m text-primary">How it works</p>
          <h2 className="h3-b mt-2 text-text">
            From a noisy inbox to a clear order list
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {howItWorksSteps.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className="rounded-app-radius border border-stroke bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <span className="b2-b flex h-8 w-8 items-center justify-center rounded-full bg-primary text-on-primary">
                  {index + 1}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Icon fontSize="small" />
                </span>
              </div>
              <h3 className="h6-b mt-4 text-text">{title}</h3>
              <p className="b2-r mt-2 text-text-light">{description}</p>
            </li>
          ))}
        </ol>
      </AppContainer>
    </section>
  );
}
