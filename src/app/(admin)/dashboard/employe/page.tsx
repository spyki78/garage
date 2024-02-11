import { getServerSession } from "next-auth";
import { EmployeForm } from "./components/EmployeForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);
  // redirection vers connexion si non connecté
  if (session === null) {
    redirect("/connexion");
  }
 
  const { isAdmin  } : any = session.user;
  // Vérifier si l'utilisateur est un administrateur
  if (!isAdmin) {
     // Rediriger l'utilisateur vers la page de connexion s'il n'est pas un administrateur
    redirect("/connexion");
  }

  return (
    <div>
      <EmployeForm />
    </div>
  );
}

export default page;
