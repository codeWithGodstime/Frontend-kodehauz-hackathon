import ArrowForward from '@mui/icons-material/ArrowForward';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';
import {
  categoryClassName,
  orderSheetFields,
  previewMessages,
} from '../data/data';

export default function Hero() {
  return (
    <AppContainer>
      <section className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="b2-m inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Made for vendors who sell on WhatsApp and Instagram
          </span>

          <h1 className="h1-b mt-6 text-text">
            Turn DM chaos into kitchen-ready orders
          </h1>
          <p className="b1-r mt-6 max-w-xl text-text-light">
            Socialchef connects your WhatsApp and Instagram DMs and sorts every
            message into orders, enquiries, and spam. Names, addresses, and item
            lists land on one dashboard, so you get hours back every day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AppButton
              size="large"
              href={ROUTES.register}
              endIcon={<ArrowForward />}
            >
              Start sorting your orders free
            </AppButton>
            <AppButton size="large" variant="outlined" href="#how-it-works">
              See how it works
            </AppButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-app-radius border border-stroke bg-surface">
          <div className="flex items-center justify-between border-b border-stroke px-5 py-4">
            <p className="b2-b text-text">Today&apos;s inbox</p>
            <p className="f1-m text-text-light">WhatsApp · Instagram</p>
          </div>
          <ul className="divide-y divide-stroke">
            {previewMessages.map((message) => (
              <li
                key={message.sender_name}
                className="flex items-start justify-between gap-3 px-5 py-4"
              >
                <div>
                  <p className="b2-b text-text">{message.sender_name}</p>
                  <p className="b2-r mt-1 text-text-light">{message.preview}</p>
                </div>
                <span
                  className={`f1-m shrink-0 rounded-full px-2.5 py-1 ${categoryClassName[message.category]}`}
                >
                  {message.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-stroke bg-primary-light px-5 py-4">
            <p className="f1-m text-primary">Order sheet · Adaeze</p>
            <dl className="mt-3 grid grid-cols-2 gap-3">
              {orderSheetFields.map((field) => (
                <div key={field.label}>
                  <dt className="f1-m text-text-light">{field.label}</dt>
                  <dd className="b2-m mt-0.5 text-text">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </AppContainer>
  );
}
