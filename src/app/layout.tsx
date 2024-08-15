import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';

export const metadata = {
  title: 'Auto Service',
  description: 'Auto Service Station - Najlepsze usługi serwisowe',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pl" className="h-full">
      <body className="h-full flex flex-col bg-gradient-to-r from-gray-800 to-black text-white">
        <Header />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
