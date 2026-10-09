interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral">
      <div className="absolute -left-24 -top-24 h-72 w-72 animate-pulse rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 animate-pulse rounded-full bg-secondary/15 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-app-radius glass-strong md:grid-cols-2">
          <div className="hidden flex-col justify-between p-10 text-text md:flex">
            <div>
              <span className="b2-m mb-6 inline-flex rounded-full border border-stroke bg-primary-light px-4 py-1 text-primary">
                Secure access
              </span>
              <h1 className="d2-m max-w-md">
                A better way to access your workspace
              </h1>
              <p className="b1-r mt-4 max-w-md text-text-light">
                Manage your account, stay productive, and continue where you
                left off.
              </p>
            </div>

            <div className="b2-r flex items-center gap-3 text-text-light">
              <span className="h-2 w-2 rounded-full bg-success" />
              Trusted and secure authentication flow
            </div>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 md:p-10">
            <div className="w-full max-w-md panel p-6 sm:p-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
