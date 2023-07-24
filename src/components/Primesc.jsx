import Lottie from "lottie-react";
import animationData from "./ajutor.json";
function Primesc({ onChange }) {
  const clickHandler = (number) => {
    onChange(number);
  };
  return (
    <div className="md:flex-row flex-col bg-pink-50 px-8 py-36 md:px-24 flex items-start justify-between">
      <div className="md:w-5/12 w-full">
        <h1 className="text-center mb-12 md:mb-0 md:text-left montserrat font-semibold text-4xl text-gray-950">
          Vreau Sa Fiu Ajutat !
        </h1>
        <div className="hidden md:block md:w-8/12">
          <Lottie animationData={animationData} />
        </div>
      </div>
      <div className="md:w-6/12 lg:w-4/12 w-full p-8 bg-pink-500 rounded-md">
        <h3 className="poppins font-semibold text-lg text-pink-50">Logare</h3>
        <form className="w-full flex flex-col gap-8 mt-8">
          <div className="w-full">
            <p className="poppins text-sm text-pink-50 font-semibold mb-2">
              Email
            </p>
            <input
              type="email"
              placeholder="exmaple@gmail.com"
              className="bg-pink-50 placeholder:poppins placeholder:text-gray-950/20 w-full rounded-full py-2 px-4 "
            />
          </div>
          <div className="w-full">
            <p className="poppins text-sm text-pink-50 font-semibold mb-2">
              Parola
            </p>
            <input
              type="password"
              placeholder="Introduceti Parola"
              className="bg-pink-50 placeholder:poppins placeholder:text-gray-950/20 w-full rounded-full py-2 px-4 "
            />
          </div>
          <button
            className="w-full text-md poppins text-pink-50 bg-pink-300 py-2 font-semibold rounded-full"
            onClick={() => {
              clickHandler(6);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Logare
          </button>
        </form>
        <p className=" poppins text-sm text-pink-50 w-full text-center mt-4">
          Nu ai cont?
          <span
            className="font-semibold ml-2 underline cursor-pointer"
            onClick={() => {
              clickHandler(3);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Creeaza unul aici
          </span>
        </p>
      </div>
      <div className=" md:hidden">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}
export default Primesc;
