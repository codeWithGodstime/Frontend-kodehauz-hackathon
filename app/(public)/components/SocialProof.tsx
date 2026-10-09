import FormatQuoteRounded from '@mui/icons-material/FormatQuoteRounded';
import AppContainer from '@/components/AppContainer';
import { socialProofCopy, stats, testimonials } from '../data/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('');
}

export default function SocialProof() {
  return (
    <section className="border-t border-stroke bg-surface/60 py-20 md:py-28">
      <AppContainer>
        <SectionHeading
          eyebrow={socialProofCopy.eyebrow}
          headline={socialProofCopy.headline}
          align="center"
        />

        <Reveal className="mt-12">
          <dl className="grid gap-px overflow-hidden rounded-app-radius border border-stroke bg-stroke sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse bg-background px-6 py-7"
              >
                <dt className="b2-r mt-1 text-text-light">{stat.label}</dt>
                <dd className="d3-m tabular text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <ul className="mt-6 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              as="li"
              delayMs={index * 80}
              className="h-full"
            >
              <figure className="card-lift glass flex h-full flex-col rounded-app-radius p-6 md:p-7">
                <FormatQuoteRounded
                  aria-hidden
                  className="text-primary"
                  fontSize="large"
                />
                <blockquote className="d4-r mt-3 flex-1 text-pretty text-text">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="f1-b flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                    {initials(item.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="b2-m text-text">{item.name}</p>
                    <p className="f1-r truncate text-text-light">
                      {item.business} · {item.platforms}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <p className="f1-r mt-6 text-center text-text-light">
          Vendor names and figures are illustrative while SocialChef is in early
          access.
        </p>
      </AppContainer>
    </section>
  );
}
