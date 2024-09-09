import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from './Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vimar Auto Serwis',
  description: 'Vimar Auto Serwis - Najlepsze usługi serwisowe',
  keywords:
    'автосервіс Gorzow, ремонт авто, Vimar Auto Serwis, serwis samochodowy Gorzów, naprawa samochodów, diagnostyka samochodowa, wymiana opon, mechanik Gorzów, usługi serwisowe, warsztat samochodowy, przegląd samochodu, naprawa silnika',
  authors: [
    { name: 'Vimar Auto Serwis', url: 'https://auto-service-vm.vercel.app/' },
  ],
  verification: {
    google: 'Xguf42HzpzRwMV78oalrJxBd8hdv5xYQhy11jG4CLWc',
  },
  metadataBase: new URL('https://auto-service-vm.vercel.app/'),
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pl" suppressHydrationWarning className="h-full">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <Header />
          <Navbar />
          <main className="flex-grow backgroundContainer">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
