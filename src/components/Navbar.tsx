'use client';

import React, { Suspense } from 'react';
import NavbarItem from '@/components/NavbarItem';

const Navbar = () => {
  return (
    <Suspense fallback="Loading...">
      <div className="flex bg-gradient-to-r from-gray-300 to-gray-600 p-4 justify-center gap-6 ">
        <NavbarItem title="Usługi" param="services" />
        <NavbarItem title="Galeria" param="gallery" />
        <NavbarItem title="Kontakt" param="contact" />
      </div>
    </Suspense>
  );
};

export default Navbar;
