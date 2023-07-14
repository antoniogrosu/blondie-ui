import Index from "./components/Index";
import Despre from "./components/Despre";
import Contact from "./components/Contact";
import Proiecte from "./components/Proiecte";
import Doneaza from "./components/Doneaza";
import { useState, useEffect } from "react";
function App() {
  const [url, setUrl] = useState("index");
  const [menu, setMenu] = useState(false);
  const [navbarClass, setNavbarClass] = useState(
    "z-10 w-full fixed px-8 py-4 md:px-24 md:py-4 flex items-center justify-between font bg-pink-300"
  );
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setNavbarClass(
          "z-10 w-full fixed px-8 py-4 md:px-24 md:py-4 flex items-center justify-between font bg-pink-300 hidden"
        );
      } else {
        // Scrolling up or not scrolling
        setNavbarClass(
          "z-10 w-full fixed px-8 py-4 md:px-24 md:py-4 flex items-center justify-between font bg-pink-300"
        );
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav className={navbarClass}>
        <div
          className="w-5/12 md:w-2/12 cursor-pointer"
          onClick={() => {
            setUrl("index");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
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
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Despre Noi
          </p>
          <p
            className="transition hover:underline hover:text-pink-500"
            onClick={() => {
              setUrl("proiecte");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Proiecte
          </p>
          <p
            className="transition hover:underline hover:text-pink-500"
            onClick={() => {
              setUrl("contact");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Contact
          </p>
          <button
            className="border-2 border-pink-50/100 hover:border-pink-500 transition bg-gradient-to-r from-blue-200 to-pink-600 px-4 py-2 rounded-full"
            onClick={() => {
              setUrl("doneaza");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Doneaza
          </button>
        </div>
        <div
          className="flex items-center md:hidden flex-col gap-1"
          onClick={() => setMenu(!menu)}
        >
          <div className="h-1 w-8 bg-pink-50 mb-1 rounded-full"></div>
          <div className="h-1 w-8 bg-pink-50 mb-1 rounded-full"></div>
        </div>
      </nav>
      {menu && (
        <div className="z-10 fixed w-full">
          <div className=" bg-pink-300 px-8 py-4 w-full flex item-center justify-between">
            <div
              className=" w-1/2"
              onClick={() => {
                setUrl("index");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className=" md:w-2/12 cursor-pointer">
                <img
                  src={"/Logo.svg"}
                  alt="Blondie Logo"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div
              className=" flex items-center justify-center"
              onClick={() => setMenu(!menu)}
            >
              <span className="text-4xl poppins text-pink-50">&times;</span>
            </div>
          </div>
          <div className="border-b-8  border-pink-500 z-10  w-full p-8 rounded-b-3xl bg-pink-300 poppins font-semibold text-gray-50 flex flex-col gap-8 text-center">
            <p
              className="transition hover:underline hover:text-pink-500 "
              onClick={() => {
                setUrl("despre");
                setMenu(!menu);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Despre Noi
            </p>
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                setUrl("proiecte");
                setMenu(!menu);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Proiecte
            </p>
            <p
              className="transition hover:underline hover:text-pink-500"
              onClick={() => {
                setUrl("contact");
                setMenu(!menu);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </p>
            <button
              className="border-2 border-pink-50/100 hover:border-pink-500 transition bg-gradient-to-r from-blue-200 to-pink-600 px-4 py-2 rounded-full"
              onClick={() => {
                setUrl("doneaza");
                setMenu(!menu);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
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
