import Hero from "./Index/Hero";
import Despre from "./Index/DespreSection";
import Projects from "./Index/Projects";
import Donate from "./Index/Donate";
import Sponsors from "./Sponsors";
function Index() {
  return (
    <div>
      <div className="bg-pink-50 px-8 pt-36 md:px-24">
        <Hero />
        <Despre />
      </div>
      <Projects />
      <Donate />
    </div>
  );
}
export default Index;
