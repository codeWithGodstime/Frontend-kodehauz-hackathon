import Link from 'next/link';
import GoogleAuthButton from '@/dynamics/GoogleAuthButton';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => (
  <div className="mb-8 text-center">
    <h2 className="h3-b text-text">{title}</h2>
    <p className="b2-r mt-2 text-text-light">{subtitle}</p>
  </div>
);

interface AuthOptionProps {
  title: string;
  linkText: string;
  linkHref: string;
}

export const AuthOption = ({ title, linkText, linkHref }: AuthOptionProps) => (
  <p className="b2-r mt-4 text-center text-text">
    {title}{' '}
    <Link href={linkHref} className="b2-m text-primary hover:underline">
      {linkText}
    </Link>
  </p>
);

export const GoogleLoginButton = () => (
  <div className="mt-3">
    <GoogleAuthButton
      apiBaseUrl={process.env.NEXT_PUBLIC_API_URL ?? ''}
      label="Continue with Google"
      variant="outlined"
      fullWidth
      sx={{ borderRadius: 'var(--button-radius)', textTransform: 'none' }}
    />
  </div>
);
