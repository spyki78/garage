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

  console.log(session.user.isAdmin);
 
  const { isAdmin  } = session.user;
  if (!isAdmin) {
    redirect("/connexion");
  }

  return (
    <div>
      <EmployeForm />
    </div>
  );
}

export default page;
