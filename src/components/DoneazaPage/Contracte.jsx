import Contract from "./Contract";
export default function Contracte() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-semibold montserrat text-gray-950">
        Contracte
      </h1>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Contract
          persoana="Fizică"
          instructiune="Redirecționează 3,5% din impozitul pe anul 2023"
          document="Formularul"
        />
        <Contract
          persoana="Juridică"
          instructiune="Ne poți susține printr-o sponsorizare"
          document="Contractul"
        />
      </div>
    </div>
  );
}
