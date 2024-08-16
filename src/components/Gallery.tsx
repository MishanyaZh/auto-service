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
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Galeria</h2>
      <div className="grid grid-cols-2 gap-4 items-center md:grid-cols-4">
        {images.map(({ id, src }) => (
          <div key={id} className="relative h-72 flex justify-center">
            <Image
              src={src}
              alt="photo1"
              height={200}
              width={200}
              objectFit="cover"
              className="rounded-md group-hover:opacity-75 transition-opacity duration-300"
              priority={true}
              placeholder="blur"
              blurDataURL={spinnerUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
