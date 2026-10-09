import Link from 'next/link';
import { ROUTES } from '@/constant/routes.constant';

interface AppWordmarkProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function AppWordmark({
  href = ROUTES.home,
  onClick,
  className = '',
}: AppWordmarkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="SocialChef home"
      className={`d4-m inline-flex items-center gap-1.5 text-text ${className}`}
    >
      SocialChef
      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
    </Link>
  );
}
