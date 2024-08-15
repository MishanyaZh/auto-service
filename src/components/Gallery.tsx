import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Galeria</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative w-full h-72">
          <Image
            src="/images/photo_1.jpg"
            alt="photo1"
            layout="fill"
            objectFit="cover"
            className="sm:rounded-md group-hover:opacity-75 transition-opacity duration-300"
            priority={true}
          />
        </div>
        <div className="relative w-full h-72">
          <Image
            src="/images/photo_2.jpg"
            alt="photo2"
            layout="fill"
            objectFit="cover"
            className="sm:rounded-md group-hover:opacity-75 transition-opacity duration-300"
            priority={true}
          />
        </div>
        <div className="relative w-full h-72">
          <Image
            src="/images/photo_3.jpg"
            alt="photo3"
            layout="fill"
            objectFit="cover"
            className="sm:rounded-md group-hover:opacity-75 transition-opacity duration-300"
            priority={true}
          />
        </div>
        <div className="relative w-full h-72">
          <Image
            src="/images/photo_4.jpg"
            alt="photo4"
            layout="fill"
            objectFit="cover"
            className="sm:rounded-md group-hover:opacity-75 transition-opacity duration-300"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
