import { useState, useEffect } from "react";
function Navbar({ onChange }) {
  const [menu, setMenu] = useState(false);
  const [navbarClass, setNavbarClass] = useState(
    "z-10 w-full fixed px-8 py-4 lg:px-24 lg:py-4 flex items-center justify-between font bg-pink-300"
  );

  const clickHandler = (number) => {
    onChange(number);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setNavbarClass(
          "z-10 w-full fixed px-8 py-4 lg:px-24 lg:py-4 flex items-center justify-between font bg-pink-300 hidden"
        );
      } else {
        setNavbarClass(
          "z-10 w-full fixed px-8 py-4 lg:px-24 lg:py-4 flex items-center justify-between font bg-pink-300"
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
          className="w-4/12 lg:w-2/12 cursor-pointer"
          onClick={() => {
            clickHandler(0);
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
        <div className="hidden text-xs lg:flex items-center justify-between w-8/12 poppins text-gray-50 cursor-pointer">
          <p
            className="transition mr-2 hover:underline hover:text-pink-500 "
            onClick={() => {
              clickHandler(7);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Administator
          </p>
          <p
            className="transition mr-2 hover:underline hover:text-pink-500 "
            onClick={() => {
              clickHandler(6);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Mockup Profil
          </p>
          <p
            className="transition mr-2 hover:underline hover:text-pink-500 "
            onClick={() => {
              clickHandler(1);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Despre Noi
          </p>
          <p
            className="transition hover:underline hover:text-pink-500 mr-2"
            onClick={() => {
              clickHandler(2);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Proiecte
          </p>
          <div className="flex items-center text-xs">
            <button
              className="border-2  border-pink-50 transition bg-gradient-to-r from-blue-400 to-blue-200 px-4 py-2 rounded-l-full"
              onClick={() => {
                clickHandler(4);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Ofer Ajutor
            </button>
            <button
              className="text-xs border-2 border-l-0 border-pink-50 transition bg-gradient-to-r from-blue-200 to-pink-400 px-4 py-2 rounded-r-full"
              onClick={() => {
                clickHandler(5);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Primesc Ajutor
            </button>
          </div>
        </div>
        <div
          className="flex items-center lg:hidden flex-col gap-1"
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
              className=" w-4/12"
              onClick={() => {
                clickHandler(0);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className=" lg:w-1/12 cursor-pointer">
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
              className="transition mr-2 hover:underline hover:text-pink-500 "
              onClick={() => {
                clickHandler(6);
                setMenu(!menu);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Mockup Profil
            </p>
            <p
              className="transition hover:underline hover:text-pink-500 "
              onClick={() => {
                clickHandler(1);
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
                clickHandler(2);
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
                clickHandler(7);
                setMenu(!menu);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Administrator
            </p>
            <div className="flex items-center text-xs mx-auto">
              <button
                className="border-2  border-pink-50 transition bg-gradient-to-r from-blue-400 to-blue-200 px-4 py-2 rounded-l-full"
                onClick={() => {
                  clickHandler(4);
                  setMenu(!menu);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Ofer Ajutor
              </button>
              <button
                className="text-xs border-2 border-l-0 border-pink-50 transition bg-gradient-to-r from-blue-200 to-pink-400 px-4 py-2 rounded-r-full"
                onClick={() => {
                  clickHandler(5);
                  setMenu(!menu);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Primesc Ajutor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
