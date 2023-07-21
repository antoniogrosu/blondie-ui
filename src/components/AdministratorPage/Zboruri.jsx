import { useState } from "react";

function Zboruri({ flights }) {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleClick = (flight) => {
    setSelectedFlight(flight);
  };

  const handleGoBack = () => {
    setSelectedFlight(null);
  };

  const renderFlightDetails = () => {
    if (selectedFlight) {
      return (
        <div className="bg-pink-300/50 border-2 hover:pink-200 ease-in-out duration-100 border-pink-300 rounded-xl p-8 poppins">
          <h2 className="text-2xl font-semibold mb-8">Details</h2>
          <p className="mb-4">Flight ID: {selectedFlight.id}</p>
          <p className="mb-4">Date: {selectedFlight.date}</p>
          <p className="mb-4">
            Pacients:{" "}
            {selectedFlight.pacients.map((pacient, index) => (
              <div>
                <p>Pacient No. {index}</p>
                <p>Name: {pacient.name}</p>
                <p>
                  Dus / Intors: {pacient.route}{" "}
                  {/* vedem cum facem asta in backend */}
                </p>
              </div>
            ))}
          </p>
          <button
            onClick={handleGoBack}
            className="w-full md:w-auto mt-8 px-4 py-2 flex items-center justify-center bg-pink-50/20 border-2    hover:bg-pink-50/50 ease-in-out duration-100 rounded-md font-semibold"
          >
            {" "}
            <img src="/arrow.svg" className="md:w-2/12 w-1/12" />
            <p className="poppins font-semibold text-sm ml-3"> Go back</p>
          </button>
        </div>
      );
    }
  };

  const renderFlightsList = () => {
    if (!selectedFlight) {
      return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 bg-pink-300/50 p-8 rounded-xl border-pink-300 border-2">
          {flights.map((flight, index) => (
            <div
              className="hover:bg-pink-100 ease-in-out duration-100 cursor-pointer bg-pink-50 rounded-md p-4"
              key={index}
              onClick={() => handleClick(flight)}
            >
              <p className="poppins text-2xl font-semibold mb-4 text-gray-950">
                Flight ID: {flight.id}
              </p>
              <p className="poppins underline underline-offset-4 text-gray-950">
                Date: {flight.date}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {renderFlightDetails()}
      {renderFlightsList()}
    </div>
  );
}

export default Zboruri;
