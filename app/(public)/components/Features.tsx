import AppContainer from '@/components/AppContainer';
import { features } from '../data/data';

export default function Features() {
  return (
    <section className="border-y border-stroke bg-surface py-16 md:py-20">
      <AppContainer>
        <div className="max-w-2xl">
          <p className="b2-m text-primary">What&apos;s included</p>
          <h2 className="h3-b mt-2 text-text">
            The groundwork is done, so your team can focus on the product
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-app-radius border border-stroke bg-background p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                <Icon fontSize="small" />
              </span>
              <h3 className="h6-b mt-4 text-text">{title}</h3>
              <p className="b2-r mt-2 text-text-light">{description}</p>
            </article>
          ))}
        </div>
      </AppContainer>
    </section>
  );
}
