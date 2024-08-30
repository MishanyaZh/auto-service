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
    <div className="icon-box">
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
