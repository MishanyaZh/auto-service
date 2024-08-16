'use client';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '@/app/loading';
import { googleMapUrl } from '@/app/constants';
import { FaFacebook } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);

      return () => {
        setIsLoaded(false);
      };
    }, 2000);
  }, []);

  return (
    <section id="contact" className="flex flex-col p-4 gap-2">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Kontakt</h2>

      <p className="flex flex-row align-baseline gap-2">
        <FaPhoneSquareAlt className="text-2xl" />
        <a href="tel:+48123456789" className="text-blue-400">
          +48 782 362 122
        </a>
      </p>

      <p className="flex flex-row align-baseline gap-2">
        <FaFacebook className="text-2xl" />
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61560001088461"
          className="text-blue-400"
        >
          Vimar AutoSerwis
        </a>
      </p>

      <p className="flex flex-row align-baseline gap-2">
        <FaMapMarkedAlt className="text-2xl" />
        <a
          target="_blank"
          href="https://maps.app.goo.gl/BXTTWio5pG3V8VT39"
          className="text-blue-400"
        >
          Franciszka Walczaka 106, Gorzów Wielkopolski
        </a>
      </p>

      <div className="mt-4">
        <h3 className="text-xl mb-2">Znajdź nas na mapie:</h3>
        {!isLoaded && (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        )}
        <iframe
          src={googleMapUrl}
          width="100%"
          height="300"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
          style={isLoaded ? {} : { display: 'none' }}
        />
      </div>
    </section>
  );
};

export default Contact;
