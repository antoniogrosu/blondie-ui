function Navbar() {
  return (
    <nav className="px-8 py-4 md:px-24 md:py-4 flex items-center justify-between font bg-pink-300">
      <div className="w-5/12 md:w-2/12">
        <img
          src={"/Logo.svg"}
          alt="Blondie Logo"
          className="w-full object-cover"
        />
      </div>
      <div className="hidden text-xs md:flex items-center justify-between w-4/12 poppins text-gray-50 cursor-pointer">
        <p className="">Despre Noi</p>
        <p className="">Proiecte</p>
        <p className="">Sponsori</p>
        <button className="border-gray-50 bg-gradient-to-r from-blue-200 to-pink-600 px-4 py-2 rounded-full">
          Doneaza
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
