import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import '@/theme/theme.css';
import Providers from './Provider';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SocialChef — Turn your DMs into data',
  description:
    'SocialChef connects your Instagram, Facebook, TikTok and WhatsApp pages, catches every order and enquiry in the comments and DMs, and shows you what sells, when, and to whom.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
