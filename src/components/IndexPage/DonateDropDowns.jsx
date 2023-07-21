import { useState } from "react";

export default function DropDown(props) {
  const [description, setDescription] = useState(false);
  return (
    <>
      <div
        className="px-4 py-2 bg-pink-300 flex flex-col rounded-xl w-full md:w-6/12 cursor-pointer"
        onClick={() => {
          setDescription(!description);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="w-2/12">
            <img src={props.icon} alt={props.alt} className="object-cover" />
          </div>
          <p className="text-gray-950 poppins font-semibold text-xl">
            {props.title}
          </p>
          <div className="w-1/12 cursor-pointer">
            <img
              src="/line.svg"
              alt="toggle down arrow"
              className="object-cover"
            />
          </div>
        </div>
        {description && (
          <div className="px-2 pt-4 pb-2 bg-pink-300">
            <p className=" text-gray-950 poppins">{props.description}</p>
          </div>
        )}
      </div>
    </>
  );
}
