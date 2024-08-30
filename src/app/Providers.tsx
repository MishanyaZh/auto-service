'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type Props = { children: ReactNode };

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="h-full min-h-screen flex flex-col text-gray-800 bg-gradient-radial from-slate-300 via-slate-400 to-slate-500 dark:bg-gradient-radial dark:from-gray-800 dark:to-black dark:text-white">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
