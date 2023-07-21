function MomentRoz(props) {
  return (
    <div className="flex flex-col h-auto">
      <a
        href={props.link}
        target="blank"
        className="hover:scale-105 duration-200 ease-in-out"
      >
        <img src={props.img} className="rounded-t-2xl " />
        <div className="p-4 bg-pink-500 rounded-b-2xl">
          <h3 className="text-xl font-semibold poppins text-pink-50">
            {props.title}
          </h3>
          <p className="poppins text-sm text-pink-50 mt-3">
            {props.description}
          </p>
        </div>
      </a>
    </div>
  );
}
export default MomentRoz;
