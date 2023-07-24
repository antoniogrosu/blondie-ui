function Hero() {
  return (
    <div className="flex items-top justify-between md:flex-row flex-col">
      <div className="md:w-8/12">
        {/* nume pacient */}
        <h1 className="poppins text-3xl text-pink-500 font-bold">
          Ion Popescu <span className="text-xl">(Pacient)</span>
        </h1>
        {/* div butoane de edit si chat */}
        <div className="flex items-center justify-start mt-4 w-full">
          {/* div chat */}
          <div>
            <button className="hover:scale-105 text-sm ease-in-out duration-300 flex items-center justify-center bg-blue-300/50 poppins px-4 py-2 rounded-md">
              <img src="/chat.svg" className="w-2/12 mr-2" />
              Hai sa Vorbim
            </button>
          </div>
          {/* div editeaza datele */}
          <div>
            <button className="hover:scale-105 text-sm ease-in-out duration-300 ml-6 flex items-center justify-center bg-green-300/50 poppins px-4 py-2 rounded-md">
              <img src="/edit.svg" className="w-2/12 mr-2" />
              Editeaza Datele
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-6/12 lg:w-4/12 p-4 bg-pink-500 rounded-2xl mt-8 md:mt-0 ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-start md:w-4/12">
            {/* titlu status zbor */}
            <h3 className="poppins font-semibold text-pink-50 ">Status Zbor</h3>
            <img src="/plane.svg" alt="plane" className="w-2/12 ml-3" />{" "}
            {/* svg avion */}
          </div>
          {/* div editeaza datele */}
          <div className="py-2 px-4 bg-green-300/30 flex items-center justify-between rounded-xl poppins">
            <div className="p-1 bg-green-300 rounded-full mr-1"></div>
            <p className="text-sm text-green-300">Valid</p>
          </div>
        </div>
        <div className="w-full bg-pink-50/60 rounded-md mt-4 py-2 flex items-center justify-evenly ">
          <div className="flex items-center justify-start">
            <div className="p-2 rounded-full  bg-pink-50/60 poppins font-semibold">
              RO
            </div>
            <p className="hidden md:block ml-2 poppins text-gray-950 font-semibold">
              Bucuresti
            </p>
          </div>
          <img
            src="way.svg"
            className=" 
        w-2/12 md:w-1/12 my-2 md:my-0 "
          />
          <div className="flex items-center justify-start">
            <div className="p-2 rounded-full  bg-pink-50/60 poppins font-semibold">
              USA{" "}
            </div>
            <p className="hidden md:block ml-2 poppins text-gray-950 font-semibold">
              Los Angeles
            </p>
          </div>
        </div>
        <div className="text-gray-50 md:hidden mt-4 flex items-center justify-between">
          <div className="flex item-center justify-start">
            <img src="/plane.svg" className="w-2/12 " />
            {/* de schimbat imaginea */}
            <p className="poppins font-semibold ml-2">Bucuresti</p>
          </div>
          <div className="flex item-center justify-end">
            <img src="/plane.svg" className="w-2/12" />
            {/* de schimbat imaginea */}

            <p className=" ml-2 poppins  font-semibold ">Los Angeles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
