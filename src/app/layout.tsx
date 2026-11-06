import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  Space_Grotesk,
  Inter,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
} from 'next/font/google';
import './globals.css';
const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});
const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
  variable: '--font-arabic',
  display: 'swap',
  preload: false,
});
export const metadata: Metadata = {
  ...(process.env.SITE_URL
    ? {
        metadataBase: new URL(process.env.SITE_URL),
        alternates: { canonical: '/' },
      }
    : {}),
  title: 'KAIROS | Interface Tech — From Design to Experience',
  description:
    'Every great idea has its moment. Chadi, the independent frontend developer behind KAIROS, turns Figma and Adobe XD designs into responsive, interactive websites.',
  applicationName: 'KAIROS | Interface Tech',
  authors: [{ name: 'Chadi' }],
  openGraph: {
    title: 'KAIROS | Interface Tech',
    description: 'Every great idea has its moment. From Design to Experience.',
    siteName: 'KAIROS | Interface Tech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAIROS | Interface Tech',
    description: 'Every great idea has its moment.',
  },
  robots: { index: false, follow: false },
  icons: {
    icon: [
      {
        url: '/brand/derived/kairos-favicon-v3.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
      {
        url: '/brand/derived/kairos-favicon-v3-32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/brand/derived/kairos-favicon-v3-16.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    apple: [
      { url: '/brand/derived/kairos-favicon-v3-180.png', sizes: '180x180' },
    ],
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${mono.variable} ${arabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
