import { authOptions } from "@/app/api/review/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(authOptions);

  // redirection vers connexion si non connecté
  if (session === null) {
    redirect("/connexion");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <p>dashboard</p>
      <p>bienvenue {session?.user?.email}</p>
    </div>
  );
};

export default Page;
