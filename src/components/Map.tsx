'use client';

import React, { useEffect, useState } from 'react';
import { googleMapUrl } from '@/app/constants';
import Loading from '@/app/loading';

const Map = () => {
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
    <>
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
    </>
  );
};

export default Map;
