'use client';

import { useSearchParams } from 'next/navigation';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import { NAV_TABS } from '@/app/constants';

const Content = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  const getContent = (section: string | null) => {
    switch (section) {
      case NAV_TABS.SERVICES:
        return <Services />;
      case NAV_TABS.GALLERY:
        return <Gallery />;
      case NAV_TABS.CONTACT:
        return <Contact />;
      default:
        return <Services />;
    }
  };

  return <>{getContent(section)}</>;
};

export default Content;
