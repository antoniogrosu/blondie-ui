import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div className="md:px-24 px-8 py-16 bg-pink-300/50">
      <h1 className="montserrat text-4xl text-gray-950 font-semibold">
        Ajutam copiii cu 5 proiecte{" "}
      </h1>
      <h1 className="montserrat text-4xl font-semibold text-pink-500">
        nationale si internationale
      </h1>
      <div className="mt-8 grid md:grid-cols-3 gap-8 grid-cols-1">
        <ProjectCard
          src="/casuta.svg"
          alt="Poza Casuta Blondie"
          project="Căsuța Blondie"
        />
        <ProjectCard
          src="/caravana.svg"
          alt="Poza Caravana Blondie"
          project="Caravana Blondie"
        />
        <ProjectCard
          src="/sieu.svg"
          alt="Poza Medici"
          project="#ŞieusuntBlondie"
        />
      </div>
    </div>
  );
}
export default Projects;
