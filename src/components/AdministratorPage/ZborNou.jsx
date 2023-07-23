import { useEffect, useState } from "react";

function ZborNou({ people }) {
  // use state variables
  const [idZbor, setIdZbor] = useState("");
  const [dataZbor, setDataZbor] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [pacientiZbor, setPacientiZbor] = useState([]);

  //variabila copie dupa pacienti
  const pacienti = people;

  function handlePacient(pacientName) {
    setPacientiZbor((prevPacientiZbor) => {
      // Check if the pacientName already exists in the array
      const isPacientAlreadySelected = prevPacientiZbor.includes(pacientName);

      if (isPacientAlreadySelected) {
        // Remove the pacientName from the array using filter
        return prevPacientiZbor.filter((name) => name !== pacientName);
      } else {
        // Add the pacientName to the array
        return [...prevPacientiZbor, pacientName];
      }
    });
  }

  return (
    <form className="border-2 rounded-md bg-pink-300/30 border-pink-300 p-8">
      <h1 className="poppins text-2xl font-semibold mb-4">
        Creati un nou zbor:
      </h1>
      {/* input id zbor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <input
          type="text"
          className="w-full  mt-4 border-2 rounded-full border-pink-300 py-2 px-4 poppins placeholder:poppins placeholder:text-gray-950/50"
          placeholder="Introduceti id-ul zborului"
          value={idZbor}
          onChange={() => {
            setIdZbor(event.target.value);
          }}
        ></input>{" "}
        {/* input data zbor */}
        <input
          type="date"
          value={dataZbor}
          className="w-full  mt-4 border-2 rounded-full border-pink-300 py-2 px-4 poppins placeholder:poppins placeholder:text-gray-950/50"
          onChange={() => {
            setIdZbor(event.target.value);
          }}
        ></input>
        <div>
          <h3 className="text-xl poppins font-semibold text-gray-950">
            Selectati Pacientii
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 poppins gap-4 focus:bg-pink-300/50">
            {pacienti.map((pacient) => {
              return (
                <p
                  key={Math.floor(Math.random() * 10000)}
                  className={`mt-2 p-2 cursor-pointer bg-gray-950/10 rounded-full text-center poppins`}
                  onClick={() => {
                    handlePacient(pacient.name);
                  }}
                >
                  {pacient.name} {pacient.surname}
                </p>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-xl poppins font-semibold text-gray-950 gap-2">
            Pacientii Selectati
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {pacientiZbor &&
              pacientiZbor.map((pacient) => {
                return (
                  <p className="bg-pink-300 p-4 rounded-xl text-center poppins text-gray-50 font-semibold">
                    {pacient}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </form>
  );
}

export default ZborNou;
