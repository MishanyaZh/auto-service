import React from 'react';

const Services = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Nasze usługi</h2>
      <ul className="list-disc list-inside space-y-2 text-shadow-indigo">
        <li>Wymiana oleju</li>
        <li>Diagnostyka silnika</li>
        <li>Naprawa/wymiana silnika</li>
        <li>Wymiana paska rozrządu</li>
        <li>Diagnostyka zawieszenia</li>
        <li>Naprawa zawieszenia</li>
        <li>Diagnostyka komputerowa</li>
      </ul>
    </section>
  );
};

export default Services;
