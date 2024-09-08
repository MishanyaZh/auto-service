import React from 'react';
import IconBox from './IconBox';
import { FaFacebook, FaMapMarkedAlt, FaPhoneSquareAlt } from 'react-icons/fa';

type Props = {
  footer?: boolean;
};

const ContactItems = ({ footer }: Props) => {
  return (
    <>
      <a
        href="tel:+48123456789"
        className="flex flex-row items-center align-baseline gap-4 text-shadow-indigo"
      >
        <IconBox>
          <FaPhoneSquareAlt className="text-2xl" />
        </IconBox>
        {!footer && <span>+48 782 362 122</span>}
      </a>

      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=61560001088461"
        className="flex flex-row items-center align-baseline gap-4 text-shadow-indigo"
      >
        <IconBox>
          <FaFacebook className="text-2xl hover:text-orange-500" />
        </IconBox>
        {!footer && <span>Vimar AutoSerwis</span>}
      </a>

      <a
        target="_blank"
        href="https://maps.app.goo.gl/BXTTWio5pG3V8VT39"
        className="flex flex-row items-center align-baseline gap-4 text-shadow-indigo"
      >
        <IconBox>
          <FaMapMarkedAlt className="text-2xl hover:text-orange-500" />
        </IconBox>
        {!footer && <span>Franciszka Walczaka 106, Gorzów Wielkopolski</span>}
      </a>
    </>
  );
};

export default ContactItems;
