// import list
import { useRef, useState } from "react";
//
export default function Form() {
  //
  // variables first form
  const numeRef = useRef(null);
  const preNumeRef = useRef(null);
  const emailRef = useRef(null);
  const nrTelRef = useRef(null);
  const calitateRef = useRef(null);
  const solicitareRef = useRef(null);

  // variabls second form
  const numePacientRef = useRef(null);
  const prenumePacientRef = useRef(null);
  const varstaRef = useRef(null);
  const diagnosticRef = useRef(null);
  const documentMedicalRef = useRef(null);
  const istoricRef = useRef(null);
  const locatieRef = useRef(null);
  const spitalRef = useRef(null);
  const sectieRef = useRef(null);
  const numeDoctorRef = useRef(null);
  const nrDoctorRef = useRef(null);
  const emailDoctorRef = useRef(null);
  const tratareRoRef = useRef(null);
  const [tratareRoOption, setTratareRoOption] = useState("");
  const transportRef = useRef(null);
  const [transportOption, setTransportOption] = useState("");
  const dataInternareRef = useRef(null);
  const [dataInternare, setDataInternare] = useState("");
  const acceptPrimireRef = useRef(null);
  const [acceptPrimire, setAcceptPrimire] = useState("");
  const dataAsteptareRef = useRef(null);
  const [dataAsteptare, setDataAsteptare] = useState("");
  const contactClinicaRef = useRef(null);
  const locPlecareRef = useRef(null);
  const locDestinatieRef = useRef(null);
  const insotitorRef = useRef(null);
  const transferRef = useRef(null);
  const alteNevoiRef = useRef(null);
  const alteMentiuniRef = useRef(null);
  const tipDocumentCalatorieRef = useRef(null);
  const documentCalatorieRef = useRef(null);

  // useState
  const [formData, setFormData] = useState({});
  const [solicitare, setSolicitare] = useState(null);

  // submit form handler => sign up
  const handleSubmit = (event) => {
    event.preventDefault();
    if (solicitare == 1) {
      // pentru a doua opinie medicala
      const formData = {
        nume: numeRef.current.value,
        prenume: preNumeRef.current.value,
        email: emailRef.current.value,
        nrTel: nrTelRef.current.value,
        calitate: calitateRef.current.value,
        solicitare: "A doua Opinie Medicala",
        numePacient: numePacientRef.current.value,
        prenumePacient: prenumePacientRef.current.value,
        varstaPacient: varstaRef.current.value,
        diagnosticPacient: diagnosticRef.current.value,
        documentMedical: documentMedicalRef.current.files[0],
        istoricPacient: istoricRef.current.value,
        tratareRo: tratareRoRef.current.value,
        locatie: locatieRef.current.value,
        spital: spitalRef.current.value,
        sectie: sectieRef.current.value,
        numeDoctor: numeDoctorRef.current.value,
        nrDoctor: nrDoctorRef.current.value,
        emailDoctor: emailDoctorRef.current.value,
        dataInternare: dataInternareRef.current.value,
      };
    } else if (solicitare == 2) {
      // pentru transport aerian
      const formData = {
        nume: numeRef.current.value,
        prenume: preNumeRef.current.value,
        email: emailRef.current.value,
        nrTel: nrTelRef.current.value,
        calitate: calitateRef.current.value,
        solicitare: solicitareRef.current.value,
        numePacient: numePacientRef.current.value,
        prenumePacient: prenumePacientRef.current.value,
        varstaPacient: varstaRef.current.value,
        diagnosticPacient: diagnosticRef.current.value,
        documentMedical: documentMedicalRef.current.files[0],
        istoricPacient: istoricRef.current.value,
        tratareRo: tratareRoRef.current.value,
        tipTransport: "Aerian",
        acceptPrimire: acceptPrimireRef.current.value,
        dataAsteptare: dataAsteptareRef.current.value,
        contactClinica: contactClinicaRef.current.value,
        locPlecare: locPlecareRef.current.value,
        locDestinatie: locDestinatieRef.current.value,
        insotitor: insotitorRef.current.value,
        tipDocumentCalatorie: tipDocumentCalatorieRef.current.value,
        documentCalatorie: documentCalatorieRef.current.files[0],
        transfer: transferRef.current.value,
        alteNevoi: alteNevoiRef.current.value,
        alteMentiuni: alteMentiuniRef.current.value,
      };
    } else if (solicitare == 3) {
      // pentru transport terestru
      const formData = {
        nume: numeRef.current.value,
        prenume: preNumeRef.current.value,
        email: emailRef.current.value,
        nrTel: nrTelRef.current.value,
        calitate: calitateRef.current.value,
        solicitare: solicitareRef.current.value,
        numePacient: numePacientRef.current.value,
        prenumePacient: prenumePacientRef.current.value,
        varstaPacient: varstaRef.current.value,
        diagnosticPacient: diagnosticRef.current.value,
        documentMedical: documentMedicalRef.current.files[0],
        istoricPacient: istoricRef.current.value,
        tratareRo: tratareRoRef.current.value,
        tipTransport: "Terestru",
        acceptPrimire: acceptPrimireRef.current.value,
        dataAsteptare: dataAsteptareRef.current.value,
        contactClinica: contactClinicaRef.current.value,
        locPlecare: locPlecareRef.current.value,
        locDestinatie: locDestinatieRef.current.value,
        insotitor: insotitorRef.current.value,
        tipDocumentCalatorie: tipDocumentCalatorieRef.current.value,
        documentCalatorie: documentCalatorieRef.current.files[0],
        transfer: transferRef.current.value,
        alteNevoi: alteNevoiRef.current.value,
        alteMentiuni: alteMentiuniRef.current.value,
      };
    }

    setFormData(formData);

    // reinitializing the refs
    numeRef.current.value = "";
    preNumeRef.current.value = "";
    emailRef.current.value = "";
    nrTelRef.current.value = "";
    calitateRef.current.value = "";
    solicitareRef.current.value = "";
    numePacientRef.current.value = "";
    prenumePacientRef.current.value = "";
    varstaRef.current.value = "";
    diagnosticRef.current.value = "";
    documentMedicalRef.current.value = "";
    istoricRef.current.value = "";
    tratareRoRef.current.value = "";
    locatieRef.current.value = "";
    spitalRef.current.value = "";
    sectieRef.current.value = "";
    numeDoctorRef.current.value = "";
    nrDoctorRef.current.value = "";
    emailDoctorRef.current.value = "";
    dataInternareRef.current.value = "";
    transportRef.current.value = "";
    acceptPrimireRef.current.value = "";
    dataAsteptareRef.current.value = "";
    contactClinicaRef.current.value = "";
    locPlecareRef.current.value = "";
    locDestinatieRef.current.value = "";
    insotitorRef.current.value = "";
    tipDocumentCalatorieRef.current.value = "";
    documentCalatorieRef.current.value = "";
    transferRef.current.value = "";
    alteNevoiRef.current.value = "";
    alteMentiuniRef.current.value = "";
  };
  console.log(formData);
  return (
    <form
      className="p-8 bg-pink-300/30 rounded-2xl mt-8"
      onSubmit={handleSubmit}
    >
      {!solicitare && (
        <>
          {/* title */}
          <h2 className="tracking-widest text-gray-950/30 uppercase montserrat font-semibold mb-8 text-2xl">
            Date Personale
          </h2>
          {/* div nume */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="poppins text-lg font-semibold">Nume</h2>
              <input
                required
                type="text"
                ref={numeRef}
                placeholder="Numele dvs."
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none capitalize text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div prenume */}
            <div>
              <h2 className="poppins text-lg font-semibold">Prenume</h2>
              <input
                required
                type="text"
                ref={preNumeRef}
                placeholder="Prenumele dvs."
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none capitalize text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div email */}
            <div>
              <h2 className="poppins text-lg font-semibold">Email</h2>
              <input
                required
                type="email"
                ref={emailRef}
                placeholder="nume.prenume@gmail.com"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div telefon */}
            <div>
              <h2 className="poppins text-lg font-semibold">Nr. Telefon</h2>
              <input
                required
                type="text"
                ref={nrTelRef}
                placeholder="+4074 795 250"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div calitate fata de pacient */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Calitate fata de pacient
              </h2>
              <input
                required
                type="text"
                ref={calitateRef}
                placeholder="ex. Parinte"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div solicitare */}
            <div>
              <h2 className="poppins text-lg font-semibold">Solicitare</h2>
              <select
                onChange={() => {
                  setSolicitare(solicitareRef.current.value);
                }}
                ref={solicitareRef}
                placeholder="Solicitarea dvs."
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              >
                <option value="">-- Selecteaza --</option>
                <option value={1}>A doua opinie Medicala</option>

                <option value={2}>Aerian</option>
                <option value={3}>Terestru</option>
              </select>
            </div>
          </div>
        </>
      )}
      {solicitare && solicitare == 1 && (
        <>
          <div className="flex items-center justify-start mb-12">
            <img
              src="/arrow.svg"
              alt="/"
              className="1/12 mr-4 cursor-pointer hover:scale-105 ease-in-out duration-75"
              onClick={() => setSolicitare(null)}
            />
            {/* part a doua opinie */}
            {/* title */}
            <h2 className="tracking-widest text-gray-950/30 uppercase montserrat font-semibold  text-2xl">
              A doua opinie medicala
            </h2>
          </div>
          {/* div nume pacient */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="poppins poppins text-lg font-semibold">
                Numele Pacientului
              </h2>
              <input
                required
                type="text"
                ref={numePacientRef}
                placeholder="Numele Pacientului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div prenume pacient */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Prenumele Pacientului
              </h2>
              <input
                required
                type="text"
                ref={prenumePacientRef}
                placeholder="Prenumele Pacientului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div varsta pacient */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Varsta Pacientului
              </h2>
              <input
                required
                type="number"
                ref={varstaRef}
                placeholder="Varsta Pacientului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div diagnostic actual */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Diagnostic Actual
              </h2>
              <input
                required
                type="text"
                ref={diagnosticRef}
                placeholder="Diagnosticul Pacientului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div documente */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Document Medical
              </h2>
              <input
                required
                type="file"
                ref={documentMedicalRef}
                className="file:bg-pink-300 file:cursor-pointer file:border-0 file:rounded-md file:mr-2 w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20 poppins text-sm"
              />
            </div>
            {/* div anamneza */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Istoricul Pacientului
              </h2>
              <input
                required
                type="text"
                ref={istoricRef}
                placeholder="Istoric"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div tratament in ro */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Se Poate Trata in Romania ?
              </h2>
              <select
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
                ref={tratareRoRef}
                value={tratareRoOption}
                onChange={() => {
                  setTratareRoOption(tratareRoRef.current.value);
                }}
              >
                <option value="">-- Selecteaza --</option>
                <option value="Da">Da</option>
                <option value="Nu">Nu</option>
                <option value="Nu stiu">Nu stiu</option>
                <option value="Nu inca">Nu inca</option>
              </select>
            </div>
            {/* div unde e pacientul */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Unde Se Afla Pacientul
              </h2>
              <input
                required
                type="text"
                ref={locatieRef}
                placeholder="Locatie"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div spitalul pacientului */}
            <div>
              <h2 className="poppins text-lg font-semibold">Spital</h2>
              <input
                required
                type="text"
                ref={spitalRef}
                placeholder="Nume Spital"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div sectie spital la care se afla pacientul */}
            <div>
              <h2 className="poppins text-lg font-semibold">Sectie Spital</h2>
              <input
                required
                type="text"
                ref={sectieRef}
                placeholder="Sectie Spital"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div nume + prenume doctor */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Numele Doctorului
              </h2>
              <input
                required
                type="text"
                ref={numeDoctorRef}
                placeholder="Numele Doctorului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div tel doctor */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Nr. Telefon Doctor
              </h2>
              <input
                required
                type="text"
                ref={nrDoctorRef}
                placeholder="+4074 876 178"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div email doctor */}
            <div>
              <h2 className="poppins text-lg font-semibold">Email Doctor</h2>
              <input
                required
                type="email"
                ref={emailDoctorRef}
                placeholder="nume.prenume@gmail.com"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div data internare */}
            <div>
              <h2 className="poppins text-lg font-semibold">Data Internare</h2>
              <input
                required
                type="date"
                ref={dataInternareRef}
                value={dataInternare}
                onChange={() =>
                  setDataInternare(dataInternareRef.current.value)
                }
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
          </div>
          <button className="poppins text-md font-semibold w-1/3 mt-8 capitalize bg-pink-500 text-pink-50 py-2 rounded-full hover:scale-105 ease-in-out duration-300">
            trimite
          </button>
        </>
      )}
      {solicitare && solicitare > 1 && (
        <>
          {/* part transport */}
          {/* title */}
          <div className="flex items-center justify-start mb-12">
            <img
              src="/arrow.svg"
              alt="/"
              className="1/12 mr-4 cursor-pointer hover:scale-105 ease-in-out duration-75"
              onClick={() => setSolicitare(null)}
            />
            {/* part a doua opinie */}
            {/* title */}
            <h2 className="tracking-widest text-gray-950/30 uppercase montserrat font-semibold text-2xl">
              {solicitare == 2 ? "Transport Aerian" : "Transport Terestru"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="poppins poppins text-lg font-semibold">
                Numele Pacientului
              </h2>
              <input
                required
                type="text"
                ref={numePacientRef}
                placeholder="Numele Pacientului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div prenume pacient */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Prenumele Pacientului
              </h2>
              <input
                required
                type="text"
                ref={prenumePacientRef}
                placeholder="Prenumele Pacientului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div varsta pacient */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Varsta Pacientului
              </h2>
              <input
                required
                type="number"
                ref={varstaRef}
                placeholder="Varsta Pacientului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div diagnostic actual */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Diagnostic Actual
              </h2>
              <input
                required
                type="text"
                ref={diagnosticRef}
                placeholder="Diagnosticul Pacientului"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div documente */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Document Medical
              </h2>
              <input
                required
                type="file"
                ref={documentMedicalRef}
                className="file:bg-pink-300 file:cursor-pointer file:border-0 file:rounded-md file:mr-2 w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20 poppins text-sm"
              />
            </div>
            {/* div anamneza */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Istoricul Pacientului
              </h2>
              <input
                required
                type="text"
                ref={istoricRef}
                placeholder="Istoric"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div tratament in ro */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Se Poate Trata in Romania ?
              </h2>
              <select
                required
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
                ref={tratareRoRef}
                value={tratareRoOption}
                onChange={() => {
                  setTratareRoOption(tratareRoRef.current.value);
                }}
              >
                <option value="">-- Selecteaza --</option>
                <option value="Da">Da</option>
                <option value="Nu">Nu</option>
                <option value="Nu stiu">Nu stiu</option>
                <option value="Nu inca">Nu inca</option>
              </select>
            </div>
            {/* div accept primire strainatate */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Accept Primire Strainatete
              </h2>
              <select
                required
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
                ref={acceptPrimireRef}
                value={acceptPrimire}
                onChange={() => {
                  setAcceptPrimire(acceptPrimireRef.current.value);
                }}
              >
                <option value="">-- Selecteaza --</option>
                <option value="Da">Da</option>
                <option value="Nu">Nu</option>
                <option value="Nu stiu">Nu stiu</option>
                <option value="Nu inca">Nu inca</option>
              </select>
            </div>
            {/* div data asteptare strainatate */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Data Asteptare Strainate
              </h2>
              <input
                required
                type="date"
                ref={dataAsteptareRef}
                value={dataAsteptare}
                onChange={() =>
                  setDataAsteptare(dataAsteptareRef.current.value)
                }
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div contact clinica din strainate */}
            <div>
              <h2 className="poppins text-lg font-semibold">Contact Clinica</h2>
              <input
                required
                type="text"
                ref={contactClinicaRef}
                placeholder="Numele Clinicii"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div locatie din care pleaca pacientul */}
            <div>
              <h2 className="poppins text-lg font-semibold">Loc Plecare</h2>
              <input
                required
                type="text"
                ref={locPlecareRef}
                placeholder="Locul de plecare"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div locatie la care trebuie sa ajunga pacientul */}
            <div>
              <h2 className="poppins text-lg font-semibold">Loc Destinatie</h2>
              <input
                required
                type="text"
                ref={locDestinatieRef}
                placeholder="Locul destinatiei"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div insotitorul pacientului */}
            <div>
              <h2 className="poppins text-lg font-semibold">Insotitor</h2>
              <input
                required
                type="text"
                ref={insotitorRef}
                placeholder="Parinti / rude / apropiati"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div tip document calatorie */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Tip Document Calatorie
              </h2>
              <input
                required
                type="text"
                ref={tipDocumentCalatorieRef}
                placeholder="ex. Ambulanta"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div document pdf calatorie */}
            <div>
              <h2 className="poppins text-lg font-semibold">
                Document Calatorie
              </h2>
              <input
                required
                type="file"
                ref={documentCalatorieRef}
                className="file:bg-pink-300 file:cursor-pointer file:border-0 file:rounded-md file:mr-2 w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20 poppins text-sm"
              />
            </div>
            {/* div tip documente transfer */}
            <div>
              <h2 className="poppins text-lg font-semibold">Transfer</h2>
              {/* de pus selector si cu varianta de mai multe */}
              <input
                required
                type="text"
                ref={transferRef}
                placeholder="E112"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div alte nevoi */}
            <div>
              <h2 className="poppins text-lg font-semibold">Alte nevoi</h2>
              <input
                required
                type="text"
                ref={alteNevoiRef}
                placeholder="ex. Ambulanta"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            {/* div alte mentiuni */}
            <div>
              <h2 className="poppins text-lg font-semibold">Alte mentiuni</h2>
              <input
                required
                type="text"
                ref={alteMentiuniRef}
                placeholder="ex. Ambulanta"
                className="poppins w-full py-2 px-4 rounded-2xl border-2 border-pink-500/50 mt-2 focus:outline-none  text-pink-500 focus:border-pink-500 placeholder:text-gray-950/20"
              />
            </div>
            <button className="poppins text-md font-semibold capitalize bg-pink-500 text-pink-50 py-2 rounded-full hover:scale-105 ease-in-out duration-300">
              trimite
            </button>
          </div>
        </>
      )}
    </form>
  );
}
