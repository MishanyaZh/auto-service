'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {};

const DarkModeSwitch = (props: Props) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div className="cursor-pointer p-1 rounded-md border border-gray-800 hover:border-orange-500 hover:text-amber-500 shadow-lg shadow-indigo-500/50">
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode onClick={() => setTheme('light')} className="text-xl" />
        ) : (
          <MdDarkMode onClick={() => setTheme('dark')} className="text-xl" />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
