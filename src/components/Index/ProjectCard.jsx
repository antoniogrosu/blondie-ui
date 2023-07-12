function ProjectCard(props) {
  return (
    <div className="flex flex-col items-start justify-start cursor-pointer">
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className=" text-xl font-semibold poppins w-full text-center p-3  rounded-b-2xl text-gray-950 bg-pink-50">
        {props.project}
      </div>
    </div>
  );
}

export default ProjectCard;
