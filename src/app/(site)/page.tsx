import Image from "next/image";
import Link from "next/link";
import { SectionServices } from "./components/SectionServices";
import { SectionTestimonials } from "./components/SectionTestimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <SectionServices />
      <SectionTestimonials />
    </main>
  );
}
