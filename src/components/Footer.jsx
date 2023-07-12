function Footer() {
  return (
    <footer className="p-8 md:p-24 flex md:flex-row flex-col items-center justify-between bg-pink-300">
      <div className="md:w-2/12">
        <img
          src="/Logo.svg"
          alt="Logo Blondie"
          className="w-full object-cover"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-8 mt-12">
        <div className="flex flex-col md:items-center items-left">
          <h3 className="text-gray-50/50 tracking-widest text-xl uppercase montserrat">
            Info
          </h3>
          <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
            <p>Despre</p>
            <p>Echipa</p>
            <p>Sponsori</p>
          </div>
        </div>
        <div className="flex flex-col md:items-center items-left">
          <h3 className="text-gray-50/50 tracking-widest text-xl uppercase montserrat">
            Proiecte
          </h3>
          <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
            <p>#șieusuntBlondie</p>
            <p>Căsuța Blondie</p>
            <p>Caravana Blondie</p>
          </div>
        </div>
        <div className="flex flex-col md:items-center items-left">
          <h3 className="text-gray-50/50 tracking-widest text-xl uppercase montserrat">
            Socials
          </h3>
          <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
