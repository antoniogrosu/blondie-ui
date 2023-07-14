import Index from "./components/Index";
import Despre from "./components/Despre";
import Contact from "./components/Contact";
import Proiecte from "./components/Proiecte";
import Doneaza from "./components/Doneaza";
import { useState } from "react";
function App() {
  const [url, setUrl] = useState("index");
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <nav className=" w-full fixed px-8 py-4 md:px-24 md:py-4 flex items-center justify-between font bg-pink-300">
        <div
          className="w-5/12 md:w-2/12 cursor-pointer"
          onClick={() => {
            setUrl("index");
          }}
        >
          <img
            src={"/Logo.svg"}
            alt="Blondie Logo"
            className="w-full object-cover"
          />
        </div>
        <div className="hidden text-xs md:flex items-center justify-between w-4/12 poppins text-gray-50 cursor-pointer">
          <p
            className="transition hover:underline hover:text-pink-500 "
            onClick={() => {
              setUrl("despre");
            }}
          >
            Despre Noi
          </p>
          <p
            className="transition hover:underline hover:text-pink-500"
            onClick={() => {
              setUrl("proiecte");
            }}
          >
            Proiecte
          </p>
          <p
            className="transition hover:underline hover:text-pink-500"
            onClick={() => {
              setUrl("contact");
            }}
          >
            Contact
          </p>
          <button
            className="border-2 border-pink-50/100 hover:border-pink-500 transition bg-gradient-to-r from-blue-200 to-pink-600 px-4 py-2 rounded-full"
            onClick={() => {
              setUrl("doneaza");
            }}
          >
            Doneaza
          </button>
        </div>
        <div className="md:hidden">
          <p
            className="text-sm text-gray-50 poppins"
            onClick={() => setMenu(!menu)}
          >
            menu
          </p>
        </div>
      </nav>
      {menu && (
        <div
          className="w-full absolute h-screen bg-gray-950/50"
          onClick={() => setMenu(!menu)}
        >
          <div className=" bg-pink-300 px-8 py-4 w-full">
            <div
              className="w-5/12 md:w-2/12 cursor-pointer"
              onClick={() => {
                setUrl("index");
              }}
            >
              <img
                src={"/Logo.svg"}
                alt="Blondie Logo"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="border-b-8  border-pink-500 z-10  w-full p-8 rounded-b-3xl bg-pink-300 poppins font-semibold text-gray-50 flex flex-col gap-8 text-center">
            <p
              className="transition hover:underline hover:text-pink-500 "
              onClick={() => {
                setUrl("despre");
                setMenu(!menu);
              }}
            >
              Despre Noi
            </p>
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                setUrl("proiecte");
                setMenu(!menu);
              }}
            >
              Proiecte
            </p>
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                setUrl("contact");
                setMenu(!menu);
              }}
            >
              Contact
            </p>
            <button
              className="border-2 border-pink-50/100 hover:border-pink-500 transition bg-gradient-to-r from-blue-200 to-pink-600 px-4 py-2 rounded-full"
              onClick={() => {
                setUrl("doneaza");
                setMenu(!menu);
              }}
            >
              Doneaza
            </button>
          </div>
        </div>
      )}
      {url == "index" && <Index />}
      {url == "despre" && <Despre />}
      {url == "contact" && <Contact />}
      {url == "proiecte" && <Proiecte />}
      {url == "doneaza" && <Doneaza />}

      <footer className="cursor-pointer p-8 md:p-24 flex md:flex-row flex-col items-center justify-between bg-pink-300">
        <div className="md:w-2/12">
          <img
            src="/Logo.svg"
            alt="Logo Blondie"
            className="w-full object-cover"
          />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-8 mt-12">
          <div className="flex flex-col md:items-center items-left">
            <h3 className="text-gray-50/50 tracking-widest text-xl uppercase montserrat">
              Info
            </h3>
            <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
              <p className="transition hover:underline hover:text-pink-500">
                Despre
              </p>
              <p className="transition hover:underline hover:text-pink-500">
                Echipa
              </p>
              <p className="transition hover:underline hover:text-pink-500">
                Sponsori
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-center items-left">
            <h3 className="text-gray-50/50 tracking-widest text-xl uppercase montserrat">
              Proiecte
            </h3>
            <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
              <p className="transition hover:underline hover:text-pink-500">
                #șieusuntBlondie
              </p>
              <p className="transition hover:underline hover:text-pink-500">
                Căsuța Blondie
              </p>
              <p className="transition hover:underline hover:text-pink-500">
                Caravana Blondie
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-center items-left">
            <h3 className="text-gray-50/50 tracking-widest text-xl uppercase montserrat">
              Socials
            </h3>
            <div className="text-gray-50 text-sm poppins flex flex-col gap-2 mt-2">
              <p className="transition hover:underline hover:text-pink-500">
                Instagram
              </p>
              <p className="transition hover:underline hover:text-pink-500">
                Facebook
              </p>
              <p className="transition hover:underline hover:text-pink-500">
                Youtube
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
