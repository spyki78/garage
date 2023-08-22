import { Testimonial } from "./Testimonial";
import LeaveReview from "./LeaveReview";
import avis from "./../../../../public/images/avis.jpg";

export const SectionTestimonials = () => {
  // Tableau des avis
  const array = [
    {
      id: 1,
      image: avis,
      reviews: 4,
      name: "Julien Duquan",
      comment:
        "Devis conforme à ma facture garage.Un service de qualité à un prix raisonnable.",
    },
    {
      id: 2,
      image: avis,
      reviews: 5,
      name: "Jean Cosda",
      comment: "Simplet et éfficace ! Très bonne expérience.",
    },
    {
      id: 3,
      image: avis,
      reviews: 4,
      name: "Gabriel Maliou",
      comment: "Service et accueil au top.",
    },

    
  ];
  return (
    <section>
      <div>
         {/* Titre de la section */}
        <h2 className="lg:text-3xl md:text-2xl sm:text-3xl uppercase text-center lg:mt-4 md:mt-4 sm:mt-4">
          On vous laisse la parole !
        </h2>
      </div>
      <div className=" ecran grid lg:grid-cols-3 lg:gap-20 md:grid-cols-2 md:gap-14 sm:grid-cols-1 gap-10 mt-10">
         {/* Affichage des témoignages */}
        {array.map(({ id, image, reviews, name, comment }) => (
          <Testimonial
            key={id}
            image={image}
            reviews={reviews}
            name={name}
            comment={comment}
          />
        ))}
      </div>
      <div className="flex justify-center lg:mt-20">
         {/* Composant LeaveReview pour permettre aux utilisateurs de laisser un avis */}
        <LeaveReview />
      </div>
    </section>
  );
};
