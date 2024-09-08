import React from 'react';
import ContactItems from './common/ContactItems';
import Map from './Map';

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col p-4 gap-3">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-shadow-indigo">
        Kontakt
      </h2>
      <ContactItems />
      <Map />
    </section>
  );
};

export default Contact;
