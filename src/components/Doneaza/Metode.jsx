import Card from "./Card";
export default function Metode() {
  return (
    <div className="py-16">
      <h1 className="text-4xl montserrat text-gray-950 font-semibold">
        Alte Metode
      </h1>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <Card label="Revolut" detail="Numar telefon: +40 757 494 293"></Card>
        <Card label="Revolut" detail="ID: @toncealbe"></Card>
        <Card label="Galantom" detail="Platforma de fundraising"></Card>
        <Card label="Paypal" detail="Cont in Beneficiul Asociatiei"></Card>
      </div>
    </div>
  );
}
