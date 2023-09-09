"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut().then((callback) => {
      router.refresh()
      router.push("/connexion");
    });
  };
  return (
    <button
      onClick={handleLogout}
      className="occ text-center lg:text-xl md:text-lg rounded-xl mt-20 pl-8 pr-8 pt-3 pb-3 md:ml-20 lg:mr-20 border-2 border-thirdColor bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50"
    >
      Déconnexion
    </button>
  );
};
