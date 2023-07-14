import Hero from "./Doneaza/Hero";
import Transfer from "./Doneaza/Transfer";
import Metode from "./Doneaza/Metode";
import Contracte from "./Doneaza/Contracte";
function Doneaza() {
  return (
    <div className="bg-pink-50 px-8 pt-36 md:px-24 ">
      <Hero />
      <Transfer />
      <Metode />
      <Contracte />
    </div>
  );
}
export default Doneaza;
