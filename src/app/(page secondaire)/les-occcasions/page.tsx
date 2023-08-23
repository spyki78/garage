import React, { useState } from "react";
import Filter from "../../components/../(site)/components/Filter";
import Formulaire from "@/app/components/Formulaire";

function page() {
  return (
    <main className="flex flex-col items-center justify-center max-h-auto w-full">
      <Filter />
    <Formulaire/>
    </main>
  );
}
export default page;
