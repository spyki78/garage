import { Testimonial } from "./Testimonial";
import LeaveReview from "./LeaveReview";
import avis from "./../../../../public/images/avis.jpg";

export const SectionTestimonials = ({reviews}:any) => {


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
        {reviews.map(({ id, message, name, rating } :any) => (
          <Testimonial
            key={id}
            image={avis}
            message={message}
            name={name}
            rating={rating}
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
