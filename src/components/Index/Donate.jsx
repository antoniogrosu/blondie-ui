import DropDown from "./DonateDropDowns";
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
      <div className="mt-16">
        <h3 className="montserrat text-2xl tracking-widest text-gray-950/30 uppercase">
          fii alaturi de noi si de sponsorii nostri
        </h3>
        <div className="grid md:grid-cols-4 gap-8 grid-cols-2">
          <div className="w-full mt-8">
            <img src="/tarom.svg" alt="Logo Tarom" className="object-cover" />
          </div>
          <div className="w-full mt-8">
            <img
              src="/unicredit.svg"
              alt="Logo Tarom"
              className="object-cover"
            />
          </div>
          <div className="w-full mt-8">
            <img src="/omv.svg" alt="Logo Tarom" className="object-cover" />
          </div>
          <div className="w-full mt-8">
            <img src="/bebetei.svg" alt="Logo Tarom" className="object-cover" />
          </div>
          <div className="w-full mt-8">
            <img src="/lugera.svg" alt="Logo Tarom" className="object-cover" />
          </div>
          <div className="w-full mt-8">
            <img src="/dns.svg" alt="Logo Tarom" className="object-cover" />
          </div>
          <div className="w-full mt-8">
            <img src="/profi.svg" alt="Logo Tarom" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
