import Card from "./Card";
export default function Transfer() {
  return (
    <div className="py-16">
      <h1 className="text-4xl montserrat text-gray-950 font-semibold">
        Transfer Bancar
      </h1>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <Card label="Cont in LEI" detail="RO37 INGB 0000 9999 0909 6711"></Card>
        <Card
          label="Cont in EURO"
          detail="RO34 INGB 0000 9999 0909 6765"
        ></Card>
      </div>
      <p className="text-gray-950/50 poppins mt-8">
        Deschise la ING Bank – sucursala Obregia
        <br />
        Asociația Blondie – Împarte pentru altă parte
        <br /> C.U.I. 40914732
      </p>
    </div>
  );
}
