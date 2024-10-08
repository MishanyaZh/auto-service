'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import IconBox from './common/IconBox';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';

type Props = {};

const DarkModeSwitch = (props: Props) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        currentTheme === 'dark' ? (
          <IconBox animation onClick={() => setTheme('light')}>
            <MdLightMode className="text-2xl" />
          </IconBox>
        ) : (
          <IconBox animation onClick={() => setTheme('dark')}>
            <MdDarkMode className="text-2xl" />
          </IconBox>
        )
      ) : (
        <IconBox bg>
          <Loading height={24} width={24} center />
        </IconBox>
      )}
    </>
  );
};

export default DarkModeSwitch;
