"use client";

// Importations des modules nécessaires
import { useState, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { GrPowerReset } from "react-icons/gr";

// Définition du composant LeaveReview
const LeaveReview = () => {
  // État pour le nom de l'utilisateur
  const [name, setName] = useState("");

  // État pour l'avis de l'utilisateur
  const [message, setMessage] = useState("");

  // État pour la note attribuée par l'utilisateur
  const [rating, setRating] = useState(0);

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      message,
      rating,
    };

    console.log(formData);

    /* Envoi des données à l'API */
    await fetch("/api/review", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      /*pour envoi API avec ou pas error*/
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res);
      if (!res.ok) {
        res.json().then((errors: any) => {
          errors.map((error: any) => {
            /* Affichage des messages d'erreur dynamiquement */
            console.log(error.message);
            toast.error(error.message);
          });
        });
      } else {
        toast.success("Votre avis est crée");
      }
    });
  };

  
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Réinitialiser les valeurs du formulaire
    setName("");
    setMessage("");
    setRating(0);
  };

  return (
    <div className=" top shadow-lg p-5 lg:h-[400px] lg:w-[400px] md:mt-10 md:mb-10 my-auto mx-auto">
      {/* Titre de la section */}
      <h2 className="avis text-center">Laisser un avis</h2>
      <form onSubmit={handleSubmit}>
        <div className="pt-10">
          <label htmlFor="name">Nom :</label>
          {/* Champ de saisie pour le nom de l'utilisateur */}
          <input
            className="ml-5"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="py-10 flex items-center">
          <label htmlFor="review">Avis :</label>
          {/* Zone de texte pour l'avis de l'utilisateur */}
          <textarea
            className="
          parler ml-5"
            id="review"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Note :</label>
          {/* Menu déroulant pour sélectionner une note */}
          <select
            className="ml-5"
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            {/* Option par défaut */}
            <option value="0">Sélectionner</option>
            <option className=" text-primaryColor font-bold text-xl" value="1">
              ★☆☆☆☆
            </option>
            <option className=" text-primaryColor font-bold text-xl" value="2">
              ★★☆☆☆
            </option>
            <option className=" text-primaryColor font-bold text-xl" value="3">
              ★★★☆☆
            </option>
            <option className=" text-primaryColor font-bold text-xl" value="4">
              ★★★★☆
            </option>
            <option className=" text-primaryColor font-bold text-xl" value="5">
              ★★★★★
            </option>
          </select>
        </div>

        <div className="w-full flex justify-center">
          <button
            className="w-full py-2 mt-5 text-center bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl"
            type="submit"
          >
            Soumettre {/* Bouton de soumission du formulaire */}
          </button>

 {/* Bouton pour réinitialiser le formulaire */}
 <button
            className="mt-4 px-2 text-white rounded-md bg-primaryColor ml-4"
            type="button"
            onClick={handleReset}
          >
           <GrPowerReset />
          </button>
        </div>
      </form>
      </div>
    );
};

export default LeaveReview;
