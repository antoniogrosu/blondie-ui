function DespreCard(props) {
  return (
    <div className="bg-pink-300/30 p-6 md:p-8 rounded-lg">
      <h2 className="text-pink-500 montserrat text-center uppercase font-bold text-2xl">
        {props.title}
      </h2>
      <p className="poppins text-gray-950 mt-4">{props.text}</p>
    </div>
  );
}
export default DespreCard;
