import AppContainer from '@/components/AppContainer';
import {
  insightsCopy,
  openEnquiries,
  peakHours,
  repeatCustomers,
  repeatRate,
  topItems,
} from '../data/data';
import InsightBarList from './InsightBarList';
import InsightHourChart from './InsightHourChart';
import InsightOpenEnquiries from './InsightOpenEnquiries';
import InsightPanel from './InsightPanel';
import InsightRepeatRing from './InsightRepeatRing';
import ParallaxGlow from './ParallaxGlow';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const PERIOD_OPTIONS = ['Today', '7 days', '30 days'];

export default function InsightsShowcase() {
  return (
    <section
      id="insights"
      className="relative scroll-mt-24 overflow-hidden border-y border-stroke bg-surface/60 py-20 md:py-28"
    >
      <ParallaxGlow
        tone="gold"
        className="right-[-12rem] top-10 h-[28rem] w-[28rem] opacity-40"
        distance={60}
      />
      <AppContainer>
        <SectionHeading
          eyebrow={insightsCopy.eyebrow}
          headline={insightsCopy.headline}
          body={insightsCopy.body}
          align="center"
        />

        <Reveal className="relative mt-14" delayMs={80}>
          <div className="glass-strong grain rounded-app-radius p-3 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-3 pt-1">
              <div>
                <p className="f1-m text-text-light">Insights</p>
                <p className="b2-m text-text">{insightsCopy.period_label}</p>
              </div>
              <div
                className="flex gap-1 rounded-chip-radius border border-stroke p-1"
                aria-hidden
              >
                {PERIOD_OPTIONS.map((option, index) => (
                  <span
                    key={option}
                    className={`f1-m rounded-chip-radius px-3 py-1 ${
                      index === PERIOD_OPTIONS.length - 1
                        ? 'bg-primary text-on-primary'
                        : 'text-text-light'
                    }`}
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <InsightPanel
                title="Top items"
                detail="Ordered most in this period"
              >
                <InsightBarList items={topItems} />
              </InsightPanel>
              <InsightPanel title="Peak order hours" detail="When orders land">
                <InsightHourChart buckets={peakHours} />
              </InsightPanel>
              <InsightPanel
                title="Repeat customers"
                detail="Who keeps coming back"
              >
                <InsightRepeatRing
                  percent={repeatRate.value}
                  label={repeatRate.label}
                  customers={repeatCustomers}
                />
              </InsightPanel>
              <InsightPanel
                title="Unanswered enquiries"
                detail="Questions still waiting for a reply"
              >
                <InsightOpenEnquiries enquiries={openEnquiries} />
              </InsightPanel>
            </div>
          </div>
        </Reveal>
      </AppContainer>
    </section>
  );
}
