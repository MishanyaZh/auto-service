import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Kontakt</h2>
      <p>Telefon: <a href="tel:+48123456789" className="text-blue-400">+48 123 456 789</a></p>
      <p>Email: <a href="mailto:info@autoservice.pl" className="text-blue-400">info@autoservice.pl</a></p>
      <p >Adres: Warszawa, ul. Przykładowa 12</p>
      <div className="mt-4">
        <h3 className="text-xl mb-2">Znajdź nas na mapie:</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.160769297944!2d21.017532615739762!3d52.23704997975854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd9e54fca4d9%3A0x4242dfd6c5e6a5c1!2sWarszawa!5e0!3m2!1spl!2spl!4v1637314859457!5m2!1spl!2spl"
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
