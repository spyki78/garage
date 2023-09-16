"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";


function Formulaire() {
  const router=useRouter()

  // Etat pour stocker les données du formulaire de contact
  const [formData, setFormData] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let truncatedValue = value;

    // Appliquer une limite de caractères pour les champs prénom, nom, e-mail et téléphone à 80 caractères
    if (
      name === "firstName" ||
      name === "lastName" ||
      name === "email" ||
      name === "subject" ||
      name === "phone"
    ) {
      const maxChars = 80;
      truncatedValue = value.slice(0, maxChars);
    }

    // Appliquer une limite de caractères pour le champ message à 300 caractères
    if (name === "message") {
      const maxChars = 500;
      truncatedValue = value.slice(0, maxChars);
    }

    setFormData({ ...formData, [name]: truncatedValue });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formD = {
      object: formData.subject,
      message: formData.message,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    };

    console.log(formD);

    /* Envoi des données à l'API */
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      /*pour envoi API avec ou pas error*/
      body: JSON.stringify(formD),
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
        router.refresh()
        toast.success("Votre message est crée");
      }
    });
  };
  return (
    <div className="w-10/12 flex justify-center">
      <form className="top" onSubmit={handleSubmit}>
        <label htmlFor="subject">Objet :</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-2"
          placeholder=""
          required
        />
        {/* Champ Prénom */}
        <label htmlFor="firstName">Prénom :</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-2"
          placeholder="Votre prénom"
          required
        />
        {/* Champ Nom */}
        <label htmlFor="lastName">Nom :</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-2"
          placeholder="Votre nom"
          required
        />
        {/* Champ Adresse e-mail */}
        <label htmlFor="email">Adresse e-mail :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-2"
          placeholder="Votre adresse e-mail"
          required
        />
        {/* Champ Téléphone */}
        <label htmlFor="phone">Téléphone :</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mb-2"
          placeholder="Votre numéro de téléphone"
          required
        />
        {/* Champ Message */}
        <label htmlFor="message">Votre message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className=" mess w-full border border-gray-300 p-2 rounded mb-2"
          placeholder=""
          required
        ></textarea>
        {/* Bouton Soumettre */}
        <button
          type="submit"
          className=" bg-primaryColor m-10 p-2 opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl "
        >
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default Formulaire;
