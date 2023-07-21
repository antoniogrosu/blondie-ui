import { useState } from "react";
function Proiect(props) {
  return (
    <div className="flex items-center justify-start md:flex-row flex-col hover:scale-105 duration-200 ease-in-out">
      <div className="md:w-4/12">
        <div className="w-full">
          <img src={props.img} className="object-cover" />
        </div>
        <div className="p-2 text-md bg-pink-500 poppins  font-semibold rounded-b-2xl">
          <p className="text-center text-pink-50 ">{props.project}</p>
        </div>
      </div>
      <div className="md:w-6/12 mt-8 md:mt-0 md:ml-12">
        <p className="poppins text-gray-950">{props.description}</p>
      </div>
    </div>
  );
}
export default Proiect;
