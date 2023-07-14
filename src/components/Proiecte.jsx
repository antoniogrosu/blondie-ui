import Lottie from "lottie-react";
import animationData from "./loading.json";
function Proiecte() {
  return (
    <div className="bg-pink-50 px-8 py-36 md:px-24 montserrat text-4xl">
      <div className="w-4/12 mx-auto">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}
export default Proiecte;
