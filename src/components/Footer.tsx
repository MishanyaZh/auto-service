import ContactItems from './common/ContactItems';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-900 text-center custom-shadow">
      <div className="flex flex-row justify-center gap-4 text-white">
        <ContactItems footer />
      </div>
      <p className="text-white text-shadow-indigo mt-3">
        Vimar Auto Serwis - Najlepsze usługi serwisowe
      </p>
    </footer>
  );
};

export default Footer;
