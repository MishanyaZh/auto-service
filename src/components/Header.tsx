'use client';

import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <header className="flex justify-center items-center p-4">
      <h1 className="text-3xl font-bold mr-1 flex flex-grow text-shadow-indigo">
        Vimar Auto Serwis
      </h1>
      <DarkModeSwitch />
    </header>
  );
};

export default Header;
