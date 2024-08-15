import React from "react";

const Gallery = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Galeria</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Зображення замість цієї комірки */}
        <div className="h-40 bg-gray-400">Zdjęcie 1</div>
        <div className="h-40 bg-gray-400">Zdjęcie 2</div>
        <div className="h-40 bg-gray-400">Zdjęcie 3</div>
        <div className="h-40 bg-gray-400">Zdjęcie 4</div>
      </div>
    </section>
  );
};

export default Gallery;
