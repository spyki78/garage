"use client"; // s'authentifier sur l'application et savoir si la personne est connectée ou non 

import { SessionProvider } from "next-auth/react";

export function AuthContext({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}
