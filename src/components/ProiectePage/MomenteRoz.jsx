import Lottie from "lottie-react";
import animationData from "./heart-animation.json";
import MomentRoz from "./MomentRoz";
function MomenteRoz() {
  return (
    <div className="py-16">
      <h1 className="montserrat text-4xl text-center w-full text-gray-950 font-semibold">
        Momente <span className="text-pink-500">Roz - De ce ?</span>
      </h1>
      <p className="poppins md:w-5/12 mx-auto  text-center mt-8 text-gray-950">
        Este culoarea pe care copiii cardiaci o au imediat după intervenția
        medicală care le salvează inimile. Roz înseamnă bine, înseamnă o inima
        sănătoasă.
      </p>
      <div className="w-7/12 mx-auto ">
        <div className="w-2/12  mx-auto">
          <div className="md:w-1/2 mx-auto">
            <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-8">
        <MomentRoz
          title="In ziua de Craciun, Rares zboara la Geneva"
          description="Zborul 124"
          img="/1.svg"
        />
        <MomentRoz
          title="Cine este Adelina Toncean, fata care aduce iubirea copiilor abandonati in spitale"
          description="Blondie este visul meu de cand un copil nascut cu o problema grava a intrat in viata mea si mi-a devenit copil."
          link="https://life.ro/cine-este-adelina-toncean-fata-care-aduce-iubirea-copiilor-abandonati-in-spitale-si-cum-a-ajuns-sa-infieze-doi-baieti-carora-nu-le-mai-dadea-nimeni-nici-o-sansa/"
          img="/2.svg"
        />
        <MomentRoz
          title="Acesta este ROZ, un calendar foarte special."
          description="Ei sunt o parte din copiii care au zburat pana la Cer si inapoi!"
          link="https://docs.google.com/forms/d/e/1FAIpQLSdWxLA3HcRDOgWzv0VTPQqdEPla6TGiyCuB5vjs_RvH85E4Ww/viewform"
          img="/3.svg"
        />
        <MomentRoz
          title="In plina pandemie, 3 bebelusi au fost dusi la operatie in Italia."
          description="Toti 3 copii dusi la Milano, au zburat cu un avion inchiriat, intubati si ventilati mecanic!"
          link="https://www.antena3.ro/actualitate/social/salvare-bebelusi-asociataia-blondie-catalin-carstoveanu-585033.html?fbclid=IwAR3jcQ07UyNq8svMYtCis-El6GvEIzskbcpfGrNCno_gXyuyCUKPrd9AfIA"
          img="/4.svg"
        />
        <MomentRoz
          title="Asociatia BLONDIE! Copiii bolnavi abandonati in spitale nu mai raman singuri!"
          description="Atunci cand m-am asezat sa scriu aceste randuri m-am gandit daca ar trebui sa scriu despre cate hibe are sistemul insitutional din Romania ..."
          link="https://superbebe.ro/sanatate/asociatia-blondie-copiii-bolnavi-abandonati-in-spitale-nu-mai-sunt-singuri/"
          img="/5.svg"
        />
        <MomentRoz
          title="Pentru tata, viata are alt ritm"
          description="Alaturi de Banca Transilvania, scriem povestile copiilor care au nevoie sa zboare in afara tarii sa se vindece de boala grava de care sufera."
          link="https://www.facebook.com/AsociatiaBlondie/photos/a.1078500462359930/2011058535770780/"
          img="/6.svg"
        />
      </div>
    </div>
  );
}
export default MomenteRoz;
