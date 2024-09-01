'use client';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '@/app/loading';
import { googleMapUrl } from '@/app/constants';
import ContactItems from './common/ContactItems';

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
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-shadow-indigo">
        Kontakt
      </h2>

      <ContactItems />

      <div className="mt-4">
        <h3 className="text-xl mb-2 text-shadow-indigo">
          Znajdź nas na mapie:
        </h3>
        {!isLoaded && (
          <div className="flex justify-center items-center">
            <Loading />
          </div>
        )}
        <iframe
          src={googleMapUrl}
          width="100%"
          height="300px"
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
