import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import AppContainer from '@/components/AppContainer';
import { oldWayPoints, socialchefWayPoints } from '../data/data';

export default function Comparison() {
  return (
    <section className="border-y border-stroke bg-surface py-16 md:py-20">
      <AppContainer>
        <div className="max-w-2xl">
          <p className="b2-m text-primary">The daily scramble</p>
          <h2 className="h3-b mt-2 text-text">
            The old way, and the Socialchef way
          </h2>
          <p className="b1-r mt-4 text-text-light">
            Selling food in the DMs should not mean losing orders inside the
            chat. Here is what changes when the inbox sorts itself.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-app-radius border border-stroke bg-background p-6 md:p-8">
            <h3 className="h5-b text-text">The old way</h3>
            <ul className="mt-6 space-y-4">
              {oldWayPoints.map((point) => (
                <li key={point.text} className="flex gap-3">
                  <Close className="mt-0.5 text-error" fontSize="small" />
                  <p className="b2-r text-text">{point.text}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-app-radius border border-primary bg-primary-light p-6 md:p-8">
            <h3 className="h5-b text-text">The Socialchef way</h3>
            <ul className="mt-6 space-y-4">
              {socialchefWayPoints.map((point) => (
                <li key={point.text} className="flex gap-3">
                  <Check className="mt-0.5 text-primary" fontSize="small" />
                  <p className="b2-r text-text">{point.text}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </AppContainer>
    </section>
  );
}
