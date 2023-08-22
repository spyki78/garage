import React, { useState } from "react";
import Filter from "./../components/../(site)/components/Filter";

function page() {
  return (
    <main className="flex flex-col md:flex-row items-center md:items-start justify-around max-h-auto w-full">
      <Filter />
    </main>
  );
}

export default page;
