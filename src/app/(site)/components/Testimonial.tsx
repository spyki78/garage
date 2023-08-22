"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
type TestimonialProps = {
  image: any;
  reviews: any;
  name: string;
  comment: string;
};

export const Testimonial = ({
  image,
  reviews,
  name,
  comment,
}: TestimonialProps) => {
  // État pour afficher les étoiles basées sur le nombre de reviews
  const [stars, setStars] = useState("");
  useEffect(() => {
    // Mise à jour des étoiles en fonction du nombre de reviews
    for (let index = 0; index < 5; index++) {
      if (index < reviews) {
        setStars((s) => s + "★");
      } else {
        setStars((s) => s + "☆");
      }
    }
  }, [reviews]);

  return (
    <article className="flex flex-col shadow-lg p-4 w-[275px] sm:items-center lg:mt-20 md:mt-20">
      <div className="flex justify-center items-center">
        <div>
          {/* Affichage de l'image */}
          <Image src={image} alt={name} height={100} width={100} />
        </div>
        <div className="flex flex-col">
          {/* Affichage du nom */}
          <h3>{name}</h3>
          {/* Affichage des étoiles */}
          <span className="text-primaryColor text-2xl">{stars}</span>
        </div>
      </div>
      <div className="p-8">
        {/* Affichage du commentaire */}
        <p>{comment}</p>
      </div>
    </article>
  );
};
