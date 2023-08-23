"use client";

// Importations des modules nécessaires
import { useState, ChangeEvent, FormEvent } from "react";

// Définition du composant LeaveReview
const LeaveReview = () => {
  // Etat pour limiter le nombre de caractères
  const MAX_NAME_LENGTH = 20;
  const MAX_REVIEW_LENGTH = 80;

  // État pour le nom de l'utilisateur
  const [name, setName] = useState("");

  // État pour l'avis de l'utilisateur
  const [review, setReview] = useState("");

  // État pour la note attribuée par l'utilisateur
  const [rating, setRating] = useState(0);

  // Gestionnaire de changement du nom
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Gestionnaire de limitation de caractère sur Name
    const newName = e.target.value.slice(0, MAX_NAME_LENGTH);
    setName(e.target.value);
  };

  // Gestionnaire de changement de la note
  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //Gestionnaire de limitation de caractère sur Commentaire
    const newReview = e.target.value.slice(0, MAX_REVIEW_LENGTH);
    setReview(e.target.value);
  };

  // Gestionnaire de soumission du formulaire
  const handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Envoyer  le nom l'avis et la note au backend pour les traiter ou les sauvegarder
    console.log("Nom :", name);
    console.log("Avis soumis :", review);
    console.log("Note attribuée :", rating);

    // Réinitialiser le formulaire après l'envoi
    setName("");
    setReview("");
    setRating(0);
  };

  return (
    <div className=" top shadow-lg p-5 lg:h-[400px] lg:w-[400px] md:mt-10 md:mb-10 my-auto mx-auto">
      <h2 className="avis text-center">Laisser un avis</h2>
      <form onSubmit={handleSubmit}>
        <div className="pt-10">
          <label htmlFor="name">Nom :</label>
          <input
            className="ml-5"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            maxLength={MAX_NAME_LENGTH}
            required
          />
        </div>

        <div className="py-10 flex items-center">
          <label htmlFor="review">Avis :</label>
          <textarea
            className="
          parler ml-5"
            id="review"
            value={review}
            onChange={handleReviewChange}
            maxLength={MAX_REVIEW_LENGTH}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Note :</label>
          <select
            className="ml-5"
            id="rating"
            value={rating}
            onChange={handleRatingChange}
            required
          >
            <option value="0">Sélectionner</option>
            <option className=" text-primaryColor font-bold text-xl" value="1">★☆☆☆☆</option>
            <option className=" text-primaryColor font-bold text-xl" value="2">★★☆☆☆</option>
            <option className=" text-primaryColor font-bold text-xl" value="3">★★★☆☆</option>
            <option className=" text-primaryColor font-bold text-xl" value="4">★★★★☆</option>
            <option className=" text-primaryColor font-bold text-xl" value="5">★★★★★</option>
          </select>
        </div>

        <div className="w-full">
          <button
            className="w-full py-2 mt-5 text-center bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl"
            type="submit"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveReview;
