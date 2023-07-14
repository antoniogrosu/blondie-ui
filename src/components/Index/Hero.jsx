function Hero() {
  return (
    <div className="flex items-center md:pb-24 pb-16 justify-between">
      <div className="4/12">
        <h1 className="montserrat text-4xl text-gray-950 font-semibold md:w-8/12">
          Copiii grav bolnavi nu au timp.
        </h1>
        <div className="md:hidden my-8">
          <img
            src="/heroImg.svg"
            alt="Ilustratie in forma de inima"
            className="object-fit"
          />
        </div>
        <p className="poppins text-gray-950 mt-8 md:w-8/12">
          De aceea, noi la Asociația Blondie, ridicam un avion care sa îi ducă
          în siguranță la spitalul unde viața le poate fi salvata. Pentru că așa
          este normal.
        </p>
        <button className="hidden md:inline-block transition montserrat text-lg font-semibold mt-8 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-pink-50 rounded-full">
          <img
            src="/plane.svg"
            alt="plane illustration"
            className="mr-4 inline-block w-2/12"
          />
          Implica-te
        </button>
        <button className="hidden md:inline-block transition hover:bg-pink-500/10 poppins mt-8 px-4 py-2 bg-transparent text-pink-500 border-2 border-pink-500 ml-8 rounded-full">
          Despre noi{" "}
        </button>
        <div className="w-full flex items-center justify-between md:hidden">
          <button className="transition montserrat text-lg font-semibold mt-8 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-pink-50 rounded-full w-full">
            <img
              src="/plane.svg"
              alt="plane illustration"
              className="mr-4 inline-block w-2/12"
            />
            Implica-te
          </button>
          <button className="transition hover:bg-pink-500/10 poppins mt-8 px-4 py-2 bg-transparent text-pink-500 border-2 border-pink-500 ml-8 rounded-full w-full">
            Despre noi{" "}
          </button>
        </div>
      </div>
      <div className="md:4/12 md:block hidden">
        <img
          src="/heroImg.svg"
          alt="Ilustratie in forma de inima"
          className="object-fit"
        />
      </div>
    </div>
  );
}
export default Hero;
