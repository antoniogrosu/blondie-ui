import Hero from "./IndexPage/Hero";
import Despre from "./IndexPage/DespreSection";
import Projects from "./IndexPage/Projects";
import Donate from "./IndexPage/Donate";
import Sponsors from "./Sponsors";

function Index({ onChange }) {
  const index2 = (event) => {
    onChange(event);
  };

  return (
    <div>
      <div className="bg-pink-50 px-4 pt-36 md:px-24">
        <Hero onChange={index2} />
        <Despre />
      </div>
      <Projects />
      <Donate />
    </div>
  );
}
export default Index;
