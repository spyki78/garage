// components/CarCard.tsx
"use client";

// Import des icônes de flèche pour la galerie
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import des modules nécessaires
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Interface pour représenter les données de la voiture
interface CarData {
  title: string;
  price: any;
  year: any;
  mileage: number;
  features: string;
  equipments: string;
  photos: string[];
}

// Composant CarCard
function CarCard({
  title,
  price,
  year,
  mileage,
  features,
  equipments,
  photos,
}: CarData) {
  // Etat pour suivre l'index de l'image actuelle dans la galerie
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Etat pour suivre la visibilité de la galerie
  const [showGallery, setShowGallery] = useState(false);

  // Etat pour suivre l'affichage du formulaire de contact
  const [showContactForm, setShowContactForm] = useState(false);

  // Gestionnaire de clic pour afficher/masquer le formulaire de contact
  const handleContactFormClick = () => {
    setShowContactForm(!showContactForm);
  };

  // Etat pour stocker les données du formulaire de contact
  const [formData, setFormData] = useState({
    subject: `${title}`,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Gestionnaire de clic sur l'image principale pour afficher/masquer la galerie
  const handleImageClick = () => {
    setShowGallery(!showGallery);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let truncatedValue = value;

    // Appliquer une limite de caractères pour les champs prénom, nom, e-mail et téléphone à 30 caractères
    if (
      name === "firstName" ||
      name === "lastName" ||
      name === "email" ||
      name === "phone"
    ) {
      const maxChars = 30;
      truncatedValue = value.slice(0, maxChars);
    }

    // Appliquer une limite de caractères pour le champ message à 100 caractères
    if (name === "message") {
      const maxChars = 100;
      truncatedValue = value.slice(0, maxChars);
    }

    setFormData({ ...formData, [name]: truncatedValue });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Ici, vous pouvez envoyer les données du formulaire au backend ou effectuer d'autres actions.
    console.log(formData);
  };
  // Données de la voiture

  // Tableau des sources des images pour la galerie
  const carImageSrc: string[] = [];

  photos.map((photo) => {
    carImageSrc.push(photo);
  });

  // Gestionnaire de clic pour passer à l'image précédente dans la galerie
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carImageSrc.length - 1 : prevIndex - 1
    );
  };

  // Gestionnaire de clic pour passer à l'image suivante dans la galerie
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carImageSrc.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Utilisez useEffect pour démarrer l'animation d'opacité au chargement de la page
  useEffect(() => {
    // Mettez à jour l'opacité après un court délai (par exemple, 500 ms) pour laisser le temps aux images de se charger complètement.
    setTimeout(() => {
      setInitialOpacity(false);
    }, 500);
  }, []);

  // Utilisez un état pour suivre si l'animation initiale d'opacité doit être appliquée
  const [initialOpacity, setInitialOpacity] = useState(true);

  // Rendu du composant CarCard
  return (
    <div className="p-4 md:p-0 md:w-[300px] mx-auto md:mt-80 lg:mt-80">
      <motion.div
        className="cursor-pointer flex justify-center"
        initial={{ opacity: initialOpacity ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onClick={handleImageClick}
      >
        <Image
          className="vt1 flex flex-col justify-center items-center lg:h-[200px] w-[300px] object-contain md:-mt-52"
          src={photos[0]}
          width={500}
          height={500}
          alt="logo account"
        />
      </motion.div>

      {/* Photo Gallery (Carousel) */}
      {showGallery && (
        <div className="gal1">
          <h3 className="m-24 text-lg font-bold flex justify-center border-2 rounded-xl border-primaryColor">
            Galerie
          </h3>

          {/* Affichage de l'image actuelle */}
          <div className="flex flex-col justify-center items-center">
            <Image
              className="vt2 h-[400px] w-[350px] md:w-[325px] object-contain -mt-32"
              src={carImageSrc[currentImageIndex]}
              width={500}
              height={500}
              alt={`Image ${currentImageIndex + 1}`}
            />
          </div>

          {/* Boutons de navigation */}
          <div className="flex justify-center">
            <button
              onClick={handlePrevClick}
              className="px-4 py-2 lg:mr-32 bg-primaryColor m-10 p-2 opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl"
            >
              <FaChevronLeft /> {/* Icône de flèche gauche */}
            </button>
            <button
              onClick={handleNextClick}
              className="px-4 py-2 bg-primaryColor m-10 p-2 opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl"
            >
              <FaChevronRight /> {/* Icône de flèche droite */}
            </button>
          </div>
        </div>
      )}

      {/* Section des informations sur la voiture */}
      <section className="border-2 border-secondaryColor rounded-xl p-5">
        {/* Titre de l'annonce */}
        <h2 className="text-xl font-bold flex justify-center items-center shadow-lg p-2 rounded-lg">
          {title}
        </h2>

        {/* Descriptif de la voiture de la voiture  */}
        <div className="mt-4">
          <p>Prix : {price}</p>
          <p>Année : {year}</p>
          <p>Kilométrage : {mileage}</p>
        </div>

        {/* Caractéristiques de la voiture  */}
        <div className="mt-4 ">
          <h3 className="flex justify-center items-center text-lg font-bold">
            Caractéristiques :
          </h3>
          <p>{features}</p>
        </div>

        {/* Équipements et Options */}
        <div className="mt-4">
          <h3 className="text-lg font-bold flex justify-center items-center">
            Équipements et Options :
          </h3>
          <p>{equipments}</p>
        </div>
      </section>

      {/* Formulaire de contact */}
      <div className="mt-4">
        <h3
          className=" text-lg cursor-pointer bg-primaryColor m-10 p-2 opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl"
          onClick={handleContactFormClick}
        >
          Formulaire de contact :
        </h3>
        {/* Affichage conditionnel du formulaire de contact */}
        {showContactForm && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="subject">Objet :</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              readOnly
              className="w-full border border-gray-300 p-2 rounded mb-2"
              placeholder="Automatique Peugeot 3008"
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
              placeholder="Bonjour, je suis intéréssé par ce vehicule pourriez-vous me contacter merci."
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
        )}
      </div>
    </div>
  );
}
export default CarCard;
