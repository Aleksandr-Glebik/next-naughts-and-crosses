import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import clsx from "clsx";

import "./globals.scss";

import { Header } from "@/components/Header";

const OpenSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Tic-Tak-Toe Online",
  description: "Game Tic-Tak-Toe Online (Next, TypeScript, Tailwind)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(OpenSans.className, "min-h-screen bg-slate=200")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
