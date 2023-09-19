import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/../libs/prismadb";
import { Reviews } from "./components/reviews";
import { Contacts } from "./components/contacts";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);

  // redirection vers connexion si non connecté
  if (session === null) {
    redirect("/connexion");
  }


  const reviews = await prisma.review.findMany();
  const contacts = await prisma.contact.findMany();

  return (
    <div className="flex flex-col">
      <p className=" dh text-center text-3xl lg:mt-72 md:mt-72">
        Bienvenue {session?.user?.email} dans votre dashboard
      </p>
      { (
        <div className="cursor-pointer lg:text-center justify-center lg:w-full mt-24 ">
          <Link className="lg:text-xl md:text-lg rounded-3xl  pl-8 pr-8 pt-3 pb-3 bg-primaryColor opacity-120 transition duration-300 ease-in-out hover:opacity-50 border-lg" href="/dashboard/employe">Ajouter un employé</Link>
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
    </div>
  );
}
