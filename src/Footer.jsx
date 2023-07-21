function Footer({ onChange }) {
  const clickHandler = (number) => {
    onChange(number);
  };

  return (
    <footer className="cursor-pointer p-8 lg:p-24 flex lg:flex-row flex-col lg:items-center justify-between bg-pink-300">
      <div className="lg:w-1/12   ">
        <img src="/Logo.svg" alt="Logo Blondie" className="object-cover" />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-8 mt-12">
        <div className="flex flex-col lg:items-center items-left">
          <h3 className="text-gray-950 font-bold tracking-widest text-2xl  montserrat ">
            Info
          </h3>
          <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                clickHandler(1);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Despre
            </p>
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                clickHandler(3);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </p>
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                clickHandler(4);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Doneaza
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:items-center items-left">
          <h3 className="text-gray-950 font-bold tracking-widest text-xl uppercase montserrat">
            Proiecte
          </h3>
          <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                clickHandler(2);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              #șieusuntBlondie
            </p>
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                clickHandler(2);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Căsuța Blondie
            </p>
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                clickHandler(2);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Caravana Blondie
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:items-center items-left">
          <h3 className="text-gray-950 font-bold tracking-widest text-xl uppercase montserrat">
            Socials
          </h3>
          <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
            <p className="transition hover:underline hover:text-pink-500">
              Instagram
            </p>
            <p className="transition hover:underline hover:text-pink-500">
              Facebook
            </p>
            <p className="transition hover:underline hover:text-pink-500">
              Youtube
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
