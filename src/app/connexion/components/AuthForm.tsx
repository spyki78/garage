/* eslint-disable react/no-unescaped-entities */
"use client";

import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Adresse e-mail:', email);
    console.log('Mot de passe:', password);
    // Ajoutez ici la logique pour envoyer les données au serveur
    signIn("credentials", {
        email,
        password,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            console.log("Email ou Mot de passe incorrect !");
          }
  
          if (callback?.ok && !callback?.error) {
            console.log("Connecté ! ")
          }
        })
  };

  return (
    <form className=" mx-auto mt-5" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Adresse e-mail :
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
          Mot de passe :
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl "
      >
        Valider
        </button>
    </form>
  );
};

export default SignUpForm;