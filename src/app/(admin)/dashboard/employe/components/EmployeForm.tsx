"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi";

export const EmployeForm = () => {
      

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible,setIsPasswordVisible] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    console.log(formData);

    /* creation donnée dans API*/
    await fetch("/api/user", {
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
                /* message qui apparait dynamiquement*/
                console.log(error.message);
                toast.error(error.message)
            });
        });
      }
      else {
        toast.success("employe crée")
        
      }
    });

}
    
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="lg:w-[400px] p-6 bg-gray-100 rounded-lg lg:mt-44"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <label htmlFor="email">Adresse e-mail :</label>

          <input
            type="email"
            id="email"
            name="email"
            /* recuperer e mail*/
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-2"
            placeholder="Adresse email employe"
            required

          />
        </div>

        <div>
            
          <label htmlFor="password">Mot de passe</label>

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
        <div className="w-full">
          <button
            className="w-full py-2 mt-5 text-center bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50 rounded-xl"
            type="submit"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};
