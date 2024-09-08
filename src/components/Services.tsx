import React from 'react';

const services = [
  'Wymiana oleju',
  'Diagnostyka silnika',
  'Naprawa/wymiana silnika',
  'Wymiana paska rozrządu',
  'Diagnostyka zawieszenia',
  'Naprawa zawieszenia',
  'Diagnostyka komputerowa',
];

const Services = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-shadow-indigo">
        Nasze usługi
      </h2>
      <ul className="list-disc list-inside space-y-3 text-shadow-indigo">
        {services.map((service, index) => (
          <li
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 200}ms` }}
          >
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
