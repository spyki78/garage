// [...nextauth]/route.tsx

/*

import NextAuth, { AuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: 1,
          username: "Sébastien",
          role: "admin",
        };
        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV == "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/connexion",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(user);

      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


*/