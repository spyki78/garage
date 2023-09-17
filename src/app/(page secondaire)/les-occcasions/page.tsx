import React, { useState } from "react";
import Filter from "../../components/../(site)/components/Filter";
import Formulaire from "@/app/components/Formulaire";
import { prisma } from "@/../libs/prismadb";

async function page() {
  const cars = await prisma.annonce.findMany({
    include: {
      AnnoncePhotos: true,
    },
  });

  return (
    <main className="flex flex-col items-center justify-center max-h-auto w-full">
      <Filter/>
      <Formulaire />
    </main>
  );
}
export default page;
