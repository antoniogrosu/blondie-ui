import Proiect from "./Proiect.jsx";
function ProiecteSection() {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-12">
        <Proiect
          img="/casuta.svg"
          project="Casuta Blondie"
          description="Primul centru postoperator pentru copiii a căror “acasă” nu există sau nu reprezintă un mediu de recuperare și dezvoltare prielnice după intervenții chirugicale.
          "
        />
        <Proiect
          img="/caravana.svg"
          project="Caravana Blondie"
          description="Cu ajutorul voluntarilor și al experților, Asociația Blondie va organiza caravane pentru a le ajuta, psihologic şi financiar, pe femeile care au o sarcină cu risc.
          "
        />
        <Proiect
          img="/sieu.svg"
          project="#ŞieusuntBlondie"
          description="”#șieusuntBlondie” este programul care aduce voluntari instruiți alături de copiii internați singuri în maternități și secții de pediatrie.
          "
        />
        <Proiect
          img="/salveaza.svg"
          project="Minute de zbor"
          description="Care este valoarea unui minut?Pentru copiii cu afecțiuni medicale grave, fiecare minut din zborul către spitalul din Europa care îi poate face bine, are valoarea orelor de viata care urmează. 
          "
        />
      </div>
    </div>
  );
}
export default ProiecteSection;
