import React from 'react';
import Image from 'next/image';
import { spinnerUrl } from '@/app/constants';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/photo_1.jpg' },
    { id: 2, src: '/images/photo_2.jpg' },
    { id: 3, src: '/images/photo_3.jpg' },
    { id: 4, src: '/images/photo_4.jpg' },
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-shadow-indigo">
        Galeria
      </h2>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map(({ id, src }) => (
          <div
            key={id}
            className="relative h-96 max-w-64 flex justify-center rounded-md p-2 custom-shadow"
          >
            <Image
              src={src}
              alt="photo"
              height={200}
              width={200}
              className="rounded-md w-auto h-auto"
              priority={true}
              placeholder="blur"
              blurDataURL={spinnerUrl}
              layout=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
