export default function CardEchipa(props) {
  return (
    <div>
      <div className="rounded-t-xl w-full ">
        <img
          src={props.img}
          className="object-cover w-full rounded-t-3xl border-2 border-pink-500"
        />
      </div>
      <div className="border-2 border-pink-500 p-4 w-full rounded-b-3xl bg-pink-300/30">
        <h2 className="text-lg poppins font-bold text-center text-gray-950">
          {props.name}
        </h2>
        <h4 className="text-pink-500 poppins font-semibold text-center capitalize">
          {props.role}
        </h4>
      </div>
    </div>
  );
}
