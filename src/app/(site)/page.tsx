import { SectionServices } from "./components/SectionServices";
import { SectionTestimonials } from "./components/SectionTestimonials";
import Formulaire from "../components/Formulaire";
import {prisma} from "@/../libs/prismadb"

export default async function  Home() {
const reviews = await prisma.review.findMany({
  where: {
    isValid: true,
  }
})

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <SectionServices />
      <SectionTestimonials reviews={reviews} />
      <Formulaire />
    </main>
  );
}
