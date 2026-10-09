import AppContainer from '@/components/AppContainer';
import { keyFiles, nextSteps } from '../data/data';

export default function GettingStarted() {
  return (
    <AppContainer>
      <section className="grid gap-12 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <p className="b2-m text-primary">Next steps</p>
          <h2 className="h3-b mt-2 text-text">
            From scaffold to first feature
          </h2>
          <ol className="mt-8 space-y-6">
            {nextSteps.map(({ title, description }, index) => (
              <li key={title} className="flex gap-4">
                <span className="b2-b flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="b1-b text-text">{title}</h3>
                  <p className="b2-r mt-1 text-text-light">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="b2-m text-primary">Key files</p>
          <h2 className="h3-b mt-2 text-text">Where things live</h2>
          <ul className="mt-8 divide-y divide-stroke overflow-hidden rounded-app-radius border border-stroke bg-surface">
            {keyFiles.map(({ path, description }) => (
              <li key={path} className="p-5">
                <code className="b2-m font-mono wrap-anywhere text-text">
                  {path}
                </code>
                <p className="b2-r mt-1 text-text-light">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AppContainer>
  );
}
