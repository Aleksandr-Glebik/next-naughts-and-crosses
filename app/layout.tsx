import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.scss';

const OpenSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Tic-Tak-Toe Online',
  description: 'Game Tic-Tak-Toe Online (Next, TypeScript, Tailwind)',
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
