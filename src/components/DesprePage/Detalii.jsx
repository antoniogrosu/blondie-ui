import Lottie from "lottie-react";
import animationData from "./heart-hand.json";

export default function Detalii() {
  return (
    <div className="py-16">
      <h1 className="text-3xl md:text-4xl montserrat font-semibold text-gray-950">
        <span className="text-pink-500">
          Blondie există pentru că așa e normal
        </span>{" "}
        – când cineva e bolnav, să ajungă la spitalul unde viața să-i poată fi
        salvată!
      </h1>
      <div className="mt-8 mb-4 flex items-center justify-between flex-col md:flex-row">
        <div className="md:w-7/12">
          <div className="md:hidden">
            <Lottie animationData={animationData} />
          </div>
          <p className="poppins text-gray-950">
            Misiunea noastră este de a reduce mortalitatea și de a crește
            șansele la viață ale copiiilor cu afecțiuni grave în risc social.
            Această categorie de copii ignorată și discriminată este cel mai
            vulnerabil segment al societății, cu un set de nevoi specifice și
            foarte complexe.
          </p>
        </div>
        <div className="md:block hidden w-4/12">
          <Lottie animationData={animationData} />
        </div>
      </div>
      <h1 className="text-pink-500 text-4xl montserrat font-semibold">
        Noi credem că totul va fi roz ! Bine si roz !
      </h1>
    </div>
  );
}
