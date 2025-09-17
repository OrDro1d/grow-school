import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import '@app/globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

const fontInter = Inter({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Grow School',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={fontInter.className}>
        {children}
        <SpeedInsights></SpeedInsights>
        <Analytics></Analytics>
      </body>
    </html>
  );
}
