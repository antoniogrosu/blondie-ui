import DespreCard from "./DespreCard";
function Despre() {
  return (
    <div className="md:py-24 py-16">
      <div className="flex items-top justify-between text-gray-950 md:flex-row flex-col">
        <div className="w-full md:w-5/12">
          <h1 className="montserrat text-4xl font-semibold">
            Așa-i că nu aveam cum să spunem altfel decât DA?
          </h1>
          <p className="mt-8 poppins">
            Astfel, copiii odată grav bolnavi primesc timp. Ani! Primii pași.
            Primii dinți. Primul cuvânt. Prima zi de școală. Pentru că așa e
            normal.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-6/12">
          <p className="poppins">
            Copiii aceștia frumoși sunt eroii noștri, care s-au luptat cu
            moartea și au câștigat, care au plecat albaștri, acoperiți de fire
            și susținuți de aparate și s-au întors roz. Vrem să îi priviți și să
            simțiți ce simțim și noi de fiecare dată: așa-i că iî nicio lume și
            în nicio realitate nu exista nicio varianta în care ei să nu mai fi
            fost în viață?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
        <DespreCard
          title="2 Pacienti / zi"
          text="pleacă spre o clinică din altă țară pentru boli care nu pot fi tratate în România."
        />
        <DespreCard
          title="1 din 5"
          text="pacienți care pleaca să-și salveze viața într-o clinică din afara țării este copil."
        />
        <DespreCard
          title="30 000€"
          text="costul unui zbor medical aerian special dedicat copiilor aflati in nevoie de ajutor."
        />
      </div>
    </div>
  );
}
export default Despre;
