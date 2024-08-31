'use client';

import Image from 'next/image';
import DarkModeSwitch from './DarkModeSwitch';
import IconBox from './common/IconBox';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <IconBox animation>
        <Image
          src="/images/logo.png"
          alt="photo"
          height={30}
          width={30}
          className="rounded-md w-auto h-auto"
          priority={true}
          layout=""
        />
      </IconBox>
      <h1 className="text-3xl font-bold ml-1 mr-1 flex text-shadow-indigo header-gradient">
        Vimar Auto Serwis
      </h1>
      <IconBox bg animation>
        <DarkModeSwitch />
      </IconBox>
    </header>
  );
};

export default Header;
