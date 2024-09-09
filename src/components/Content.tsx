import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import { NAV_TABS } from '@/app/constants';

const Content = ({ searchParams }: { searchParams: { section?: string } }) => {
  const section = searchParams.section || null;

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
