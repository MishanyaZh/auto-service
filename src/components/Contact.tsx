import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Kontakt</h2>
      <p>
        Telefon:{' '}
        <a href="tel:+48123456789" className="text-blue-400">
          +48 782 362 122
        </a>
      </p>
      <p>
        Facebook:{' '}
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61560001088461"
          className="text-blue-400"
        >
          Vimar AutoSerwis
        </a>
      </p>
      <p>
        Adres:{' '}
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.173055600901!2d15.271053993591984!3d52.76515250025672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470721b07af50447%3A0xcac2a40e2b68d527!2sVimar%20Auto%20Serwis!5e0!3m2!1suk!2spl!4v1723734041558!5m2!1suk!2spl"
          width="100%"
          height="300"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
        />
      </div>
    </section>
  );
};

export default Contact;
