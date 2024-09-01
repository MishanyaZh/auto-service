import ContactItems from './common/ContactItems';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-900 text-center custom-shadow">
      <p className="text-white text-shadow-indigo mb-1">
        Vimar Auto Serwis - Najlepsze usługi serwisowe
      </p>
      <div className="flex flex-row justify-center gap-2 text-white">
        <ContactItems footer />
      </div>
    </footer>
  );
};

export default Footer;
