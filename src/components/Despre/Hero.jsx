import Lottie from "lottie-react";
import animationData from "./multiple-hearts.json";
export default function Hero() {
  return (
    <div className="md:pb-24 pb-16">
      <div className=" flex items-center justify-between md:flex-row flex-col">
        <div className="hidden md:block md:w-4/12">
          <Lottie animationData={animationData} />
        </div>
        <div className="md:w-6/12">
          <h1 className="text-3xl md:text-4xl montserrat font-semibold">
            Sunt Adelina Toncean și am fondat Asociației Blondie ca{" "}
            <span className="text-pink-500">nici un copil să nu mai moară</span>{" "}
            cu zile pentru că nu poate fi operat în România.
          </h1>
        </div>
        <div className="md:hidden">
          <Lottie animationData={animationData} />
        </div>
      </div>
      <p className="mt-8 poppins text-gray-950">
        Înainte de a fi dat asociației, „Blondie” a fost numele de alint al unui
        băiețel din Constanța născut cu o malformație cardiacă gravă și părăsit
        în spital după două săptămâni de viață. La 3 ani, Blondie a devenit
        băiețelul meu adoptiv, dar operația de care avea nevoie pentru a-i fi
        reparată inimioara bolnavă nu s-a mai putut face niciodată. Pe 25
        octombrie 2014, Blondie a murit la 13 ani 7 luni și 11 zile din cauza
        complicațiilor date de malformația cardiacă.
      </p>
    </div>
  );
}
