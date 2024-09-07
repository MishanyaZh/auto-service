import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from './Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vimar Auto Serwis',
  description: 'Vimar Auto Serwis - Najlepsze usługi serwisowe',
  keywords:
    'автосервіс Gorzow, ремонт авто, Vimar Auto Serwis, serwis samochodowy Gorzów, naprawa samochodów, diagnostyka samochodowa, wymiana opon, mechanik Gorzów, usługi serwisowe, warsztat samochodowy, przegląd samochodu, naprawa silnika',
  authors: [
    { name: 'Vimar Auto Serwis', url: 'https://auto-service-vm.vercel.app/' },
  ],
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pl" suppressHydrationWarning className="h-full">
      <Head>
        {/* Google site verification meta tag */}
        <meta
          name="google-site-verification"
          content="Xguf42HzpzRwMV78oalrJxBd8hdv5xYQhy11jG4CLWc"
        />
      </Head>
      <body className="">
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
