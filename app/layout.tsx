import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import '@/theme/theme.css';
import Providers from './Provider';

export const metadata: Metadata = {
  title: 'Socialchef',
  description:
    'Socialchef sorts WhatsApp and Instagram DMs into orders, enquiries, and spam for food vendors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
