'use client';

import React, { Suspense } from 'react';
import NavbarItem from '@/components/NavbarItem';
import Loading from '@/app/loading';
import { NAV_TABS } from '@/app/constants';

const Navbar = () => {
  const items = [
    { id: 1, title: 'Usługi', param: NAV_TABS.SERVICES },
    { id: 2, title: 'Galeria', param: NAV_TABS.GALLERY },
    { id: 3, title: 'Kontakt', param: NAV_TABS.CONTACT },
  ];
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex bg-gradient-to-r from-gray-300 to-gray-600 p-4 justify-center gap-6 ">
        {items.map(({ title, param, id }) => (
          <NavbarItem key={id} title={title} param={param} />
        ))}
      </div>
    </Suspense>
  );
};

export default Navbar;
