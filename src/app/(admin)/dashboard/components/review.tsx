"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const Review = ({ id, name, message, rating, isValid }: any) => {
  const router = useRouter();
  const handleValid = async () => {
    await fetch(`/api/review/${id}`, {
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
        toast.success("avis validé");
        router.refresh();
      }
    });
  };

  const handleDelete = async () => {
    await fetch(`/api/review/${id}`, {
      method: "DELETE",
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
        toast.success("avis supprimé");
        router.refresh();
      }
    });
  };

  return (
    <div className=" av my-4 mx-4 md:mx-8 flex flex-col lg:flex-row lg:mx-8 p-4 mb-28 border border-secondaryColor rounded-md md:flex-row">
      <div className="font-bold mx-5 ">Id:</div>
      <div>{id}</div>
      <div className="font-bold mx-5">Nom:</div>
      <div>{name}</div>
      <div className="font-bold mx-5">Avis:</div>
      <div>{message}</div>
      <div className="font-bold mx-5">Note:</div>
      <div>{rating} étoiles</div>
      <div className="font-bold mx-5">Statut:</div>
      <div>{isValid ? "Valider ✅" : "En attente ❌"}</div>
      <div className="lg:flex-col lg:items-start">
        {isValid ? (
          <>Statut 🚫</>
        ) : (
          <>
            <button type="button" onClick={() => handleValid()}>
              Valider ✔️
            </button>
          </>
        )}
      </div>
      <div>
        <button type="button" onClick={() => handleDelete()}>
          Supprimer ⛔️
        </button>
      </div>
    </div>
  );
};