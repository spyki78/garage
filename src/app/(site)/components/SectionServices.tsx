import { Service } from "./Service";
import voiture from "../../../../public/images/voiture.webp";
import suspension from "../../../../public/images/suspension.webp";
import roue from "../../../../public/images/roue.png";
import freinage from "../../../../public/images/freinage.png";
import distribution from "../../../../public/images/distribution.webp";
import direction from "../../../../public/images/direction.webp";
import mecano from "../../../../public/images/mecano.png";
import Image from "next/image";
export const SectionServices = () => {
  return (
    <section className="mt-64">
      <div className="fond flex bg-primaryColor justify-center items-center w-full">
        <h1 className="pub lg:text-3xl uppercase text-center mt-8 sm:text-1xl md:text-2xl ml-3">
          Nos entretiens et réparations auto
        </h1>
        <Image
          className=" mecano flex justify-center items-center lg:h-[200px] w-[275px] lg:ml-32 pr-5"
          src={mecano}
          width={500}
          height={500}
          alt="logo account"
        />
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:lg:gap-2 sm:grid-cols-1 sm:gap-0 pt-4 m-8 md:mt-10">
        <Service
          image={voiture}
          title="Prestations Fréquentes"
          description="Remplacement Disques & Plaquettes AV
Remplacement Plaquettes AV
Vidange de Base (filtre à huile)"
        />
        <Service
          image={roue}
          title="Pneus/Roues"
          description="
Changement de pneus avant et arrière
Contrôle du Parallélisme et Géométrie
Équilibrage des Pneus
Remplacement de roulement de roue"
        />
        <Service
          image={freinage}
          title="Freinage"
          description="Remplacement de câble de frein à main
Remplacement Disques & Plaquettes AR
Remplacement liquide de freins
Remplacement Plaquettes AR
"
        />
        <Service
          image={distribution}
          title="Distribution"
          description="Changement du kit de distribution
Remplacement de la courroie de distribution
"
        />
        <Service
          image={direction}
          title="Direction & Transmission"
          description="
Remplacement de biellettes de direction
Remplacement de cardan
Remplacement de cardan et soufflet de cardan
Remplacement rotule direction avant droit
Remplacement rotule direction avant gauche"
        />
        <Service
          image={suspension}
          title="Suspension"
          description="Remplacement Amortisseur AV
Remplacement d'une rotule de suspension
Remplacement de biellettes de suspension
Remplacement triangle ou bras de suspension

"
        />
      </div>
    </section>
  );
};
