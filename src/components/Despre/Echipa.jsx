import CardEchipa from "./CardEchipa";
export default function Echipa() {
  return (
    <div className="py-16">
      <h1 className="font-semibold text-4xl montserrat text-gray-950">
        Echipa Noastra
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-8 mt-8">
        <CardEchipa img="/adelina.svg" name="Adelina Toncean" role="Fondator" />
        <CardEchipa
          img="/veronica.svg"
          name="Veronica Pricop"
          role="Președinte"
        />
        <CardEchipa
          img="/ioana.svg"
          name="Ioana Dinu"
          role="Manager de proiect"
        />
        <CardEchipa
          img="/robert.svg"
          name="Mitroi Robert"
          role="Director de Artă"
        />
      </div>
    </div>
  );
}
