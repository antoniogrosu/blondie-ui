import DropDown from "./DonateDropDowns";
import Sponsors from "../Sponsors";
export default function Donate() {
  return (
    <div className="bg-pink-50 px-8 py-16 md:px-24 md:pt-24">
      <h1 className="text-4xl montserrat text-gray-950 font-semibold">
        Cum ne poti sprijini?
      </h1>
      <div className="mt-8 flex items-start justify-start gap-8 md:flex-row flex-col">
        <DropDown
          icon="/coin.svg"
          alt="Coin Icon"
          title="Doneaza"
          description="Implică-te cu noi în salvarea copiilor bolnavi! Oferă-le șansa de a ajunge într-unul dintre spitalele specializate de care au nevoie. Șansa de a deveni Roz."
        />
        <DropDown
          icon="/volunteer.svg"
          alt="Coin Icon"
          title="Devino Voluntar"
          description="„Și eu sunt Blondie” este programul care aduce voluntari instruiți alături de copiii internați singuri în maternități și secții de pediatrie. Când este împreuna cu un copil, voluntarul face ce ar face o mama daca ar fi acolo: îi vorbește, îl mângâie, îi spune povești, îl alintă, îl iubește. Da, exact ce face mama.
          În prezent, având în vedere starea de urgență, am sistat programul de voluntariat. Vom reveni imediat ce starea va fi una favorbabilă."
        />
      </div>
      <div className="py-8" />
      <Sponsors />
    </div>
  );
}
