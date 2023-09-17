import { redirect } from "next/navigation";
import { Form } from "./components/form"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



async function page() {

  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/connexion");
  }

  return (
    <div className="mt-72"><Form/></div>
  )
}

export default page;