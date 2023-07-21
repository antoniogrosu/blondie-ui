import Form from "./ContactPage/Form";
function Contact() {
  return (
    <div className="bg-pink-50 px-8 py-36 md:px-24">
      <h1 className="text-gray-950 text-4xl montserrat font-semibold">
        După completarea și trimiterea formularului vă vom contacta în cel mai
        scurt timp cu toate informațiile relevante.
      </h1>
      <Form />
    </div>
  );
}
export default Contact;
