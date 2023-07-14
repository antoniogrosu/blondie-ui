function DespreCard(props) {
  return (
    <div className="bg-pink-300/30 p-6 md:p-8 rounded-lg">
      <h2 className="text-pink-500 poppins font-semibold  text-center uppercase  text-xl">
        {props.title}
      </h2>
      <p className="poppins text-gray-950 mt-4 text-center">{props.text}</p>
    </div>
  );
}
export default DespreCard;
