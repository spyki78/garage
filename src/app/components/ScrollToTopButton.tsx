"use client";
import Image from "next/image";
import scrollUp from "../../../public/images/scrollUp.png";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher ou masquer le bouton en fonction de la position de défilement
    const handleScroll = () => {
      const isTop = window.scrollY < 200;
      setIsVisible(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
    style={{
      position: "fixed",
      bottom: "0.5rem", // Ajustez cette valeur selon vos besoins
      right: "-10px", // Ajustez cette valeur selon vos besoins
      visibility: isVisible ? "visible" : "hidden",
    }}
      className="scrollToTopButton"
    
      onClick={scrollToTop}
    >
      <Image
        className="pr-4"
        src={scrollUp}
        width={50}
        height={50}
        alt="logo account"
      />
    </button>
  );
};

export default ScrollToTopButton;
