import Hero from "./components/Index/Hero";
import Despre from "./components/Index/Despre";
import Projects from "./components/Index/Projects";
import Donate from "./components/Index/Donate";
function App() {
  return (
    <>
      <div className="bg-pink-50 px-8 pt-16 md:px-24 md:pt-24">
        <Hero />
        <Despre />
      </div>
      <Projects />
      <Donate />
    </>
  );
}

export default App;
