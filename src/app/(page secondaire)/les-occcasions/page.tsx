import React, { useState } from "react";
import Formulaire from "@/app/components/Formulaire";
import { prisma } from "@/../libs/prismadb";
import { FilterSection } from "./components/filterSection";

async function page() {
  const cars : any = await prisma.annonce.findMany({
    include: {
      AnnoncePhotos: true,
    },
  });

  cars.map((car : any) => {
    const convertDate = new Date(car.year);
    car.year = convertDate.getFullYear() 
  });
  console.log(cars);

  return (
    <main className="flex flex-col items-center justify-center max-h-auto w-full">
      <FilterSection cars={cars} />
      <Formulaire />
    </main>
  );
}
export default page;

