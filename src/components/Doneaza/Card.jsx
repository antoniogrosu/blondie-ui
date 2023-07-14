export default function Card(props) {
  return (
    <div className="bg-pink-300/30 p-6 rounded-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="poppins capitalize font-semibold  md:text-lg text-gray-950">
            {props.label}
          </h3>
          <h3 className="mt-2 poppins text-pink-500 font-semibold md:text-lg">
            {props.detail}
          </h3>
        </div>
        <img src="/donate-logo.svg" className="ml-2" />
      </div>
    </div>
  );
}
