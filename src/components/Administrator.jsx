import { useState } from "react";
import Pacienti from "./AdministratorPage/Pacienti.jsx";
import Zboruri from "./AdministratorPage/Zboruri.jsx";

function Administrator() {
  const [zboruri, setZboruri] = useState(false);
  const [pacienti, setPacienti] = useState(false);
  const [unselected, setUnselected] = useState(true);
  const peopleData = [
    {
      name: "Lindicel",
      surname: "Lindel",
      age: 25,
      accepted: true,
    },
    {
      name: "Jane",
      surname: "Smith",
      age: 30,
      accepted: false,
    },
    {
      name: "Janes",
      surname: "Romanes",
      age: 25,
      accepted: true,
    },
  ];

  const flightsData = [
    {
      id: 1,
      date: "10/07/2022",
      pacients: [],
    },
    {
      id: 2,
      date: "17/8/2022",
      pacients: [],
    },
    {
      id: 3,
      date: "28/09/2022",
      pacients: [],
    },
  ];

  return (
    <div className="py-36 px-8 md:px-24 bg-pink-50">
      {/* box 1 in stanga pe care sa dai click si sa vezi pacientii*/}
      {unselected && (
        <>
          <h1 className="text-4xl montserrat font-semibold mb-8">
            Apasati pentru a vizualiza
          </h1>
          <div className="grid grid-cols-2 gap-8">
            <div
              onClick={() => {
                setPacienti(true);
                setUnselected(false);
              }}
              className=" cursor-pointer border-2 border-pink-300 flex items-center justify-center  text-center h-36 rounded-2xl bg-pink-300/30 hover:bg-pink-300/50 transition duration-150 poppins"
            >
              <p className="font-semibold text-gray-950">Pacienti</p>
            </div>

            {/* box 2 in dreapta pe care sa dai click si sa vezi zborurile*/}
            <div
              onClick={() => {
                setZboruri(true);
                setUnselected(false);
              }}
              className=" cursor-pointer border-2 border-pink-300 flex items-center justify-center text-center h-36 rounded-2xl bg-pink-300/30 hover:bg-pink-300/50 transition duration-150 poppins"
            >
              <p className="font-semibold text-gray-950">Zboruri</p>
            </div>
          </div>
        </>
      )}
      {!unselected && pacienti && (
        <>
          <h1 className="montserrat text-4xl font-semibold">Pacienti</h1>
          <Pacienti people={peopleData} />
        </>
      )}
      {!unselected && zboruri && (
        <>
          <h1 className="montserrat text-4xl font-semibold">Zboruri</h1>
          <button className="flex items-center justify-between rounded-md hover:bg-pink-700 ease-in-out duration-100 text-pink-50 px-4 py-2 my-8 bg-pink-500 poppins font-semibold">
            <span className="text-2xl mr-2">+</span> Zbor nou
          </button>
          <Zboruri flights={flightsData} />
        </>
      )}
    </div>
  );
}

export default Administrator;
