function ProjectCard(props) {
  return (
    <div className="flex flex-col items-start justify-start cursor-pointer">
      <img src={props.src} alt={props.alt} className="w-full" />
      <div className="w-full  font-semibold poppins text-center p-3  rounded-b-2xl text-gray-950 bg-pink-50">
        {props.project}
      </div>
    </div>
  );
}

export default ProjectCard;
