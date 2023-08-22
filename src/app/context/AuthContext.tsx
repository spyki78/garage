"use client";

import { SessionProvider } from "next-auth/react";

export function AuthContext({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}
