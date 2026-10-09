import ArrowForward from '@mui/icons-material/ArrowForward';
import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import { ROUTES } from '@/constant/routes.constant';

const commands = [
  { prompt: '$', text: 'pnpm dev' },
  { prompt: '✓', text: 'Ready on http://localhost:3000' },
];

export default function Hero() {
  return (
    <AppContainer>
      <section className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="b2-m inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Scaffold created successfully
          </span>

          <h1 className="h1-b mt-6 text-text">
            Your app is ready. Start building features.
          </h1>
          <p className="b1-r mt-6 max-w-xl text-text-light">
            Routing, authentication, theming and the msflib modules are already
            wired. Create an account to try the auth flow, or log in if you
            already have one.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AppButton
              size="large"
              href={ROUTES.register}
              endIcon={<ArrowForward />}
            >
              Create an account
            </AppButton>
            <AppButton size="large" variant="outlined" href={ROUTES.login}>
              Log in
            </AppButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-app-radius bg-neutral shadow-lg">
          <div className="flex items-center gap-2 border-b border-on-primary/10 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-error" />
            <span className="h-3 w-3 rounded-full bg-secondary" />
            <span className="h-3 w-3 rounded-full bg-success" />
            <span className="f1-m ml-2 text-on-primary/60">my-app</span>
          </div>
          <div className="space-y-2 p-6 font-mono text-sm">
            {commands.map(({ prompt, text }) => (
              <p key={text} className="text-on-primary/90">
                <span className="mr-3 text-success">{prompt}</span>
                {text}
              </p>
            ))}
            <p className="pt-4 text-on-primary/50">
              Next: read docs/IMPLEMENTATION_GUIDE.md
            </p>
          </div>
        </div>
      </section>
    </AppContainer>
  );
}
