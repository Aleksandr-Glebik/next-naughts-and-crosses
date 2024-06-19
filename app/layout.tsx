import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.scss';

const OpenSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Naughts and crosses',
  description: 'Game Naughts and crosses (React, Next, TypeScript, SCSS)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
