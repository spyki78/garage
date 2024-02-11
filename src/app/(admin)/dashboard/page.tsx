import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/../libs/prismadb";
import { Reviews } from "./components/reviews";
import { Contacts } from "./components/contacts";
import { Annonces } from "./components/annonces";
import Link from "next/link";

// Définition de l'interface User pour spécifier les types des propriétés de l'utilisateur
interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  isAdmin?: boolean | null | undefined; // Ajoutez cette propriété pour indiquer que isAdmin est optionnel
}

export default async function Page() {
  // Récupération de la session utilisateur
  const session = await getServerSession(authOptions);

  // redirection vers la page de connexion si l'utilisateur n'est pas connecté
  if (session === null) {
    redirect("/connexion");
  }

  // Récupération des données utilisateur de la session
  const user: User = session?.user || {};

  // Vérification si l'utilisateur est administrateur
  const isAdmin = user.isAdmin || false;

  // Récupération des avis, des contacts et des annonces
  const reviews = await prisma.review.findMany();
  const contacts = await prisma.contact.findMany();
  const annonces = await prisma.annonce.findMany();

  return (
    <div className="flex flex-col">
      <p className="dh text-center text-3xl lg:mt-72 md:mt-72">
        Bienvenue {session?.user?.email && session?.user?.email.split("@")[0]}{" "}
        dans votre partie dashboard
      </p>

      {isAdmin && ( // Vérifie si l'utilisateur est administrateur avant de rendre le contenu suivant
        <div className="cursor-pointer lg:text-center justify-center lg:w-full flex items-center h-screen">
          {/* lien vers la page de création d'employé */}
          <Link
            className="lg:text-xl md:text-lg rounded-3xl pl-8 pr-8 pt-3 pb-3 bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50 border-lg"
            href="/dashboard/employe"
          >
            Ajouter un employé
          </Link>
        </div>
      )}
      <div className="flex flex-col">
        <h2 className="text-2xl my-12 text-center lg:mt-32">Avis</h2>
        <Reviews reviews={reviews} />
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl my-12 text-center lg:-mt-64">Message</h2>
        <Contacts contacts={contacts} />
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl my-12 text-center lg:-mt-64">Annonces</h2>
        <Annonces annonces={annonces} />
      </div>
    </div>
  );
}
