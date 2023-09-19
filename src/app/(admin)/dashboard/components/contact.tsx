"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const Contact = ({ id, object, firstName, lastName, email, phone,message, isValid }: any) => {
  const router = useRouter();
  const handleValid = async () => {
    await fetch(`/api/contact/${id}`, {
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
    await fetch(`/api/contact/${id}`, {
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
    <div className=" ct my-4 mx-4 p-4 mb-8  border border-secondaryColor rounded-md items-center lg:w-[800px] md:w-[500px]">
      <div className="font-bold">Id:</div>
      <div className="mb-2 whitespace-pre-line">{id}</div>

      <div className="font-bold">Objet:</div>
      <div className="mb-2 whitespace-pre-line items-center">{object}</div>

      <div className="font-bold">Prénom:</div>
      <div className="mb-2 items-center whitespace-pre-line">{firstName}</div>

      <div className="font-bold">Nom:</div>
      <div className="mb-2 items-center whitespace-pre-line">{lastName}</div>

      <div className="font-bold">Email:</div>
      <div className="mb-2 items-center whitespace-pre-line">{email}</div>

      <div className="font-bold">Téléphone:</div>
      <div className="mb-2 items-center whitespace-pre-line">{phone}</div>

      <div className="font-bold">Message:</div>
      <div className="mb-2 items-center whitespace-pre-line">{message}</div>

      <div className="font-bold">Supprimer:</div>
      <div>
        <button type="button" onClick={() => handleDelete()} className="mr-2">
          ⛔️
        </button>
      </div>
    </div>
  );
};