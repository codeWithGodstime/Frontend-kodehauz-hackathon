'use client';

import {
  AppSkeleton,
  SkeletonLayoutProps,
} from '@msflib/react-components/skeleton';

export default function PricingCardLayout({ className }: SkeletonLayoutProps) {
  return (
    <AppSkeleton
      className={`flex w-full max-w-sm flex-col gap-4 rounded-app-radius border border-stroke bg-surface p-6 ${className ?? ''}`}
    >
      <AppSkeleton.Text width="55%" height={24} />
      <AppSkeleton.Text width="70%" height={40} />
      <AppSkeleton.Text width="100%" height={16} lines={3} />
      <AppSkeleton.Button width="100%" height={40} />
    </AppSkeleton>
  );
}
