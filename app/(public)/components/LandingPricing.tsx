import Check from '@mui/icons-material/Check';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { landingPlans } from '../data/data';

export default function LandingPricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-16 md:py-20">
      <AppContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className="b2-m text-primary">Pricing</p>
          <h2 className="h3-b mt-2 text-text">
            Start free. Upgrade when the lunch rush gets bigger.
          </h2>
          <p className="b1-r mt-4 text-text-light">
            Solo vendors get core AI filtering at $0 a month. Growing kitchens
            move to the monthly plan for a bigger team and faster processing.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {landingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`flex w-full max-w-sm flex-col rounded-app-radius border bg-surface p-6 ${
                plan.highlighted ? 'border-primary' : 'border-stroke'
              }`}
            >
              <h3 className="h5-b text-text">{plan.name}</h3>
              <p className="b2-r mt-1 text-text-light">{plan.audience}</p>
              <p className="mt-4 text-text">
                <span className="h3-b">{plan.price}</span>
                <span className="b2-r text-text-light">{plan.cadence}</span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="b2-r flex items-start gap-2 text-text"
                  >
                    <Check className="text-primary" fontSize="small" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <AppButton
                  fullWidth
                  href={plan.href}
                  variant={plan.highlighted ? 'contained' : 'outlined'}
                >
                  {plan.cta}
                </AppButton>
              </div>
            </article>
          ))}
        </div>
      </AppContainer>
    </section>
  );
}
