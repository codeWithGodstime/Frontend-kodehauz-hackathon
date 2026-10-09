import ArrowForward from '@mui/icons-material/ArrowForward';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';

export default function FinalCta() {
  return (
    <section className="bg-neutral">
      <AppContainer>
        <div className="py-16 text-center md:py-20">
          <h2 className="h2-b text-on-primary">
            The lunch rush is coming. Your inbox does not have to be.
          </h2>
          <p className="b1-r mx-auto mt-4 max-w-xl text-on-primary/80">
            Connect WhatsApp or Instagram, let Socialchef sort the DMs, and give
            the kitchen a list it can actually cook from.
          </p>
          <div className="mt-8 flex justify-center">
            <AppButton
              size="large"
              color="secondary"
              href={ROUTES.register}
              endIcon={<ArrowForward />}
            >
              Start sorting your orders free
            </AppButton>
          </div>
        </div>
      </AppContainer>
    </section>
  );
}
