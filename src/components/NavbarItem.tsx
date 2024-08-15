'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = { title: string; param: string };

const NavbarItem = ({ title, param }: Props) => {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  return (
    <Link
      className={`hover:text-lime-950 font-semibold
        ${section === param ? 'text-lime-950 font-semibold' : ''}`}
      href={`/?section=${param}`}
    >
      {title}
    </Link>
  );
};

export default NavbarItem;
