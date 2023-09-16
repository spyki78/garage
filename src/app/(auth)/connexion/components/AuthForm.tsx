"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi"

  const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ajoutez ici la logique pour envoyer les données au serveur
    signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then((callback: any) => {
      if (callback?.error) {
        toast.error("Email ou Mot de passe incorrect !");
        console.log("Email ou Mot de passe incorrect !");
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Connecté !");
        console.log("Connecté ! ");
        router.refresh();
        router.push("/dashboard");
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="lg:w-[400px] p-6 bg-gray-100 rounded-lg lg:mt-44 md:mt-36"
        onSubmit={handleSubmit}
      >
        <h2 className="lg:text-xl md:text-xl font-semibold mb-4 ">Se connecter</h2>

        
        <div className="mb-4">
          <label htmlFor="email" className="font-medium">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="font-medium">
            Mot de passe
          </label>

            <div className="password-input">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              className="w-full p-2 border rounded-md"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="password-toggle"
              style={{ cursor: "pointer", fontSize:"24px"}}
            >
               <div style={{ marginTop: "20px" }}>
                {isPasswordVisible ? <BiHide /> : <BiShow />}
              </div>
            </span>

          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white p-2 text-center bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
