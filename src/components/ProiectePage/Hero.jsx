import Lottie from "lottie-react";
import animationData from "./scroll.json";
function Hero() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="md:w-5/12">
          <h1 className="monteserrat text-gray-950 font-semibold text-4xl">
            Proiectele noastre
          </h1>
          <div className="md:hidden mt-8 grid grid-cols-2 gap-4">
            <img
              src="/miniCaravana.svg"
              className="border-2 border-pink-500 rounded-3xl"
            />
            <img
              src="/miniCasuta.svg"
              className="border-2 border-pink-500 rounded-3xl"
            />
            <img
              src="/miniEchipa.svg"
              className="border-2 border-pink-500 rounded-3xl"
            />
            <img
              src="/miniSalveaza.svg"
              className="border-2 border-pink-500 rounded-3xl"
            />
          </div>
          <p className="poppins text-gray-950 text-md mt-8 hidden md:block">
            Asociația Blondie s-a născut pentru a oferi copiilor bolnavi și
            singuri șansa la o dezvoltare maximă din punct de vedere fizic,
            emoțional și intelectual.
          </p>
        </div>
        <div className="hidden w-4/12 md:grid grid-cols-2 gap-8">
          <img
            src="/miniCaravana.svg"
            className="border-2 border-pink-500 rounded-3xl hover:scale-105 ease-in-out duration-300"
          />
          <img
            src="/miniCasuta.svg"
            className="border-2 border-pink-500 rounded-3xl hover:scale-105 ease-in-out duration-300"
          />
          <img
            src="/miniEchipa.svg"
            className="border-2 border-pink-500 rounded-3xl hover:scale-105 ease-in-out duration-300"
          />
          <img
            src="/miniSalveaza.svg"
            className="border-2 border-pink-500 rounded-3xl hover:scale-105 ease-in-out duration-300"
          />
        </div>
      </div>
      <p className="poppins text-gray-950 text-md mt-8 md:hidden block">
        Asociația Blondie s-a născut pentru a oferi copiilor bolnavi și singuri
        șansa la o dezvoltare maximă din punct de vedere fizic, emoțional și
        intelectual.
      </p>
      <div className="md:mx-auto md:w-4/12">
        <div className="w-2/12 md:w-1/12 mx-auto mt-4">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </>
  );
}
export default Hero;
