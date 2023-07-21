import Index from "./components/Index";
import { useState, useEffect } from "react";
import Despre from "./components/Despre";
import Contact from "./components/Contact";
import Proiecte from "./components/Proiecte";
import Doneaza from "./components/Doneaza";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Primesc from "./components/Primesc";
import Profile from "./components/Profile";
import Administrator from "./components/Administrator";
function App() {
  const [url, setUrl] = useState(7);

  const index = (event) => {
    setUrl(event);
  };

  return (
    <div>
      <Navbar onChange={index} />
      {url == 0 && <Index onChange={index} />}
      {url == 1 && <Despre />}
      {url == 2 && <Proiecte />}
      {url == 3 && <Contact />}
      {url == 4 && <Doneaza />}
      {url == 5 && <Primesc onChange={index} />}
      {url == 6 && <Profile />}
      {url == 7 && <Administrator />}
      <Footer onChange={index} />
    </div>
  );
}

export default App;
