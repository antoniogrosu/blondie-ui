function MomentRoz(props) {
  const link = props.link;
  return (
    <div
      className="flex flex-col cursor-pointer hover:scale-105 ease-in-out duration-100"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = link;
      }}
    >
      <div className="w-full h-full">
        <img
          src={props.img}
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <div className="p-6 bg-pink-500 rounded-b-2xl">
        <h3 className="text-xl font-semibold poppins text-pink-50">
          {props.title}
        </h3>
        <p className="poppins text-sm text-pink-50 mt-3">{props.description}</p>
      </div>
    </div>
  );
}
export default MomentRoz;
