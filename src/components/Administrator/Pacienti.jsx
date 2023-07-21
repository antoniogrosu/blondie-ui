import { useState } from "react";

function Pacienti({ people }) {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [originalAccepted, setOriginalAccepted] = useState(false);

  const handleClick = (person) => {
    setSelectedPerson(person);
    setAccepted(person.accepted);
    setOriginalAccepted(person.accepted);
  };

  const handleGoBack = () => {
    setSelectedPerson(null);
    setAccepted(originalAccepted);
    setOriginalAccepted(null);
  };

  const handleSwitchStatus = () => {
    setAccepted(!accepted);
  };

  const handleConfirmStatus = () => {
    // confirm changes in the backend with axios call
    setSelectedPerson(null);
    // trebuie si refresh cred
  };

  const renderPersonDetails = () => {
    if (selectedPerson) {
      return (
        <div
          className={`${
            accepted ? "accepted" : "declined"
          } bg-pink-300/50 border-2 border-pink-300 my-8 p-8 rounded-xl  poppins`}
        >
          <h2 className="text-xl my-2 poppins mb-8 underline underline-offset-4">
            Detailii-{" "}
            <span className="font-semibold">
              {selectedPerson.name} {selectedPerson.surname}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="mb-4">Name: {selectedPerson.name}</p>
            <p className="mb-4">Surname: {selectedPerson.surname}</p>
            <p className="mb-4">Age: {selectedPerson.age}</p>
          </div>
          <p className="py-4 border-y-2 border-pink-50/20 mt-4 flex items-center justify-between">
            Status:{" "}
            <span
              className={`${
                accepted
                  ? "bg-green-300/30 border-2 border-green-300/30 rounded-full px-6 py-1 border-full text-green-900 "
                  : "bg-red-300/30 border-2 border-red-600/30 rounded-full px-6 py-1 border-full text-red-600 "
              }`}
            >
              {accepted ? "Accepted" : "Declined"}
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:w-5/12 md:mx-auto mt-4 gap-8">
            <button
              onClick={handleSwitchStatus}
              className={`${
                accepted
                  ? "bg-red-300/50 border-2 border-red-600 rounded-full px-6 py-1 border-full text-red-600 font-semibold hover:bg-red-300/80 transition duration-100"
                  : "bg-green-300/50 border-2 border-green-300 rounded-full px-6 py-1 border-full text-green-900 font-semibold hover:bg-green-300/80 transition duration-100"
              }`}
            >
              {accepted ? "Decline" : "Accept"}
            </button>
            <button
              onClick={handleConfirmStatus}
              className="bg-blue-300/50 border-2 border-blue-300 rounded-full px-6 py-1 border-full text-blue-900 font-semibold hover:bg-blue-300/80 ease-in-out duration-100"
            >
              Confirm
            </button>
          </div>
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

  const renderPeopleList = () => {
    if (!selectedPerson) {
      return (
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-12 cursor-pointer">
          {people.map((person, index) => (
            <div
              key={index}
              onClick={() => handleClick(person)}
              className={`${
                person.accepted ? "accepted" : "declined"
              }  p-8 rounded-2xl bg-pink-300/50 border-2 border-pink-300 poppins text-gray-950`}
            >
              <p className="mb-4">Name: {person.name}</p>
              <p className="mb-4">Surname: {person.surname}</p>
              <p className="mb-4">Age: {person.age}</p>
              <p className="py-4 border-y-2 border-pink-50/40 mt-4 flex items-center justify-between">
                Status:{" "}
                <span
                  className={`${
                    person.accepted
                      ? "bg-green-300/50 border-2 border-green-300 rounded-full px-6 py-1 border-full text-green-900 font-semibold"
                      : "bg-red-300/50 border-2 border-red-600 rounded-full px-6 py-1 border-full text-red-600 font-semibold"
                  }`}
                >
                  {" "}
                  {person.accepted ? "Accepted" : "Declined"}
                </span>
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {renderPersonDetails()}
      {renderPeopleList()}
    </div>
  );
}

export default Pacienti;
