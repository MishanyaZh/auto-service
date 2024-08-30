import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from './Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vimar Auto Serwis',
  description: 'Vimar Auto Serwis - Najlepsze usługi serwisowe',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pl" suppressHydrationWarning className="h-full">
      <body className="h-full flex flex-col">
        <Providers>
          <Header />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
