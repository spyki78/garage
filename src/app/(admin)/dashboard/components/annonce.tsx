"use client";

import { useRouter } from "next/navigation";// permet de naviguer entre les pages
import toast from "react-hot-toast";// pour afficher des messages d'erreur ou de succès

export const Annonce = ({
  id,
  title,
  price,
  year,
  mileage,
  features,
  equipments,
 
}: any) => {
  const router = useRouter();
  const handleValid = async () => { // pour valider une annonce
    await fetch(`/api/annonce/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        res.json().then((errors: any) => {
          errors.map((error: any) => {
            toast.error(error);
          });
        });
      } else {
        toast.success("annonce validé");
        router.refresh();
      }
    });
  };

  const handleDelete = async () => { // Fonction asynchrone pour gérer la suppression d'une annonce
    await fetch(`/api/car/${id}`, { // Utilisation de l'API fetch pour envoyer une requête DELETE à l'URL spécifiée
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => { // Gestion de la réponse de la requête
      if (!res.ok) { // Si la réponse n'est pas OK (statut différent de 200)
        res.json().then((errors: any) => {// Analyse de la réponse JSON en cas d'erreur
          errors.map((error: any) => {
            toast.error(error);// Affichage des erreurs à l'aide d'une bibliothèque de notifications (toast)
          });
        });
      } else {// Si la réponse est OK
        toast.success("avis supprimé"); // Notification de succès
        router.refresh();// Rafraîchissement de la page (assumant l'utilisation d'un objet router avec une méthode refresh())
      }
    });
  };

  return (
    <div className=" ct my-4 mx-4 p-4 mb-8  border border-secondaryColor rounded-md items-center lg:w-[800px] md:w-[500px]">
      <div className="font-bold">Id:</div>
      <div className="mb-2 whitespace-pre-line">{id}</div>

      <div className="font-bold">Titre:</div>
      <div className="mb-2 whitespace-pre-line items-center">{title}</div>

      <div className="font-bold">Prix:</div>
      <div className="mb-2 items-center whitespace-pre-line">{price}</div>

      <div className="font-bold">Année:</div>
      <div className="mb-2 items-center whitespace-pre-line">{year.getFullYear}</div>

      <div className="font-bold">kilométrage:</div>
      <div className="mb-2 items-center whitespace-pre-line">{mileage}</div>

      <div className="font-bold">Caractéristiques:</div>
      <div className="mb-2 items-center whitespace-pre-line">{features}</div>

      <div className="font-bold">Equipements&Options:</div>
      <div className="mb-2 items-center whitespace-pre-line">{equipments}</div>
  
      <div className="font-bold">Supprimer:</div>
      <div>
        <button type="button" onClick={() => handleDelete()} className="mr-2">
          ⛔️
        </button>
      </div>
    </div>
  );
};
