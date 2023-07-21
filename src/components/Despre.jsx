import Hero from "./DesprePage/Hero";
import Detalii from "./DesprePage/Detalii";
import Echipa from "./DesprePage/Echipa";
import Sponsors from "./Sponsors";
function Despre() {
  return (
    <div className="bg-pink-50 px-8 py-36 md:px-24 ">
      <Hero />
      <Detalii />
      <Echipa />
      <Sponsors />
    </div>
  );
}
export default Despre;
