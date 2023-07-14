import Lottie from "lottie-react";
import animationData from "./donate.json";
export default function Hero() {
  return (
    <div className="pb-16">
      <div className="flex items-center justify-between">
        <div className="md:w-5/12">
          <h1 className="text-4xl text-gray-950 montserrat font-semibold">
            "Împarte, împarte pentru o parte care se împarte într-o altă parte"
          </h1>
          <div className="my-8 md:hidden">
            <Lottie animationData={animationData} speed={2} />
          </div>
          <p className="mt-8 poppins text-gray-950">
            Imaginați-vă că se modifica una singură. După ce toate celelalte se
            aranjează! Că nu mai are spitalul loc pentru ei, că se schimbă
            starea unuia din copii și te întrebi dacă poți să îl aștepți sau
            pleci cu cel care poate zbura. <br />
            <span className="font-semibold">
              Că nu e gata pașaportul. Că nu avem avion! Ca nu ne ajung banii!
            </span>
          </p>
        </div>
        <div className="md:block hidden md:w-6/12">
          <Lottie animationData={animationData} speed={2} />
        </div>
      </div>
    </div>
  );
}
