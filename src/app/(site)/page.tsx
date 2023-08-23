import { SectionServices } from "./components/SectionServices";
import { SectionTestimonials } from "./components/SectionTestimonials";
import Formulaire from "../components/Formulaire";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <SectionServices />
      <SectionTestimonials />
      <Formulaire/>
    </main>
  );
}
