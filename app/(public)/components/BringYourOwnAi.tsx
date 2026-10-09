import IosShareOutlined from '@mui/icons-material/IosShareOutlined';
import AppContainer from '@/components/AppContainer';
import { byoaiCopy } from '../data/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function BringYourOwnAi() {
  return (
    <section className="py-20 md:py-28">
      <AppContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={byoaiCopy.eyebrow}
              headline={byoaiCopy.headline}
              body={byoaiCopy.body}
            />
            <Reveal delayMs={120}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {byoaiCopy.targets.map((target) => (
                  <li
                    key={target}
                    className="b2-m flex items-center gap-2 rounded-chip-radius border border-stroke bg-surface px-3.5 py-2 text-text"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                    />
                    {target}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delayMs={100}>
            <div className="glass-strong grain rounded-app-radius p-4 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-stroke pb-4">
                <p className="f1-m text-text-light">
                  socialchef-orders-30d.csv
                </p>
                <span className="f1-m flex items-center gap-1.5 rounded-chip-radius bg-label-confirmed-bg px-2.5 py-1 text-label-confirmed">
                  <IosShareOutlined sx={{ fontSize: 14 }} />
                  {byoaiCopy.export_label}
                </span>
              </div>
              <div className="mt-5 flex justify-end">
                <p className="b1-r max-w-[85%] rounded-app-radius rounded-br-md bg-primary px-4 py-3 text-on-primary">
                  {byoaiCopy.question}
                </p>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="f1-b flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stroke bg-background text-primary">
                  AI
                </span>
                <div className="max-w-[90%] rounded-app-radius rounded-tl-md border border-stroke bg-background px-4 py-3">
                  <p className="b1-r text-text">{byoaiCopy.answer}</p>
                  <p className="f1-r mt-3 text-text-light">
                    Based on 142 recorded orders · 30 days · 3 pages
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </AppContainer>
    </section>
  );
}
