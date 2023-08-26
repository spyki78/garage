
"use client";
function page() {
  return (
    <div className="flex w-full h-[300px] mt-80 bg-primaryColor">page admin</div>
  )
}

// pages/login.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    // gestion de la connexion
    console.log('Adresse e-mail:', email);
    console.log('Mot de passe:', password);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3 p-6 bg-gray-100 rounded-lg mt-44" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 ">Se connecter</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-medium">Mot de passe</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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

export default LoginPage;
