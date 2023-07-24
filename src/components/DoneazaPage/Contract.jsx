export default function Contract(props) {
  return (
    <div className="bg-pink-300/30 py-4 px-4 text-center rounded-2xl">
      <div className="border-t-1 border-gray-950/20 py-4">
        <h3 className="text-xl text-pink-500 poppins font-semibold mb-4">
          Persoană {props.persoana}
        </h3>
        <p className="poppins text-gray-950">{props.instructiune}</p>
      </div>
      <div className="flex items-center justify-center border-t-2 border-gray-950/20 py-4">
        <p className="poppins mr-2 text-gray-950">Descarca {props.document}</p>
        <img
          src="/download.svg"
          className="w-2/12 h-2/12 md:w-8 md:h-8 cursor-pointer"
        />
      </div>
      <div className="border-t-2 border-gray-950/20 py-4">
        <p className="text-gray-950 poppins">
          Completează-l cu datele tale, printează-l și semneaza-l
        </p>
      </div>
      <div className="border-t-2 border-gray-950/20 py-4">
        <p className="text-gray-950 poppins">
          Trimite-l către noi la adresa{" "}
          <span className="font-semibold text-pink-500">
            contact@asociatia-blondie.ro
          </span>{" "}
          sau în format fizic, la adresa: Asociația Blondie, strada Mirăslău,
          nr. 42-44, Popești Lerodeni, Ilfov, cod poștal 759214
        </p>
      </div>
    </div>
  );
}
